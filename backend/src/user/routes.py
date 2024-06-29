from fastapi import APIRouter, HTTPException, Response, status, Depends
from src.db.main import get_session
from .services import UserServices
from .schemas import CreateUserModel
from sqlmodel.ext.asyncio.session import AsyncSession

user_router = APIRouter()
user_services = UserServices()

@user_router.post("/signup", status_code=status.HTTP_201_CREATED)
async def create_user(user_data: CreateUserModel, session: AsyncSession = Depends(get_session)):
    
    email = user_data.email
    user_exists = await user_services.user_exists(email, session)
    
    if user_exists:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User with email already exists"
        )
    
    await user_services.create_user(user_data, session)
    
    return Response(content="successful", status_code=201)