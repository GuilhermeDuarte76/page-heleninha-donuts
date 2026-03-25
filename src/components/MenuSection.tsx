import { useState, useRef, useEffect } from 'react';
import type { Product } from '../types';
import { products } from '../data/products';
import ProductCard from './ProductCard';

type CategoryFilter = 'all' | 'Gourmet' | 'Tradicional';

interface MenuSectionProps {
  getQuantity: (productId: number) => number;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
}

export default function MenuSection({ getQuantity, addItem, removeItem }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'Gourmet', label: 'Gourmet' },
    { value: 'Tradicional', label: 'Tradicional' },
  ];

  return (
    <section
      id="menu"
      className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Section header */}
      <div
        ref={headingRef}
        className={`flex flex-col items-center text-center gap-3 mb-10 transition-all duration-700 ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="text-rosa text-xs font-medium uppercase tracking-widest">
          Cardápio
        </span>
        <h2 className="font-outfit font-bold text-chocolate text-4xl md:text-5xl leading-tight">
          Nossas Delícias
        </h2>
        <p className="text-caramelo text-base md:text-lg max-w-md">
          Escolha seus favoritos e monte sua caixa da felicidade
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`
              font-outfit font-medium text-sm px-5 py-2 rounded-pill transition-all duration-200
              ${
                activeCategory === cat.value
                  ? 'bg-rosa text-white shadow-rosa'
                  : 'border border-rosa-claro text-caramelo hover:border-rosa hover:text-rosa bg-white'
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <ProductGrid
        products={filteredProducts}
        getQuantity={getQuantity}
        addItem={addItem}
        removeItem={removeItem}
      />
    </section>
  );
}

interface ProductGridProps {
  products: Product[];
  getQuantity: (productId: number) => number;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
}

function ProductGrid({ products, getQuantity, addItem, removeItem }: ProductGridProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-5">
      {products.map((product, index) => {
        const isFeatured = index === 0;
        return (
          <div
            key={product.id}
            className={
              isFeatured
                ? 'col-span-2 md:col-span-12 lg:col-span-6'
                : 'col-span-1 md:col-span-6 lg:col-span-3'
            }
          >
            <ProductCard
              product={product}
              quantity={getQuantity(product.id)}
              onAdd={addItem}
              onRemove={removeItem}
              featured={!isMobile && isFeatured}
              animDelay={index * 80}
            />
          </div>
        );
      })}
    </div>
  );
}
