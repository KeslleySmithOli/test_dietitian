interface CaloriesCardProps {
    calories: number
}

export function CaloriesCard({ calories }: CaloriesCardProps) {
    return (
        <div className="w-[227px] h-[87px] rounded-[7px] border border-[#e4e4e400] bg-[#FBFBFB] p-3 flex flex-col justify-between">
            <span className="text-[#414552] text-sm font-semibold">Calorias</span>
            <span className="text-[#675DFF] text-2xl font-semibold">{Math.round(calories)} kcal</span>
        </div>
    )
} 