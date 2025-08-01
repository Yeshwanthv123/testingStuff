# backend/app/api/endpoints/auth.py
# --- MODIFIED FILE ---
# Updated the register endpoint to check for existing usernames.

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import timedelta

from ...crud import user as crud_user
from ...schemas import user as schemas_user
from ...core import security
from ...core.config import settings
from ...db.dependencies import get_db

router = APIRouter()

@router.post("/register", response_model=schemas_user.UserOut)
def register_user(user: schemas_user.UserCreate, db: Session = Depends(get_db)):
    db_user_email = crud_user.get_user_by_email(db, email=user.email)
    if db_user_email:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    db_user_username = crud_user.get_user_by_username(db, username=user.username)
    if db_user_username:
        raise HTTPException(status_code=400, detail="Username already taken")
        
    return crud_user.create_user(db=db, user=user)

@router.post("/login", response_model=schemas_user.Token)
def login_for_access_token(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    # Note: Login still uses email (form_data.username) for authentication
    user = crud_user.get_user_by_email(db, email=form_data.username)
    if not user or not security.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = security.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}