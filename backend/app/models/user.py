# backend/app/models/user.py
# --- MODIFIED FILE ---
# We are changing how the 'created_at' timestamp is generated to fix the database error.

from sqlalchemy import Column, Integer, String, DateTime, func # Import func
from sqlalchemy.ext.declarative import declarative_base
import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    # Use server_default=func.now() to let the database handle the timestamp
    created_at = Column(DateTime, server_default=func.now())
