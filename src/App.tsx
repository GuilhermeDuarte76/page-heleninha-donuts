import { useState } from 'react';
import { useCart } from './hooks/useCart';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import { ShoppingBagIcon } from './components/Icons';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    items,
    addItem,
    removeItem,
    deleteItem,
    getQuantity,
    totalItems,
    totalPrice,
    formatPrice,
    paymentMethod,
    setPaymentMethod,
  } = useCart();

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <div className="min-h-[100dvh] bg-creme font-outfit">
      <Navbar cartCount={totalItems} onOpenCart={openCart} />

      <main>
        <section id="inicio">
          <Hero onOpenCart={openCart} />
        </section>

        <section id="menu">
          <MenuSection
            getQuantity={getQuantity}
            addItem={addItem}
            removeItem={removeItem}
          />
        </section>
      </main>

      <AboutSection />

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        items={items}
        onAdd={addItem}
        onRemove={removeItem}
        onDelete={deleteItem}
        totalPrice={totalPrice}
        formatPrice={formatPrice}
        paymentMethod={paymentMethod}
        onSetPayment={setPaymentMethod}
        totalItems={totalItems}
      />

      <MobileNav cartCount={totalItems} onOpenCart={openCart} />

      {/* Desktop floating cart button — hidden on mobile */}
      <button
        onClick={openCart}
        aria-label="Abrir carrinho"
        className="hidden md:flex fixed bottom-8 right-8 z-[200] items-center gap-3 bg-chocolate text-white px-6 py-3.5 rounded-pill shadow-cart transition-all duration-200 hover:bg-rosa-escuro hover:-translate-y-0.5 active:scale-[0.97] font-outfit font-medium"
      >
        <ShoppingBagIcon size={20} />
        <span>{totalItems > 0 ? formatPrice(totalPrice) : 'Carrinho'}</span>
        {totalItems > 0 && (
          <span className="bg-rosa text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
