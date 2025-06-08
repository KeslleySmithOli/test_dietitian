'use client'

import { useState } from "react";

import { DraggableRow } from "./draggable-row";

interface Supplement {
  id: string
  name: string
  qty: string
}

interface SupplementsProps {
  isSaved: boolean
  supplements: Supplement[]
  onAddSupplement: (name: string, qty: string) => void
  onMoveSupplement: (from: number, to: number) => void
}

export function Supplements({ isSaved, supplements, onAddSupplement, onMoveSupplement }: SupplementsProps) {
  const [supplementName, setSupplementName] = useState('')
  const [supplementQty, setSupplementQty] = useState('')

  const handleAddSupplement = () => {
    if (supplementName && supplementQty) {
      onAddSupplement(supplementName, supplementQty)
      setSupplementName('')
      setSupplementQty('')
    }
  }

  return (
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

      {supplements.map((supp, index) => (
        <DraggableRow
          key={supp.id}
          id={supp.id}
          index={index}
          name={supp.name}
          qty={supp.qty}
          type="supplement"
          moveItem={onMoveSupplement}
        />
      ))}

      {!isSaved && (
        <button
          onClick={handleAddSupplement}
          className="w-[234px] bg-[#675DFF] hover:bg-[#675DFF] transition-colors text-white text-sm font-medium rounded px-6 h-[28px] font-system"
        >
          Adicionar Suplemento
        </button>
      )}
    </div>
  )
}
