interface Micronutrient {
    name: string
    amount: number
    unit: string
    cdrPct: number
}

interface MicronutrientsCardProps {
    micronutrients: Micronutrient[]
}

export function MicronutrientsCard({ micronutrients }: MicronutrientsCardProps) {
    return (
        <div className="w-[573px] h-[429px] rounded-[7px] border border-[#e4e4e400] bg-[#FBFBFB] p-4 overflow-y-auto">
            <h3 className="text-sm font-bold text-[#675DFF] mb-4">Micronutrientes</h3>

            <div className="grid grid-cols-4 gap-4 text-[#9F9F9F] text-sm mb-2">
                <span>Micronutriente</span>
                <span>Qtde</span>
                <span>CDR Médio</span>
                <span>% do CDR</span>
            </div>

            {micronutrients.length > 0 && micronutrients.map((micro, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 text-[#414552] text-sm font-medium">
                    <span>{micro.name}</span>
                    <span className="font-semibold">{micro.amount} {micro.unit}</span>
                    <span className="font-semibold">3.500 mg</span>
                    <span className="font-semibold">{micro.cdrPct.toFixed(1)}%</span>
                </div>
            ))}
        </div>
    )
} 