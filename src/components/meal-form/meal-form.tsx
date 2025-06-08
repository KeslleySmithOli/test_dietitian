'use client'

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useMealStore } from "@/store/mealStore";

import { Foods } from "./foods";
import { MealHeader } from "./meal-header";
import { Observations } from "./observations";
import { Supplements } from "./supplements";

export function MealForm() {
  const {
    current,
    meals,
    setTime,
    setTitle,
    addFood,
    addSupplement,
    setObservation,
  } = useMealStore()

  const isSaved = useMealStore((s) => s.isSaved)
  const lastMeal = meals[meals.length - 1]

  const moveItem = (type: 'food' | 'supplement', from: number, to: number) => {
    const items = [...(type === 'food' ? current.foods : current.supplements)]
    const [moved] = items.splice(from, 1)
    items.splice(to, 0, moved)
    
    if (type === 'food') {
      useMealStore.setState((s) => ({ current: { ...s.current, foods: items } }))
    } else {
      useMealStore.setState((s) => ({ current: { ...s.current, supplements: items } }))
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col">
        <MealHeader
          isSaved={isSaved}
          time={isSaved ? lastMeal?.time || '' : current.time}
          title={isSaved ? lastMeal?.title || '' : current.title}
          onTimeChange={setTime}
          onTitleChange={setTitle}
          createdAt={lastMeal?.createdAt}
        />

        <Foods
          isSaved={isSaved}
          foods={isSaved ? lastMeal?.foods || [] : current.foods}
          onAddFood={addFood}
          onMoveFood={(from, to) => moveItem('food', from, to)}
        />

        <Supplements
          isSaved={isSaved}
          supplements={isSaved ? lastMeal?.supplements || [] : current.supplements}
          onAddSupplement={addSupplement}
          onMoveSupplement={(from, to) => moveItem('supplement', from, to)}
        />

        <Observations
          isSaved={isSaved}
          observation={isSaved ? lastMeal?.observation || '' : current.observation}
          onObservationChange={setObservation}
        />
      </div>
    </DndProvider>
  )
}
