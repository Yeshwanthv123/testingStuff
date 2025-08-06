# backend/app/crud/streak.py
# --- NEW FILE ---

from sqlalchemy.orm import Session
from sqlalchemy import func, distinct
from ..models.carbon_entry import CarbonEntry
from datetime import date, timedelta

def get_user_streak(db: Session, user_id: int) -> int:
    """
    Calculates the user's current streak of consecutive days with entries.
    The streak is maintained if the last entry was today or yesterday.
    """
    # Get all unique, distinct dates the user has made an entry, in descending order
    entry_dates_query = (
        db.query(distinct(CarbonEntry.entry_date))
        .filter(CarbonEntry.owner_id == user_id)
        .order_by(CarbonEntry.entry_date.desc())
    )
    
    entry_dates = [d[0] for d in entry_dates_query.all()]

    if not entry_dates:
        return 0

    today = date.today()
    yesterday = today - timedelta(days=1)
    
    # If the most recent entry is not from today or yesterday, the streak is broken
    if entry_dates[0] not in [today, yesterday]:
        return 0

    streak = 0
    # Start checking from the most recent entry date
    expected_date = entry_dates[0]

    for entry_date in entry_dates:
        if entry_date == expected_date:
            streak += 1
            expected_date -= timedelta(days=1)
        else:
            # A gap was found, so the streak ends
            break
            
    return streak