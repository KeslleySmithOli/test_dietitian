"use client";

import { useState } from "react";

import { MealForm } from "@/components/meal-form/meal-form";
import { NutritionPanel } from "@/components/nutrition-panel/nutrition-panel";

export default function Home() {
	const [isSaved, setIsSaved] = useState(false);

	return (
		<main className="flex min-h-screen justify-center">
			{/* Conteúdo principal */}
			<div className="flex justify-between items-start mb-12">
				{/* Breadcrumb */}
				<p className="text-sm text-[#414552] font-medium whitespace-nowrap">
					Refeições &gt;{" "}
					<span className="text-[#414552] font-medium">Adicionar Refeição</span>
				</p>
			</div>
			<div className="flex justify-center items-center pt-4 pr-10 pb-10 pl-10">
				{/* Wrapper horizontal */}
				<div className="flex gap-12 justify-between">
					<div className="flex flex-col -mt-10 ml-8">
						<MealForm />
					</div>
					<div className="flex flex-col items-end mr-50">
						<NutritionPanel onReset={() => setIsSaved(false)} />
					</div>
				</div>
			</div>
		</main>
	);
}
