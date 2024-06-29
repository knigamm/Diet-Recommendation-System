from datetime import datetime
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from .utils import generate_password_hash, verify_password
from .schemas import CreateUserModel, UpdateUserModel
from .models import User

class UserServices:
    
    async def get_user_by_email(self, email: str, session: AsyncSession):
        statement = select(User).where(User.email == email)
        
        result = await session.execute(statement)
        user = result.scalar()
        if user is None:
            return None
        return user
    
    async def user_exists(self, email: str, session: AsyncSession):
        user = await self.get_user_by_email(email, session)
        
        return True if user is not None else False
    
    async def create_user(self, user_data: CreateUserModel, session: AsyncSession):
        user_data_dict = user_data.model_dump()
        
        new_user = User(
            **user_data_dict
        )
        
        new_user.password_hash = generate_password_hash(user_data_dict['password'])
        
        session.add(new_user)
        await session.commit()
        
        return new_user
    
    async def get_user_by_uid(self, uid: str, session: AsyncSession):
        statement = select(User).where(User.uid == uid)
        
        result = await session.execute(statement)
        user = result.scalar()
        if user is None:
            return None
        return user
    
    async def update_user(self,uid :str, update_data: UpdateUserModel, session: AsyncSession):
        user_to_update = await self.get_user_by_uid(uid, session)
        
        if user_to_update is not None:
            update_data_dict = update_data.model_dump()
            
            for k, v in update_data_dict.items():
                setattr(user_to_update, k ,v)
                
            user_to_update.updated_at = datetime.now()
            
            await session.commit()
            
            return user_to_update
        else:
            return None
        
    async def authenticate_user(self, email: str, password: str, session: AsyncSession):
        user = await self.get_user_by_email(email, session)
        
        if not user:
            return False
        
        if not verify_password(password, user.password_hash):
            return False
        
        return user
    
    async def get_user_profile(self, uid: str, session: AsyncSession):
        statement = select(
            User.height,
            User.weight,
            User.health_goals,
            User.activity,
            User.age,
            User.gender
        ).where(User.uid == uid)
        
        result = await session.execute(statement)
        profile = result.one_or_none()
        if profile is None:
            return None
        return profile