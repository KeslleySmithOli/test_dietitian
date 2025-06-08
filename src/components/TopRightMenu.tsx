"use client";

import Image from "next/image";

export function TopRightMenu() {
	return (
		<div className="absolute right-3 top-3 flex items-center gap-4 mb-4">
			{/* Itens de menu direto */}
			<span className="text-sm text-[#414552] font-system cursor-pointer">
				<Image src="/logo.png" alt="Logo" width={81} height={15} priority />
			</span>
			<span className="flex items-center justify-center w-[93px] h-[26px] bg-[#675DFF] rounded-[5px] px-2 gap-1 cursor-pointer">
				<Image src="/iconTask.png" alt="Ícone tarefa" width={16} height={16} />
				<Image src="/task.png" alt="Texto tarefa" width={40} height={14} />
			</span>
			<span className="relative inline-block w-fit">
				<Image src="/idontno.png" alt="Idontno" width={18} height={16} />
				<Image
					src="/elipse.png"
					alt="Elipse"
					width={7}
					height={7}
					className="absolute bottom-[-2px] right-[-2px]"
				/>
			</span>

			<span className="text-sm text-[#414552] font-system cursor-pointer">
				<Image src="/info.png" alt="Information" width={18} height={18} />
			</span>
			<span className="text-sm text-[#414552] font-system cursor-pointer">
				<Image src="/config.png" alt="config" width={18} height={18} />
			</span>

			{/* Dropdown de perfil */}
			{/*<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 text-sm text-[#414552] font-system">
           <Image
          src="/config.png"
          alt="config"
          width={18}
          height={18}
        />
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Meu perfil</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>*/}
		</div>
	);
}
