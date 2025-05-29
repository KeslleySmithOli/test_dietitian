import { Home as HomeIcon, Contact, Calendar1, CircleDollarSign } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col border-r border-[#e6e6e6]">
      <div className="flex items-center gap-3 mb-8">
        <img
          src="/marcelo.jpg"
          alt="Foto de perfil"
          className="w-8 h-8 rounded-full object-cover"
        />
        <h2 className="text-sm font-semibold text-[#414552] font-system">
          Marcelo Cavalcante
        </h2>
      </div>
      <nav className="flex flex-col gap-4 text-sm text-[#414552] font-system">
        <a href="#" className="flex items-center gap-3 hover:text-black transition-colors font-medium">
          <img
            src="/Sidebar/pageInicial.png"
            alt="Página Inicial"
            className="w-[15px] h-[15px]"
          />
          <span>Página inicial</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors font-medium">
          <Contact size={18} className="shrink-0" />
          <span>Pacientes</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors font-medium">
          <Calendar1 size={18} className="shrink-0" />
          <span>Agenda</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors font-medium">
          <CircleDollarSign size={18} className="shrink-0" />
          <span>Financeiro</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-[#414552] hover:text-black transition-colors font-medium mt-12">
          <img
            src="/Sidebar/register.png"
            alt="Cadastro"
            className="w-[15px] h-[14px]"
          />
          <span>Cadastros</span>
        </a>
        <a href="#" className="flex items-center text-[#414552] hover:text-black transition-colors font-medium ml-7 -mt-2 ">
          <span>Alimentos</span>
        </a>
                <a href="#" className="flex items-center text-[#414552] hover:text-black transition-colors font-medium ml-7 -mt-2 ">
          <span>Refeições</span>
        </a>
      </nav>
    </aside>
  )
}
