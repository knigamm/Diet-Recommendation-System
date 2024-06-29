def calculate_bmr(weight, height, age, gender):
    if gender == 'male':
        return 10 * weight + 6.25 * height - 5 * age + 5
    else:
        return 10 * weight + 6.25 * height - 5 * age - 161
    
def calculate_tdee(bmr, activity_level):
    activity_factors = {
        'sedentary': 1.2,
        'lightly_active': 1.375,    
        'moderately_active': 1.55,
        'very_active': 1.8125,
    }
    return bmr * activity_factors[activity_level]

def calculate_macros(calories, weight, goal):
    if goal == 'muscle_gain':
        protein_grams = 2.0 * weight
    elif goal == 'weight_loss':
        protein_grams = 1.8 * weight
    else:
        protein_grams = 1.0 * weight

    protein_calories = protein_grams * 4
    fat_calories = 0.3 * calories
    carb_calories = calories - protein_calories - fat_calories

    return {
        'calories': calories,
        'protein': protein_grams,
        'carbs': carb_calories / 4,
        'fats': fat_calories / 9
    }