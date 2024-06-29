from pydantic import BaseModel

class UpdateMacrosModel(BaseModel):
    calories: int
    protein: int
    carbs: int
    fats: int