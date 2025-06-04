import { mockNutritionData } from "@/lib/mockNutritionData"
import { FoodItem } from "@/store/mealStore"

export function calculateNutrition(
  foods: FoodItem[],
  supplements: FoodItem[]
) {
  const allItems = [...foods, ...supplements]

  const total = {
    carbs: 0,
    protein: 0,
    fat: 0,
    fiber: 0,
    calories: 0,
    micronutrients: [] // pode ser implementado depois
  }

  allItems.forEach(({ name, qty }) => {
    const key = name.toLowerCase()
    const base = mockNutritionData[key]
    if (!base) return

    const factor = parseFloat(qty) / 100 || 1 // assume 100g se qty não tiver número
    total.carbs += base.carbs * factor
    total.protein += base.protein * factor
    total.fat += base.fat * factor
    total.fiber += base.fiber * factor
    total.calories += base.calories * factor
  })

  return {
    carbs: +total.carbs.toFixed(1),
    protein: +total.protein.toFixed(1),
    fat: +total.fat.toFixed(1),
    fiber: +total.fiber.toFixed(1),
    calories: +total.calories.toFixed(1),
    micronutrients: [{
       name: "Potássio",
    amount: 580,
    unit: "mg",
    cdrPct: (580 / 3500) * 100, // ~16.5%
  }] 
  }
}
