import uuid
from datetime import date
from sqlmodel import Field, SQLModel

class TargetMacros(SQLModel, table=True):
    __tablename__ = "target_macros"
    uid: int = Field(primary_key=True)
    user: uuid.UUID = Field(foreign_key="users.uid", default=None)
    calories: int
    protein: int
    carbs: int
    fats: int

class MacrosTracker(SQLModel, table=True):
    __tablename__ = "macros_tracker"
    uid: int = Field(primary_key=True)
    user: uuid.UUID = Field(foreign_key="users.uid", default=None)
    calories: int
    protein: int
    carbs: int
    fats: int
    date: date