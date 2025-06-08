import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartProps {
    carbs: number
    protein: number
    fat: number
}

export function PieChart({ carbs, protein, fat }: PieChartProps) {
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
        <div className="w-[120px] h-[120px] self-center">
            <Pie 
                data={chartData} 
                options={{ 
                    plugins: { 
                        legend: { display: false } 
                    } 
                }} 
            />
        </div>
    )
} 