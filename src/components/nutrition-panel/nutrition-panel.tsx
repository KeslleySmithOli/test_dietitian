import { CaloriesCard } from "@/components/nutrition-panel/calories-card";
import { MacronutrientsCard } from "@/components/nutrition-panel/macronutrients-card";
import { MicronutrientsCard } from "@/components/nutrition-panel/micronutrients-card";
import { useMealStore } from "@/store/mealStore";

import { Button } from "../ui/button";

export function NutritionPanel({ onReset }: { onReset: () => void }) {
	const meals = useMealStore((state) => state.meals);
	const reset = useMealStore((state) => state.reset);

	const latest = meals[meals.length - 1] ?? {
		nutrition: {
			carbs: 0,
			protein: 0,
			fat: 0,
			fiber: 0,
			calories: 0,
			micronutrients: [],
		},
	};

	if (!latest) return null;

	const handleSave = () => {
		useMealStore.getState().saveMeal();
		onReset();
	};

	const handleCancel = () => {
		reset();
		onReset();
	};

	return (
		<div className="flex flex-col items-center justify-center">
			{/* Painel */}
			<div className="w-[833px] h-[456px] rounded-[13px] border border-[#E4E4E4] bg-white p-4 flex gap-4">
				{/* Coluna da esquerda */}
				<div className="flex flex-col gap-4">
					<MacronutrientsCard nutrition={latest.nutrition} />
					<CaloriesCard calories={latest.nutrition.calories} />
				</div>

				<MicronutrientsCard micronutrients={latest.nutrition.micronutrients} />
			</div>

			{/* Texto + Botões abaixo do painel  */}
			<div className="mt-2 flex flex-col items-end w-[833px]">
				<p className="mb-8 text-sm text-[#C6C6C6] font-light font-system">
					CDR Médio: Valores baseados em recomendações da OMS/FAO e Dietary
					Guidelines para adultos.
				</p>

				<div className="flex gap-2">
					<Button variant="outline" onClick={handleCancel}>
						Cancelar
					</Button>
					<Button onClick={handleSave}>
						Salvar Alimento
					</Button>
				</div>
			</div>
		</div>
	);
}
