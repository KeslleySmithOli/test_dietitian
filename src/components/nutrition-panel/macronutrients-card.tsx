import { PieChart } from "@/components/nutrition-panel/pie-chart";

interface MacronutrientsCardProps {
    nutrition: {
        carbs: number
        protein: number
        fat: number
        fiber: number
    }
}

export function MacronutrientsCard({ nutrition }: MacronutrientsCardProps) {
    const { carbs, protein, fat, fiber } = nutrition

    return (
        <div className="w-[227px] h-[331px] rounded-[7px] border border-[#e4e4e400] bg-[#FBFBFB] p-3 flex flex-col justify-between">
            <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-[#675DFF] mb-4 mt-0.5">Macronutrientes</h3>

                <div className="flex justify-between text-sm">
                    <span className="text-[#004488] font-medium">Carboidratos</span>
                    <span className="text-[#004488] font-medium">{carbs.toFixed(1)}g</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-[#FF7A01] font-medium">Proteína</span>
                    <span className="text-[#FF7A01] font-medium">{protein.toFixed(1)}g</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-[#15BE53] font-medium">Gordura</span>
                    <span className="text-[#15BE53] font-medium">{fat.toFixed(1)}g</span>
                </div>
            </div>

            {/* Gráfico */}
            <PieChart carbs={carbs} protein={protein} fat={fat} />

            {/* Fibra Alimentar */}
            <div className="flex justify-between text-sm">
                <span className="text-[#414552] font-medium">Fibra Alimentar</span>
                <span className="text-[#414552] font-medium">{fiber.toFixed(1)}g</span>
            </div>
        </div>
    )
} 