from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.core.database import get_db
from backend.models.patient import Patient

router = APIRouter()

@router.get("/", response_model=List[dict])
def read_patients(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    patients = db.query(Patient).offset(skip).limit(limit).all()
    return [{"id": p.id, "first_name": p.first_name, "last_name": p.last_name, "email": p.email} for p in patients]

@router.post("/")
def create_patient(patient_data: dict, db: Session = Depends(get_db)):
    patient = Patient(**patient_data)
    db.add(patient)
    db.commit()
    db.refresh(patient)
    return {"id": patient.id, "message": "Patient created successfully"}

@router.get("/{patient_id}")
def read_patient(patient_id: int, db: Session = Depends(get_db)):
    patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient
