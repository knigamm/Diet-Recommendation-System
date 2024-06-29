from datetime import timedelta
from fastapi import APIRouter, HTTPException, Request, Response, status, Depends
from src.config import Config
from src.db.main import get_session
from .utils import create_access_token
from .model import User
from .services import UserServices
from .schemas import CreateUserModel, LoginUserModel, UpdateUserModel
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
    
    return Response(content="successful", status_code=status.HTTP_201_CREATED)

@user_router.patch("/", response_model=User, status_code=status.HTTP_200_OK)
async def update_profile(request: Request,update_data: UpdateUserModel, session: AsyncSession = Depends(get_session)):
    
    user = request.state.user
    
    if user:
        uid = user.uid
        updated_user = await user_services.update_user(uid, update_data, session)
        
        if update_data is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
        
        return updated_user
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

@user_router.post("/login")
async def login_for_access_toekn(
    user: LoginUserModel,
    session: AsyncSession = Depends(get_session)
):
    user_in_db = await user_services.authenticate_user(user.email, user.password, session)
    
    if not user_in_db:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    access_token_expires = timedelta(days=Config.ACCESS_TOKEN_EXPIRE_DAYS)
    data = {"sub":str(user_in_db.uid), "is_admin": user_in_db.is_admin}
    access_token = create_access_token(data, access_token_expires)
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "is_admin": user_in_db.is_admin,
    }
    
@user_router.get("/", response_model = User)
async def get_user_data(request: Request, session: AsyncSession = Depends(get_session)):
    user = request.state.user
    
    if user:
        uid = user.uid
        user_data = await user_services.get_user_by_uid(uid, session)
        
        return user_data
    
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
