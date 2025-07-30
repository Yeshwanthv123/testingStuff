# backend/app/api/api.py
# --- MODIFIED FILE ---
# Add the new carbon router.

from fastapi import APIRouter
from .endpoints import auth, carbon

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(carbon.router, prefix="/carbon", tags=["carbon"])