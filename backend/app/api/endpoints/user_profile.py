from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.dependencies import get_db  # ✅ Corrected import
from app.models.user import User
from app.core.security import get_current_user

router = APIRouter()

@router.get("/users/me")
def read_current_user(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return {
        "username": current_user.username,
        "email": current_user.email,
        "password": "********",  # never expose hashed password
        "totalEmitted": "2,430.2 kg",  # static mock
        "totalSaved": "1,247.8 kg",    # static mock
        "streak": "12 days"
    }
