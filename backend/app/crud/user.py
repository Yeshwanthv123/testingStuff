# backend/app/crud/user.py
# --- MODIFIED FILE ---
# Updated create_user to handle the new username field.

from sqlalchemy.orm import Session
from ..models.user import User
from ..schemas.user import UserCreate
from ..core.security import get_password_hash

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def get_user_by_username(db: Session, username: str): # New function
    return db.query(User).filter(User.username == username).first()

def create_user(db: Session, user: UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = User(
        email=user.email, 
        hashed_password=hashed_password, 
        username=user.username # New field
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user