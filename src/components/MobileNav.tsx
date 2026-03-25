import { useState, useEffect } from 'react';
import { HomeIcon, GridIcon, ShoppingBagIcon } from './Icons';

interface MobileNavProps {
  cartCount: number;
  onOpenCart: () => void;
}

type ActiveSection = 'inicio' | 'menu' | 'cart';

export default function MobileNav({ cartCount, onOpenCart }: MobileNavProps) {
  const [activeSection, setActiveSection] = useState<ActiveSection>('inicio');

  useEffect(() => {
    function handleScroll() {
      const menuSection = document.getElementById('menu');
      if (!menuSection) return;

      const menuTop = menuSection.getBoundingClientRect().top;
      if (menuTop <= window.innerHeight / 2) {
        setActiveSection('menu');
      } else {
        setActiveSection('inicio');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToMenu() {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[200] bg-white border-t border-rosa-claro transition-transform duration-300 ${activeSection === 'inicio' ? 'translate-y-full' : 'translate-y-0'}`}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
      aria-label="Navegação mobile"
    >
      <div className="grid grid-cols-3 h-16">
        {/* Início */}
        <button
          onClick={scrollToTop}
          aria-label="Ir para início"
          className={`
            flex flex-col items-center justify-center gap-1 transition-colors duration-200
            ${activeSection === 'inicio' ? 'text-rosa' : 'text-caramelo'}
          `}
        >
          <HomeIcon size={20} />
          <span className="text-[10px] font-medium font-outfit">Início</span>
        </button>

        {/* Menu / Donuts */}
        <button
          onClick={scrollToMenu}
          aria-label="Ir para o menu"
          className={`
            flex flex-col items-center justify-center gap-1 transition-colors duration-200
            ${activeSection === 'menu' ? 'text-rosa' : 'text-caramelo'}
          `}
        >
          <GridIcon size={20} />
          <span className="text-[10px] font-medium font-outfit">Menu</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => {
            setActiveSection('cart');
            onOpenCart();
          }}
          aria-label="Abrir carrinho"
          className={`
            flex flex-col items-center justify-center gap-1 relative transition-colors duration-200
            ${activeSection === 'cart' ? 'text-rosa' : 'text-caramelo'}
          `}
        >
          <div className="relative">
            <ShoppingBagIcon size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rosa text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium font-outfit">Carrinho</span>
        </button>
      </div>
    </nav>
  );
}
