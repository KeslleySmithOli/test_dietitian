import { Calendar1, CircleDollarSign, Contact } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
	return (
		<aside className="w-64 bg-white p-6 flex flex-col shadow-none border-r border-[#e6e6e6]">
			<div className="flex items-center gap-3 mb-8">
				<Image
					width={28}
					height={28}
					src="/marcelo.jpg"
					alt="Foto de perfil"
					className="w-6 h-6 rounded-full object-cover"
				/>
				<h2 className="text-sm font-semibold text-[#414552] font-system">
					Marcelo Cavalcante
				</h2>
			</div>
			<nav className="flex flex-col gap-4 text-sm text-[#414552] font-system font-semibold">
				<Link
					href="#"
					className="flex items-center gap-[10px] hover:text-black transition-colors">
					<Image
						width={15}
						height={15}
						src="/Sidebar/pageInicial.png"
						alt="Página Inicial"
						className="w-[15px] h-[15px] ml-[1.5px]"
					/>
					<span>Página inicial</span>
				</Link>
				<Link
					href="#"
					className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors">
					<Contact size={18} className="shrink-0" />
					<span>Pacientes</span>
				</Link>
				<Link
					href="#"
					className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors">
					<Calendar1 size={18} className="shrink-0" />
					<span>Agenda</span>
				</Link>
				<Link
					href="#"
					className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors">
					<CircleDollarSign size={18} className="shrink-0" />
					<span>Financeiro</span>
				</Link>
				<Link
					href="#"
					className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors mt-12">
					<Image
						width={15}
						height={15}
						src="/Sidebar/register.png"
						alt="Cadastro"
						className="w-[15px] h-[14px]"
					/>
					<span>Cadastros</span>
				</Link>
				<Link
					href="#"
					className="flex items-center text-[#414552] hover:text-black transition-colors ml-7 -mt-2 ">
					<span>Alimentos</span>
				</Link>
				<Link
					href="#"
					className="flex items-center text-[#414552] hover:text-black transition-colors ml-7 -mt-2 ">
					<span>Refeições</span>
				</Link>
			</nav>
		</aside>
	);
}
