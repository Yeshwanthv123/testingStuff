from sqlalchemy.orm import Session
from ..models.goal import WeeklyGoal
from ..schemas.goal import GoalCreate
from datetime import date, timedelta

def get_start_of_week():
    today = date.today()
    start_of_week = today - timedelta(days=today.weekday()) # Monday as start of week
    return start_of_week

def get_current_week_goal(db: Session, user_id: int):
    start_of_week = get_start_of_week()
    return db.query(WeeklyGoal).filter(WeeklyGoal.owner_id == user_id, WeeklyGoal.week_start_date == start_of_week).first()

def create_or_update_week_goal(db: Session, goal: GoalCreate, user_id: int):
    start_of_week = get_start_of_week()
    db_goal = get_current_week_goal(db, user_id)

    if db_goal:
        db_goal.target_co2 = goal.target_co2
    else:
        db_goal = WeeklyGoal(
            target_co2=goal.target_co2,
            owner_id=user_id,
            week_start_date=start_of_week
        )
        db.add(db_goal)

    db.commit()
    db.refresh(db_goal)
    return db_goal
