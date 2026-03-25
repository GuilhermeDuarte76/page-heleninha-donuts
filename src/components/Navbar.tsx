import { ShoppingBagIcon } from './Icons';
import logo from '../assets/logo.png';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rosa-claro/60 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
          <img
            src={logo}
            alt="Heleninha Donuts logo"
            className="w-10 h-10 rounded-full object-cover shadow-md ring-2 ring-rosa/30 group-hover:ring-rosa/60 transition-all duration-200"
          />
          <span className="font-outfit font-bold text-chocolate text-[1.1rem] leading-tight tracking-tight">
            Heleninha <span className="text-rosa">Donuts</span>
          </span>
        </a>

        {/* Center nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="font-outfit text-caramelo hover:text-chocolate transition-colors duration-200 text-sm font-medium relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-rosa after:rounded-full after:transition-all after:duration-200 hover:after:w-full"
          >
            Início
          </a>
          <a
            href="#menu"
            className="font-outfit text-caramelo hover:text-chocolate transition-colors duration-200 text-sm font-medium relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-rosa after:rounded-full after:transition-all after:duration-200 hover:after:w-full"
          >
            Menu
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* "Ver Cardápio" pill button — hidden on mobile */}
          <a
            href="#menu"
            className="hidden md:inline-flex items-center gap-2 bg-rosa text-white font-outfit font-medium text-sm px-5 py-2 rounded-pill transition-all duration-200 hover:bg-rosa-escuro hover:-translate-y-0.5 active:scale-[0.97] shadow-rosa"
          >
            Ver Cardápio
          </a>

          {/* Cart icon button */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrinho"
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-rosa-claro bg-white hover:bg-rosa-claro transition-colors duration-200 text-chocolate shadow-sm"
          >
            <ShoppingBagIcon size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-rosa text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}
