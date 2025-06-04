'use client'

import { useMealStore } from '@/store/mealStore'
import { useState, useRef, useEffect } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface DraggableItem {
  id: string
  index: number
  type: 'food' | 'supplement'
}

function DraggableRow({
  id,
  index,
  name,
  qty,
  moveItem,
  type
}: {
  id: string
  index: number
  name: string
  qty: string
  moveItem: (from: number, to: number) => void
  type: 'food' | 'supplement'
}) {
  const ref = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop<DraggableItem>({
    accept: type,
    hover(item) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return
      moveItem(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type,
    item: { id, index, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div
      ref={ref}
      className="flex items-center justify-between text-sm text-[#414552] mb-2 w-[234px]"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="flex items-center gap-2">
        <span className="cursor-move text-xl">⋮⋮</span>
        <span>{name}</span>
      </div>
      <span className="text-[#414552] text-sm">{qty}</span>
    </div>
  )
}

export function MealForm() {
  const {
    current,
    meals,
    setTime,
    setTitle,
    addFood,
    addSupplement,
    setObservation,
    saveMeal,
  } = useMealStore()

  const isSaved = useMealStore((s) => s.isSaved)
  const [foodName, setFoodName] = useState('')
  const [foodQty, setFoodQty] = useState('')
  const [supplementName, setSupplementName] = useState('')
  const [supplementQty, setSupplementQty] = useState('')

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
        <h1 className="text-[28px] font-bold mb-8 text-[#414552] font-system">Adicionar Refeição</h1>

        <div className="flex gap-6 mb-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#414552] font-medium font-system">Horário</label>
            {isSaved ? (
              <span className="text-[24px] font-bold leading-none font-system text-[#414552]">
                {lastMeal?.time || '-'}
              </span>
            ) : (
              <input
                value={current.time}
                onChange={(e) => setTime(e.target.value)}
                type="text"
                className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[84px]"
              />
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#414552] font-medium font-system">Título</label>
            {isSaved ? (
              <span className="text-[24px] font-bold leading-none font-system text-[#414552]">
                {lastMeal?.title || '-'}
              </span>
            ) : (
              <input
                value={current.title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[143px]"
              />
            )}
          </div>
        </div>

        {isSaved ? (
          <p className="text-[#9F9F9F] text-sm font-system -mt-4 mb-8">
            Criado dia {new Date(lastMeal?.createdAt || new Date()).toLocaleDateString("pt-BR")} no plano alimentar do Ryan Levy
          </p>
        ) : (
          <div className="h-[1px] w-[5px] bg-[#B1B1B1] my-4 mb-8" />
        )}

        {/* ALIMENTOS */}
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

          {(isSaved ? lastMeal?.foods : current.foods).map((food, index) => (
            <DraggableRow
              key={food.id}
              id={food.id}
              index={index}
              name={food.name}
              qty={food.qty}
              type="food"
              moveItem={(from, to) => moveItem('food', from, to)}
            />
          ))}

          {!isSaved && (
            <button
              onClick={() => {
                if (foodName && foodQty) {
                  addFood(foodName, foodQty)
                  setFoodName('')
                  setFoodQty('')
                }
              }}
              className="w-[234px] bg-[#675DFF] hover:bg-[#675DFF] transition-colors text-white text-sm font-medium rounded px-6 h-[28px] font-system"
            >
              Adicionar Alimento
            </button>
          )}
        </div>

        {/* SUPLEMENTOS */}
        <div className="mb-6">
          <h2 className="text-base text-[#675DFF] font-semibold mb-2">Suplemento</h2>

          {!isSaved && (
            <div className="flex gap-3 mb-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#414552] font-medium font-system">Item</label>
                <input
                  value={supplementName}
                  onChange={(e) => setSupplementName(e.target.value)}
                  type="text"
                  className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[150px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#414552] font-medium font-system">Quantidade</label>
                <input
                  value={supplementQty}
                  onChange={(e) => setSupplementQty(e.target.value)}
                  type="text"
                  className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[73px]"
                />
              </div>
            </div>
          )}

          {(isSaved ? lastMeal?.supplements : current.supplements).map((supp, index) => (
            <DraggableRow
              key={supp.id}
              id={supp.id}
              index={index}
              name={supp.name}
              qty={supp.qty}
              type="supplement"
              moveItem={(from, to) => moveItem('supplement', from, to)}
            />
          ))}

          {!isSaved && (
            <button
              onClick={() => {
                if (supplementName && supplementQty) {
                  addSupplement(supplementName, supplementQty)
                  setSupplementName('')
                  setSupplementQty('')
                }
              }}
              className="w-[234px] bg-[#675DFF] hover:bg-[#675DFF] transition-colors text-white text-sm font-medium rounded px-6 h-[28px] font-system"
            >
              Adicionar Suplemento
            </button>
          )}
        </div>

        {/* OBSERVAÇÃO */}
        <div>
          <h2 className="text-base text-[#675DFF] font-semibold mb-2">Observação</h2>
          {!isSaved ? (
            <textarea
              value={current.observation}
              onChange={(e) => setObservation(e.target.value)}
              className="w-[234px] border border-[1px] rounded-[5px] px-3 py-2 text-sm h-[70px] resize-none"
            />
          ) : (
            <p className="text-sm text-[#414552]">{lastMeal?.observation || '-'}</p>
          )}
        </div>

        {/* BOTÃO FINAL 
        {!isSaved && (
          <button
            onClick={() => {
              saveMeal()
              setIsSaved(true)
            }}
            className="w-[234px] bg-[#675DFF] mt-6 hover:bg-[#675DFF] transition-colors text-white text-sm font-medium rounded px-6 h-[28px] font-system"
          >
            Salvar Alimento
          </button>
        )}
          */}
      </div>

    </DndProvider>
  )
}
