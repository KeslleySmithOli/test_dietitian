import { useMealStore } from "@/store/mealStore"
import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export function NutritionPanel() {
  const meals = useMealStore((state) => state.meals)
  const latest = meals[meals.length - 1] ?? {
  nutrition: {
    carbs: 0,
    protein: 0,
    fat: 0,
    fiber: 0,
    calories: 0,
    micronutrients: []
  }
}


  if (!latest) return null

  const { carbs, protein, fat, fiber, calories } = latest.nutrition

  const chartData = {
    labels: ["Carboidratos", "Proteína", "Gordura"],
    datasets: [
      {
        data: [carbs, protein, fat],
        backgroundColor: ["#004488", "#FF7A01", "#15BE53"],
        borderWidth: 0,
      },
    ],
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Painel */}
      <div className="w-[833px] h-[456px] rounded-[13px] border border-[#E4E4E4] bg-white p-4 flex gap-4">
        {/* Coluna da esquerda */}
        <div className="flex flex-col gap-4">
          {/* Retângulo 1 */}
          <div className="w-[227px] h-[331px] rounded-[7px] border border-[#e4e4e400] bg-[#FBFBFB] p-3 flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold text-[#675DFF] mb-4 mt-0.5">Macronutrientes</h3>

              <div className="flex justify-between text-sm">
                <span className="text-[#004488] font-medium">Carboidratos</span>
                <span className="text-[#004488] font-bold">{carbs.toFixed(1)}g</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#FF7A01] font-medium">Proteína</span>
                <span className="text-[#FF7A01] font-bold">{protein.toFixed(1)}g</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#15BE53] font-medium">Gordura</span>
                <span className="text-[#15BE53] font-bold">{fat.toFixed(1)}g</span>
              </div>
            </div>

            {/* Gráfico */}
            <div className="w-[120px] h-[120px] self-center">
              <Pie data={chartData} options={{ plugins: { legend: { display: false } } }} />
            </div>

            {/* Fibra Alimentar */}
            <div className="flex justify-between text-sm">
              <span className="text-[#414552] font-medium">Fibra Alimentar</span>
              <span className="text-[#414552] font-bold">{fiber.toFixed(1)}g</span>
            </div>
          </div>

          {/* Retângulo 2 */}
          <div className="w-[227px] h-[87px] rounded-[7px] border border-[#e4e4e400] bg-[#FBFBFB] p-3 flex flex-col justify-between">
            <span className="text-[#414552] text-sm font-semibold">Calorias</span>
            <span className="text-[#675DFF] text-2xl font-bold">{Math.round(calories)} kcal</span>
          </div>
        </div>

        {/* Retângulo 3 */}
        <div className="w-[573px] h-[429px] rounded-[7px] border border-[#e4e4e400] bg-[#FBFBFB] p-4">
          <h3 className="text-sm font-bold text-[#675DFF] mb-4">Micronutrientes</h3>

          <div className="grid grid-cols-4 gap-4 text-[#9F9F9F] text-sm">
            <span>Micronutriente</span>
            <span>Qtde</span>
            <span>CDR Médio</span>
            <span>% do CDR</span>   
          </div>

          {/* Ainda vazio, será preenchido futuramente com dados reais */}
        </div>
      </div>

      {/* Texto + Botões abaixo do painel */}
      <div className="mt-2 flex flex-col items-end w-[833px]">
        <p className="mb-8 text-sm text-[#C6C6C6] font-medium font-system">
          CDR Médio: Valores baseados em recomendações da OMS/FAO e Dietary Guidelines para adultos.
        </p>

        <div className="flex gap-2">
          <button className="text-sm px-4 py-1.5 text-[#414552] border rounded">Cancelar</button>
          <button className="text-sm px-6 py-1.5 bg-[#675DFF] hover:bg-[#675DFF] text-white rounded">Salvar Alimento</button>
        </div>
      </div>
    </div>
  )
}
