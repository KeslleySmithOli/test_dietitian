import { create } from "zustand"
import { nanoid } from "nanoid"

//Tipos
export interface Nutrition {
  carbs: number
  protein: number
  fat: number
  fiber: number
  calories: number
  micronutrients: Array<{
    name: string
    amount: number
    unit: string
    cdrPct: number
  }>
}

export interface FoodItem {
  id: string
  name: string
  qty: string
}

export interface MealItem {
  id: string
  time: string
  title: string
  foods: FoodItem[]
  supplements: FoodItem[]
  observation: string
  createdAt: Date
  nutrition: Nutrition
}

interface MealState {
  //lista de refeiçoes salvas
  meals: MealItem[]
  //estado interino do formulário
  current: {
    time: string
    title: string
    foods: FoodItem[]
    supplements: FoodItem[]
    observation: string
  }
  // ações para manipular o formulário
  setTime: (time: string) => void
  setTitle: (title: string) => void
  addFood: (name: string, qty: string) => void
  removeFood: (id: string) => void
  addSupplement: (name: string, qty: string) => void
  removeSupplement: (id: string) => void
  setObservation: (obs: string) => void
  // ação para salvar e limpar o formulário
  saveMeal: () => void
  // ação extra para resetar toda a lista
  reset: () => void
}

//Função de cálculo de nutrição (exemplo stub)
function calculateNutrition(
  foods: FoodItem[],
  supplements: FoodItem[]
): Nutrition {
  return {
    carbs: 0,
    protein: 0,
    fat: 0,
    fiber: 0,
    calories: 0,
    micronutrients: [],
  }
}

//Criação do store
export const useMealStore = create<MealState>((set, get) => ({
  meals: [],
  current: { time: "", title: "", foods: [], supplements: [], observation: "" },

  setTime: (time) =>
    set((s) => ({ current: { ...s.current, time } })),

  setTitle: (title) =>
    set((s) => ({ current: { ...s.current, title } })),

  addFood: (name, qty) =>
    set((s) => ({
      current: {
        ...s.current,
        foods: [...s.current.foods, { id: nanoid(), name, qty }],
      },
    })),

  removeFood: (id) =>
    set((s) => ({
      current: {
        ...s.current,
        foods: s.current.foods.filter((f) => f.id !== id),
      },
    })),

  addSupplement: (name, qty) =>
    set((s) => ({
      current: {
        ...s.current,
        supplements: [
          ...s.current.supplements,
          { id: nanoid(), name, qty },
        ],
      },
    })),

  removeSupplement: (id) =>
    set((s) => ({
      current: {
        ...s.current,
        supplements: s.current.supplements.filter(
          (f) => f.id !== id
        ),
      },
    })),

  setObservation: (observation) =>
    set((s) => ({
      current: { ...s.current, observation },
    })),

  saveMeal: () => {
    const { meals, current } = get()
    const nutrition = calculateNutrition(
      current.foods,
      current.supplements
    )

    const newMeal: MealItem = {
      id: nanoid(),
      time: current.time,
      title: current.title,
      foods: current.foods,
      supplements: current.supplements,
      observation: current.observation,
      createdAt: new Date(),
      nutrition,
    }

    set({
      meals: [...meals, newMeal],
      current: { time: "", title: "", foods: [], supplements: [], observation: "" },
    })
  },

  reset: () => set({ meals: [] }),
}))
