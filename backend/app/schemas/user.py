# backend/app/schemas/user.py
# --- MODIFIED FILE ---
# Added username to the Pydantic models.

from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    username: str # New field
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    username: str # New field
    email: EmailStr
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str