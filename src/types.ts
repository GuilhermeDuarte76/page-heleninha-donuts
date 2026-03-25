export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Gourmet' | 'Tradicional';
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethod = 'PIX' | 'Dinheiro' | 'Cartão' | null;
