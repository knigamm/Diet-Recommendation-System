from fastapi import FastAPI, HTTPException, Request, status
from fastapi.responses import JSONResponse
from src.user.routes import user_router
from src.macros.routes import macros_router
from src.user.utils import decode_token

app = FastAPI(
    title="Diet Planner"
)

EXCLUDED_PATHS = ["/api/user/login", "/api/user/signup"]

@app.middleware("http")
async def check_token(request: Request, call_next):
    if request.url.path in EXCLUDED_PATHS:
        return await call_next(request)
    
    auth_header = request.headers.get("Authorization")
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
        try:
            token_data = decode_token(token)
            request.state.user = token_data
        except HTTPException as e:
            return JSONResponse(status_code=e.status_code, content={"detail": e.detail})
    else:
        return JSONResponse(
            status_code=status.HTTP_401_UNAUTHORIZED,
            content={"detail": "Invalid authentication credentials"},
            headers={"WWW-Authenticate": "Bearer"},
        )
    response = await call_next(request)
    return response 


app.include_router(user_router, prefix="/api/user", tags = "User")
app.include_router(macros_router, prefix="/api/macros", tags = "Macros")