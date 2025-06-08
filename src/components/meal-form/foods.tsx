'use client'

import { useState } from "react";

import { DraggableRow } from "./draggable-row";

interface Food {
  id: string
  name: string
  qty: string
}

interface FoodsProps {
  isSaved: boolean
  foods: Food[]
  onAddFood: (name: string, qty: string) => void
  onMoveFood: (from: number, to: number) => void
}

export function Foods({ isSaved, foods, onAddFood, onMoveFood }: FoodsProps) {
  const [foodName, setFoodName] = useState('')
  const [foodQty, setFoodQty] = useState('')

  const handleAddFood = () => {
    if (foodName && foodQty) {
      onAddFood(foodName, foodQty)
      setFoodName('')
      setFoodQty('')
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-base text-[#675DFF] font-semibold mb-2">Alimentos</h2>

      {!isSaved && (
        <div className="flex gap-3 mb-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#414552] font-medium font-system">Item</label>
            <input
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              type="text"
              className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[150px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#414552] font-medium font-system">Quantidade</label>
            <input
              value={foodQty}
              onChange={(e) => setFoodQty(e.target.value)}
              type="text"
              className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[73px]"
            />
          </div>
        </div>
      )}

      {foods.map((food, index) => (
        <DraggableRow
          key={food.id}
          id={food.id}
          index={index}
          name={food.name}
          qty={food.qty}
          type="food"
          moveItem={onMoveFood}
        />
      ))}

      {!isSaved && (
        <button
          onClick={handleAddFood}
          className="w-[234px] bg-[#675DFF] hover:bg-[#675DFF] transition-colors text-white text-sm font-medium rounded px-6 h-[28px] font-system"
        >
          Adicionar Alimento
        </button>
      )}
    </div>
  )
}
