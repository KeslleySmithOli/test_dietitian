  'use client'

  import { useMealStore } from "@/store/mealStore"

  export function MealForm() {
    const meals = useMealStore((state) => state.meals)

    return (
      <div className="flex flex-col">

        <h1 className="text-[28px] font-bold mb-8 text-[#414552] font-system">Adicionar Refeição</h1>

        <div className="flex gap-1 mb-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#414552] font-medium font-system">Horário</label>
            <input type="text" className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[84px]" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#414552] font-medium font-system">Título</label>
            <input type="text" className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[143px]" />
          </div>
        </div>

        <div className="h-[1px] w-[5px] bg-[#B1B1B1] my-4 mb-8" />

        <div className="mb-6">
          <h2 className="text-base text-[#675DFF] font-bold mb-2 font-system">Alimentos</h2>

          <div className="flex gap-3 mb-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#414552] font-medium font-system">Item</label>
              <input type="text" className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[150px]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#414552] font-medium font-system">Quantidade</label>
              <input type="text" className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[73px]" />
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#414552] mb-6">
            <span className="cursor-move text-xl">⋮⋮</span>
            <span>Maçã ou Manga</span>
            <span className="ml-[62px] text-[#414552] text-sm">250g</span>
          </div>

          <button className="w-[234px] bg-[#675DFF] hover:bg-[#675DFF] transition-colors text-white text-sm font-medium rounded px-6 h-[28px] font-system">
            Adicionar Alimento
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-base text-[#675DFF] font-bold mb-4 font-system">Suplemento</h2>

          <div className="flex gap-3 mb-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#414552] font-medium font-system">Item</label>
              <input type="text" className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[150px]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#414552] font-medium font-system">Quantidade</label>
              <input type="text" className="border border-[1px] rounded-[5px] px-3 h-[25px] text-sm w-[73px]" />
            </div>
          </div>

          <button className="w-[234px] bg-[#675DFF] hover:bg-[#675DFF] transition-colors text-white text-sm font-medium rounded px-6 h-[28px] font-system">
            Adicionar Suplemento
          </button>
        </div>

        <div>
          <h2 className="text-base text-[#675DFF] font-bold mb-2 font-system">Observação</h2>
          <textarea className="w-[234px] border border-[1px] rounded-[5px] px-3 py-2 text-sm h-[70px] resize-none" />
        </div>
      </div>
    )
  }
