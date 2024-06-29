from datetime import date, timedelta
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from src.macros.schemas import UpdateMacrosModel
from src.user.services import UserServices

from .utils import calculate_bmr, calculate_macros, calculate_tdee
from .models import MacrosTracker, TargetMacros

user_services = UserServices()

class MacrosServices:
    async def get_target_macros(self, user_uid: str, session: AsyncSession):
        statement = select(TargetMacros).where(TargetMacros.user == user_uid)
        
        result = await session.execute(statement)
        res = result.scalar()
        if res is None:
            return None
        return res
    
    async def get_todays_macros(self, user_uid: str, session: AsyncSession):
        statement = select(MacrosTracker).where(MacrosTracker.user == user_uid).order_by(MacrosTracker.date.desc())
        
        result = await session.execute(statement)
        res = result.scalars().first()
        if res is None:
            return None
        return res
    
    async def create_target_macros(self, user_uid: str, session: AsyncSession):
        
        todays_macros = await self.get_target_macros(user_uid, session)
        
        if todays_macros:
            return None
        else:
            
            user = await user_services.get_user_profile(user_uid, session)
            
            bmr = calculate_bmr(user.weight, user.height, user.age, user.gender)
            calories = calculate_tdee(bmr, user.activity)
            macros = calculate_macros(calories, user.weight, user.health_goals)
            
            new_target = TargetMacros(
                **macros
            )
            new_target.user = user_uid
            
            session.add(new_target)
            await session.commit()
            
            return new_target
        
    async def update_target_macros(self, user_uid: str, session: AsyncSession):
        macros_to_update = await self.get_target_macros(user_uid, session)
        
        if macros_to_update:
            user = await user_services.get_user_profile(user_uid, session)
            
            bmr = calculate_bmr(user.weight, user.height, user.age, user.gender)
            calories = calculate_tdee(bmr, user.activity)
            macros = calculate_macros(calories, user.weight, user.health_goals)
            
            for k, v in macros.items():
                setattr(macros_to_update, k, v)
            await session.commit()
            
            return macros_to_update
        else:
            return None
        
    async def add_todays_macros(self, user_uid: str, macros_data: UpdateMacrosModel, session: AsyncSession):
        todays_macros = await self.get_todays_macros(user_uid, session)
        
        if todays_macros:
            return None
        else:
            
            new_macros = MacrosTracker(
                **macros_data.model_dump()
            )
            new_macros.user = user_uid
            new_macros.date = date.today()
            
            session.add(new_macros)
            await session.commit()
            
            return new_macros
        
    async def update_todays_macros(self, user_uid: str, macros_data: UpdateMacrosModel, session: AsyncSession):
        todays_macros = await self.get_todays_macros(user_uid, session)
        
        update_data_dict = macros_data.model_dump()
        
        for k, v in update_data_dict.items():
            setattr(todays_macros, k, v)
        await session.commit()
        
        return todays_macros