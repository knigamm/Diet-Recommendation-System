from datetime import date
from pydantic import BaseModel, Field

class CreateUserModel(BaseModel):
    first_name: str = Field(max_length=20)
    last_name: str = Field(max_length=20)
    email: str
    password: str = Field(min_length=8)
    is_admin: bool

class UpdateUserModel(BaseModel):
    first_name: str = Field(max_length=20)
    last_name: str = Field(max_length=20)
    email: str
    gender: str
    date_of_birth: date
    is_admin: bool
    profile_complete: bool
    weight: float
    height: float
    dietary_preferences: str
    allergies: str
    health_goals: str
    
class LoginUserModel(BaseModel):
    email: str
    password: str
    
class TokenData(BaseModel):
    uid: str
    is_admin: bool