from fastapi import APIRouter
from .endpoints import auth, carbon, goals # Add goals

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(carbon.router, prefix="/carbon", tags=["carbon"])
api_router.include_router(goals.router, prefix="/goals", tags=["goals"]) 