'use client'

import { Sidebar } from "@/components/Sidebar"
import { NutritionPanel } from "@/components/NutritionPanel"
import { Button } from "@/components/ui/button"
import { MealForm } from "@/components/MealForm"
import { TopRightMenu } from "@/components/TopRightMenu"


export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 bg-gray-50 pt-4 pr-10 pb-10 pl-10">
        {/* Header com breadcrumb e TopRightMenu alinhados */}
        <div className="flex justify-between items-start mb-12">
          {/* Breadcrumb */}
          <p className="text-sm text-[#414552] font-medium whitespace-nowrap">
            Refeições &gt; <span className="text-[#414552] font-medium">Adicionar Refeição</span>
          </p>
          {/* Menu da direita */}
          <TopRightMenu />
        </div>
        {/* Wrapper horizontal */}
        <div className="flex gap-6 justify-between">
          <div className="flex flex-col -mt-10 ml-8">
            <MealForm />
          </div>
          <div className="flex flex-col items-end mr-50">
            <NutritionPanel />
          </div>
        </div>
      </main>
    </div>
  )
}
