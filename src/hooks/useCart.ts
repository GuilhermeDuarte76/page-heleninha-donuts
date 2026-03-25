import { useState, useCallback } from 'react';
import type { Product, CartItem, PaymentMethod } from '../types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);

  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity === 1) return prev.filter(i => i.product.id !== productId);
      return prev.map(i =>
        i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }, []);

  const deleteItem = useCallback((productId: number) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  const getQuantity = useCallback(
    (productId: number) => {
      return items.find(i => i.product.id === productId)?.quantity ?? 0;
    },
    [items]
  );

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const formatPrice = (value: number) =>
    `R$ ${value.toFixed(2).replace('.', ',')}`;

  return {
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
  };
}
