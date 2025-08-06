# backend/app/api/api.py
# --- MODIFIED FILE ---

from fastapi import APIRouter
from .endpoints import auth, carbon, goals, leaderboard, streak # Add streak

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(carbon.router, prefix="/carbon", tags=["carbon"])
api_router.include_router(goals.router, prefix="/goals", tags=["goals"])
api_router.include_router(leaderboard.router, prefix="/leaderboard", tags=["leaderboard"])
api_router.include_router(streak.router, prefix="/streak", tags=["streak"])