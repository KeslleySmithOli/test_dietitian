'use client'

import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

interface DraggableItem {
  id: string
  index: number
  type: 'food' | 'supplement'
}

interface DraggableRowProps {
  id: string
  index: number
  name: string
  qty: string
  moveItem: (from: number, to: number) => void
  type: 'food' | 'supplement'
}

export function DraggableRow({
  id,
  index,
  name,
  qty,
  moveItem,
  type
}: DraggableRowProps) {
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