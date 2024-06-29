from fastapi import APIRouter, Depends, HTTPException, Request, status
from src.db.main import get_session
from .services import MacrosServices
from sqlmodel.ext.asyncio.session import AsyncSession

macros_router = APIRouter()
macros_services = MacrosServices()

@macros_router.post("/newtarget", status_code=status.HTTP_201_CREATED)
async def create_data(request: Request, session: AsyncSession = Depends(get_session)):
    
    user = request.state.user
    
    if user:
        user_id = user.uid
        macros = await macros_services.create_target_macros(user_id, session)
        return macros
    
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)
    
@macros_router.get("/target")
async def get_macors_target(request: Request, session: AsyncSession = Depends(get_session)):
    
    user = request.state.user
    
    if user:
        user_id = user.uid
        macros = await macros_services.get_target_macros(user_id, session)
        
        if macros is None:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Target already exists")
        else:
            return macros
    
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)
    
@macros_router.patch("/updatetarget")
async def update_target(request: Request, session: AsyncSession = Depends(get_session)):
    user = request.state.user
    
    if user:
        user_id = user.uid
        updated_macros = await macros_services.update_target_macros(user_id, session)
        
        return updated_macros
    else:
        raise HTTPException(status_code=status.HTTP_202_ACCEPTED)