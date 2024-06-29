from fastapi import FastAPI
from src.user.routes import user_router

app = FastAPI(
    title="Diet Planner"
)

app.include_router(user_router, prefix="/api/user", tags = "User")