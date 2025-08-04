# backend/app/crud/leaderboard.py
# --- NEW FILE ---

from sqlalchemy.orm import Session
from sqlalchemy import func
from ..models.user import User
from ..models.carbon_entry import CarbonEntry
from datetime import date, timedelta

def get_leaderboard_data(db: Session, limit: int = 10):
    today = date.today()
    start_of_week = today - timedelta(days=today.weekday())

    # This query calculates the average score for each user for the current week
    # and orders them by the highest score.
    leaderboard_query = (
        db.query(
            User.username,
            func.avg(CarbonEntry.carbon_score).label('weekly_avg_score')
        )
        .join(CarbonEntry, User.id == CarbonEntry.owner_id)
        .filter(CarbonEntry.entry_date >= start_of_week)
        .group_by(User.username)
        .order_by(func.avg(CarbonEntry.carbon_score).desc())
        .limit(limit)
    )
    
    results = leaderboard_query.all()
    
    # Add rank to the results
    ranked_results = []
    for i, (username, avg_score) in enumerate(results):
        ranked_results.append({
            "rank": i + 1,
            "username": username,
            "weekly_avg_score": int(round(avg_score)) if avg_score is not None else 0
        })
        
    return ranked_results