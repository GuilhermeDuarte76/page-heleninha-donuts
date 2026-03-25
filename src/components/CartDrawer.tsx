import React, { useEffect } from 'react';
import type { CartItem, PaymentMethod } from '../types';
import type { Product } from '../types';
import {
  XIcon,
  ShoppingBagIcon,
  WhatsAppIcon,
  PixIcon,
  MoneyIcon,
  CardIcon,
} from './Icons';

const WHATSAPP_NUMBER = '5511999999999'; // Substitua pelo número real

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onAdd: (product: Product) => void;
  onRemove: (productId: number) => void;
  onDelete: (productId: number) => void;
  totalPrice: number;
  formatPrice: (n: number) => string;
  paymentMethod: PaymentMethod;
  onSetPayment: (method: PaymentMethod) => void;
  totalItems: number;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onAdd,
  onRemove,
  onDelete,
  totalPrice,
  formatPrice,
  paymentMethod,
  onSetPayment,
  totalItems,
}: CartDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  function buildWhatsAppMessage(): string {
    const lines: string[] = [];
    lines.push('🍩 *Pedido - Heleninha Donuts*\n');
    items.forEach(item => {
      const lineTotal = item.product.price * item.quantity;
      lines.push(
        `• ${item.quantity}x ${item.product.name} — ${formatPrice(lineTotal)}`
      );
    });
    lines.push('');
    lines.push(`💰 *Total: ${formatPrice(totalPrice)}*`);
    if (paymentMethod) {
      lines.push(`💳 *Pagamento: ${paymentMethod}*`);
    }
    lines.push('');
    lines.push('Confirmar pedido?');
    return lines.join('\n');
  }

  function handleCheckout() {
    if (items.length === 0) return;
    const msg = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const paymentOptions: { value: PaymentMethod; label: string; Icon: React.FC<{ className?: string; size?: number }> }[] = [
    { value: 'PIX', label: 'PIX', Icon: PixIcon },
    { value: 'Dinheiro', label: 'Dinheiro', Icon: MoneyIcon },
    { value: 'Cartão', label: 'Cartão', Icon: CardIcon },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-chocolate/30 backdrop-blur-sm z-[300] transition-opacity duration-300"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
        className="fixed top-0 right-0 w-[420px] max-w-full h-[100dvh] bg-white border-l border-rosa-claro z-[400] flex flex-col"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-rosa-claro shrink-0">
          <div className="flex items-center gap-2">
            <h2 className="font-outfit font-bold text-chocolate text-lg">
              Seu Pedido
            </h2>
            {totalItems > 0 && (
              <span className="bg-rosa text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar carrinho"
            className="w-9 h-9 rounded-full border border-rosa-claro text-caramelo flex items-center justify-center hover:bg-rosa-claro transition-colors duration-200"
          >
            <XIcon size={16} />
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto cart-scroll px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-rosa-claro flex items-center justify-center">
                <ShoppingBagIcon size={28} className="text-rosa" />
              </div>
              <div>
                <p className="font-outfit font-semibold text-chocolate text-base">
                  Carrinho vazio
                </p>
                <p className="text-caramelo text-sm mt-1">
                  Adicione seus donuts favoritos!
                </p>
              </div>
            </div>
          ) : (
            <ul className="flex flex-col">
              {items.map((item, index) => (
                <li
                  key={item.product.id}
                  className="animate-slide-in-right grid items-center gap-3 py-3 border-b border-rosa-claro last:border-b-0"
                  style={{
                    gridTemplateColumns: '64px 1fr auto',
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Product image */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-rosa-claro/30"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.backgroundColor = '#FBDCE2';
                    }}
                  />

                  {/* Name and price */}
                  <div className="min-w-0">
                    <p className="font-semibold text-chocolate text-sm truncate">
                      {item.product.name}
                    </p>
                    <p className="font-bold text-rosa text-sm mt-0.5">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => onDelete(item.product.id)}
                      className="text-caramelo text-xs mt-1 hover:text-red-500 transition-colors duration-150"
                    >
                      remover
                    </button>
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center gap-1 bg-creme border border-rosa-claro rounded-pill px-1 py-0.5 shrink-0">
                    <button
                      onClick={() => onRemove(item.product.id)}
                      aria-label="Diminuir quantidade"
                      className="w-7 h-7 flex items-center justify-center text-chocolate rounded-full hover:bg-rosa-claro transition-all duration-150 active:scale-90"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <line x1="5" x2="19" y1="12" y2="12" />
                      </svg>
                    </button>
                    <span className="w-5 text-center font-bold text-chocolate text-xs select-none">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onAdd(item.product)}
                      aria-label="Aumentar quantidade"
                      className="w-7 h-7 bg-rosa text-white rounded-full flex items-center justify-center hover:bg-rosa-escuro transition-all duration-150 active:scale-90"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <line x1="12" x2="12" y1="5" y2="19" />
                        <line x1="5" x2="19" y1="12" y2="12" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="bg-creme border-t border-rosa-claro p-5 shrink-0 flex flex-col gap-4">
            {/* Payment method */}
            <div>
              <p className="text-sm font-medium text-caramelo mb-2.5">
                Forma de Pagamento
              </p>
              <div className="grid grid-cols-3 gap-2">
                {paymentOptions.map(({ value, label, Icon }) => {
                  const isSelected = paymentMethod === value;
                  return (
                    <button
                      key={value}
                      onClick={() => onSetPayment(isSelected ? null : value)}
                      className={`
                        rounded-xl p-2.5 cursor-pointer flex flex-col items-center gap-1
                        border transition-all duration-150
                        ${
                          isSelected
                            ? 'border-rosa bg-rosa/10 text-rosa'
                            : 'border-rosa-claro text-caramelo hover:border-rosa hover:text-rosa bg-white'
                        }
                      `}
                    >
                      <Icon size={18} />
                      <span className="text-xs font-medium">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-caramelo">Total</span>
              <span className="text-2xl font-bold text-chocolate">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Checkout button */}
            <button
              onClick={handleCheckout}
              disabled={items.length === 0}
              className="
                w-full flex items-center justify-center gap-2.5
                bg-[#25D366] text-white font-outfit font-semibold text-sm
                py-3.5 rounded-pill transition-all duration-200
                hover:bg-[#1ebe5d] hover:-translate-y-0.5 active:scale-[0.97]
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
                shadow-lg shadow-[#25D366]/30
              "
            >
              <WhatsAppIcon size={18} />
              Finalizar no WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
