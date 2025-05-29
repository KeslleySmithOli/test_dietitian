"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Info } from 'lucide-react';

export function TopRightMenu() {
  return (
    <div className="flex justify-end items-center gap-4 w-full mb-4">
      {/* Itens de menu direto */}
      <span className="text-sm text-[#414552] font-system cursor-pointer">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[81px] h-[14.84px]"
        />
      </span>
      <span className="flex items-center justify-center w-[93px] h-[26px] bg-[#675DFF] rounded-[5px] px-2 gap-1 cursor-pointer">
        <img src="/iconTask.png" alt="Ícone tarefa" className="w-4 h-4" />
        <img src="/task.png" alt="Texto tarefa" className="h-[14px]" />
      </span>
      <span className="relative inline-block w-fit">
        <img
          src="/idontno.png"
          alt="Idontno"
          className="w-[18.3px] h-[16.3px]"
        />
        <img
          src="/elipse.png"
          alt="Elipse"
          className="absolute w-[7px] h-[7px] bottom-[-2px] right-[-2px]"
        />
      </span>

      <span className="text-sm text-[#414552] font-system cursor-pointer">
        <img
          src="/info.png"
          alt="Information"
          className="w-[18.3px] h-[18.3px]"
        />
      </span>
      <span className="text-sm text-[#414552] font-system cursor-pointer">
        <img
          src="/config.png"
          alt="config"
          className="w-[18.3px] h-[18.3px]"
        />
      </span>

      {/* Dropdown de perfil */}
      {/*<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 text-sm text-[#414552] font-system">
           <img
          src="/config.png"
          alt="config"
          className="w-[18.3px] h-[18.3px]"
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
  )
}
