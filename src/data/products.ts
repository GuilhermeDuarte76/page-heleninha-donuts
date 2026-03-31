import type { Product } from '../types';

import NinhoComMorango from '../assets/NinhoComMorango.jpg';
import NutellaComMorango from '../assets/NutellaComMorango.jpg';
import Nutella from '../assets/Nutella.jpg';
import CremeDeLimao from '../assets/CremeDeLimao.jpg';
import Churros from '../assets/Churros.jpg';
import Negresco from '../assets/Negresco.jpg';
import Sonho from '../assets/Sonho.jpg';
import ChocolatePretoComGranulado from '../assets/ChocolatePretoComGranulado.jpg';
import ChocolateBrancoComGranulado from '../assets/ChocolateBrancoComGranulado.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Ninho com Morango',
    description: 'Puro Ninho, Puro Sabor — Ninho com Morango fresquinho.',
    price: 13.50,
    category: 'Gourmet',
    image: NinhoComMorango,
  },
  {
    id: 2,
    name: 'Nutella com Morango',
    description: 'O Clássico Irresistível — Nutella com Morangos frescos.',
    price: 13.50,
    category: 'Gourmet',
    image: NutellaComMorango,
  },
  {
    id: 3,
    name: 'Nutella',
    description: 'Recheio e cobertura generosa de Nutella autêntica.',
    price: 13.50,
    category: 'Gourmet',
    image: Nutella,
  },
  {
    id: 4,
    name: 'Creme de Limão',
    description: 'Delicioso recheio e cobertura de creme de limão.',
    price: 13.50,
    category: 'Gourmet',
    image: CremeDeLimao,
  },
  {
    id: 5,
    name: 'Churros',
    description: 'Glaceado de canela e açúcar com recheio de doce de leite.',
    price: 13.50,
    category: 'Gourmet',
    image: Churros,
  },
  {
    id: 6,
    name: 'Negresco',
    description: 'Novo Sabor Supremo — Negresco Ultra Cremoso.',
    price: 13.50,
    category: 'Gourmet',
    image: Negresco,
  },
  {
    id: 7,
    name: 'Sonho',
    description: 'O clássico sabor de sonho em formato de donut.',
    price: 13.50,
    category: 'Gourmet',
    image: Sonho,
  },
  {
    id: 8,
    name: 'Chocolate Preto com Granulado',
    description: 'Cobertura de chocolate meio amargo com granulado crocante.',
    price: 8.50,
    category: 'Tradicional',
    image: ChocolatePretoComGranulado,
  },
  {
    id: 9,
    name: 'Chocolate Branco com Granulado',
    description: 'Cobertura de chocolate branco com granulado colorido.',
    price: 8.50,
    category: 'Tradicional',
    image: ChocolateBrancoComGranulado,
  },
];
