# backend/app/db/wait_for_db.py
# --- MODIFIED FILE ---
# Added sys.path.append('.') to fix the ModuleNotFoundError in Docker.

import time
import sys
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
import logging

# This line is the fix. It adds the current directory to the Python path.
sys.path.append('.')

from app.core.config import settings

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def check_db_connection():
    max_retries = 30
    retry_interval = 2  # seconds
    
    db_url = settings.DATABASE_URL
    
    logger.info(f"Attempting to connect to database at {db_url.replace(settings.POSTGRES_PASSWORD, '****')}")

    engine = create_engine(db_url)

    for i in range(max_retries):
        try:
            connection = engine.connect()
            connection.close()
            logger.info("Database connection successful!")
            return True
        except OperationalError as e:
            logger.warning(f"Database connection attempt {i+1}/{max_retries} failed. Retrying in {retry_interval}s...")
            time.sleep(retry_interval)
    
    logger.error("Could not connect to the database after multiple retries.")
    return False

if __name__ == "__main__":
    if not check_db_connection():
        exit(1)