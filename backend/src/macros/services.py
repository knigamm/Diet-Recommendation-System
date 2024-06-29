from datetime import date, timedelta
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from src.user.services import UserServices

from .utils import calculate_bmr, calculate_macros, calculate_tdee
from .models import TargetMacros

user_services = UserServices()

class MacrosServices:
    async def get_target_macros(self, user_uid: str, session: AsyncSession):
        statement = select(TargetMacros).where(TargetMacros.user == user_uid)
        
        result = await session.execute(statement)
        res = result.scalar()
        if res is None:
            return None
        return res
    
    async def create_target_macros(self, user_uid: str, session: AsyncSession):
        
        macros_target = await self.get_target_macros(user_uid, session)
        
        if macros_target:
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
            print()
            for k, v in macros.items():
                setattr(macros_to_update, k, v)
                print(k,"::::",v)
            await session.commit()
            
            return macros_to_update
        else:
            return None