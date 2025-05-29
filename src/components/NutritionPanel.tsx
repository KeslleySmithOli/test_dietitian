import { Button } from "@/components/ui/button"
import { useMealStore } from "@/store/mealStore"


export function NutritionPanel() {
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
                                <span className="text-[#004488] font-bold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#FF7A01] font-medium">Proteína</span>
                                <span className="text-[#FF7A01] font-bold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#15BE53] font-medium">Gordura</span>
                                <span className="text-[#15BE53] font-bold">-</span>
                            </div>
                        </div>

                        {/* Gráfico (placeholder) */}
                        <div className="w-[120px] h-[120px] rounded-full bg-[#f9f9f9] self-center" />

                        {/* Fibra Alimentar */}
                        <div className="flex justify-between text-sm">
                            <span className="text-[#414552] font-medium">Fibra Alimentar</span>
                            <span className="text-[#414552] font-bold">-</span>
                        </div>
                    </div>

                    {/* Retângulo 2 */}
                    <div className="w-[227px] h-[87px] rounded-[7px] border border-[#e4e4e400] bg-[#FBFBFB] p-3 flex flex-col justify-between">
                        <span className="text-[#414552] text-sm font-semibold">Calorias</span>
                        <span className="text-[#675DFF] text-2xl font-bold">-</span>
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
                </div>
            </div>

            {/* Texto + Botões abaixo do painel */}
            <div className="mt-2 flex flex-col items-end w-[833px]">
                <p className="mb-8 text-sm text-[#C6C6C6] font-medium font-system">
                    CDR Médio: Valores baseados em recomendações da OMS/FAO e Dietary Guidelines para adultos.
                </p>

                <div className="flex gap-2">
                    <Button variant="outline" className="text-sm px-4 py-1.5 text-[#414552]">Cancelar</Button>
                    <Button className="text-sm px-6 py-1.5 bg-[#675DFF] hover:bg-[#675DFF]">Salvar Alimento</Button>
                </div>
            </div>
        </div>
    )
}
