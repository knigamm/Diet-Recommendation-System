from typing import Optional
from sqlmodel import SQLModel, Field, Column
from datetime import date, datetime
import sqlalchemy.dialects.postgresql as pg
import uuid


class User(SQLModel, table=True):
    __tablename__ = "users"
    uid: uuid.UUID = Field(
        sa_column = Column(
            pg.UUID,
            nullable = False,
            primary_key = True,
            index=True,
            default = uuid.uuid4
        )
    )
    first_name: str
    last_name: str
    email: str = Field(unique=True, nullable=False)
    gender: Optional[str] = Field(max_length=10)
    date_of_birth: Optional[date]
    weight: Optional[float] = Field(default=None)
    height: Optional[float] = Field(default=None)
    dietary_preferences: Optional[str] = Field(default=None)
    allergies: Optional[str] = Field(default=None)
    health_goals: Optional[str] = Field(default=None)
    password_hash: str = Field(exclude=True)
    is_admin: bool = Field(default=False)
    profile_complete: bool = Field(default=False)
    created_at: datetime = Field(sa_column=Column(pg.TIMESTAMP, default=datetime.now))
    updated_at: datetime = Field(sa_column=Column(pg.TIMESTAMP, default=datetime.now))