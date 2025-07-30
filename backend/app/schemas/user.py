# backend/app/schemas/user.py
# --- MODIFIED FILE ---
# Updated Config
# backend/app/schemas/user.py
# --- MODIFIED FILE ---
# Updated Config

from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    class Config:
        from_attributes = True # Updated from orm_mode

class Token(BaseModel):
    access_token: str
    token_type: str
