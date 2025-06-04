export const mockNutritionData: Record<string, {
  carbs: number
  protein: number
  fat: number
  fiber: number
  calories: number
}> = {
  // Alimento
  "maçã": { carbs: 14, protein: 0.3, fat: 0.2, fiber: 2.4, calories: 52 },
  "banana": { carbs: 23, protein: 1.3, fat: 0.3, fiber: 2.6, calories: 89 },
  "ovo": { carbs: 0.5, protein: 6, fat: 5, fiber: 0, calories: 70 },
  "peito de frango": { carbs: 0, protein: 31, fat: 3.6, fiber: 0, calories: 165 },
  "arroz integral": { carbs: 23, protein: 2.6, fat: 0.9, fiber: 1.8, calories: 111 },
  "batata doce": { carbs: 20, protein: 1.6, fat: 0.1, fiber: 3, calories: 86 },
  "aveia": { carbs: 66, protein: 16.9, fat: 6.9, fiber: 10.6, calories: 389 },

  // Suplemento
  "whey protein": { carbs: 2, protein: 25, fat: 1.5, fiber: 0, calories: 120 },
  "creatina": { carbs: 0, protein: 0, fat: 0, fiber: 0, calories: 0 },
  "caseína": { carbs: 3, protein: 24, fat: 1, fiber: 0, calories: 110 },
  "bcaa": { carbs: 0, protein: 5, fat: 0, fiber: 0, calories: 20 },
  "glutamina": { carbs: 0, protein: 5, fat: 0, fiber: 0, calories: 20 },
  "malto": { carbs: 25, protein: 0, fat: 0, fiber: 0, calories: 100 }
}
