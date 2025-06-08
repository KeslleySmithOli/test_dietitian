"use client";

interface MealHeaderProps {
	isSaved: boolean;
	time: string;
	title: string;
	onTimeChange: (time: string) => void;
	onTitleChange: (title: string) => void;
	createdAt?: Date;
}

export function MealHeader({
	isSaved,
	time,
	title,
	onTimeChange,
	onTitleChange,
	createdAt,
}: MealHeaderProps) {
	return (
		<>
			{!isSaved && (
				<h1 className="text-[28px] font-bold mb-8 text-[#414552] font-system">
					Adicionar Refeição
				</h1>
			)}

			<div className="flex gap-2 mb-6">
				<div className="flex flex-col gap-1">
					<label className="text-sm text-[#414552] font-medium font-system">
						Horário
					</label>

					{isSaved && (
						<span className="text-[24px] font-bold leading-none font-system text-[#414552]">
							{time || "-"}
						</span>
					)}

					{!isSaved && (
						<input
							value={time}
							onChange={(e) => onTimeChange(e.target.value)}
							type="text"
							className="border rounded-[5px] px-3 h-[25px] text-sm w-1/2"
						/>
					)}
				</div>

				<div className="flex flex-col gap-1">
					<label className="text-sm text-[#414552] font-medium font-system">
						Título
					</label>

					{isSaved && (
						<span className="text-[24px] font-bold leading-none font-system text-[#414552]">
							{title || "-"}
						</span>
					)}

					{!isSaved && (
						<input
							value={title}
							onChange={(e) => onTitleChange(e.target.value)}
							type="text"
							className="border rounded-[5px] px-3 h-[25px] text-sm w-full"
						/>
					)}
				</div>
			</div>

			{isSaved && (
				<p className="text-[#9F9F9F] text-sm font-system -mt-4 mb-8">
					Criado dia{" "}
					{new Date(createdAt || new Date()).toLocaleDateString("pt-BR")} no
					plano alimentar do Ryan Levy
				</p>
			)}

			{!isSaved && <div className="h-[1px] w-[5px] bg-[#B1B1B1] my-4 mb-8" />}
		</>
	);
}
