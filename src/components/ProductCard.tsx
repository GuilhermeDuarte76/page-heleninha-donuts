import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: (p: Product) => void;
  onRemove: (id: number) => void;
  featured?: boolean;
  animDelay?: number;
}

export default function ProductCard({
  product,
  quantity,
  onAdd,
  onRemove,
  featured = false,
  animDelay = 0,
}: ProductCardProps) {
  return (
    <div
      className={`
        bg-white border border-rosa-claro rounded-2xl overflow-hidden
        transition-all duration-300 hover:-translate-y-1 hover:shadow-card
        cursor-pointer animate-fade-up h-full
        ${featured ? 'flex flex-col md:grid' : 'flex flex-col'}
      `}
      style={{
        animationDelay: `${animDelay}ms`,
        ...(featured ? { gridTemplateColumns: '1fr 1fr' } : {}),
      }}
    >
      {/* Image wrapper */}
      <div
        className={`relative overflow-hidden bg-rosa-claro/30 ${featured ? 'min-h-[220px] md:h-full' : ''}`}
        style={!featured ? { paddingBottom: '100%' } : undefined}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`
            object-cover transition-transform duration-500 hover:scale-105
            ${featured
              ? 'absolute inset-0 w-full h-full'
              : 'absolute inset-0 w-full h-full'
            }
          `}
          onError={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#FBDCE2';
            target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='%23FF8E9E' stroke-width='1.5'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* Card body */}
      <div className={`flex flex-col gap-2 md:gap-3 p-3 md:p-[18px] ${featured ? 'justify-center' : ''}`}>
        {/* Category badge */}
        <span className="inline-flex w-fit text-xs font-medium uppercase tracking-wide text-rosa-escuro bg-rosa-claro rounded-pill px-3 py-1">
          {product.category}
        </span>

        {/* Product name */}
        <h3
          className={`font-bold text-chocolate leading-tight ${featured ? 'text-2xl' : 'text-sm md:text-base'}`}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-caramelo leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Footer: price + qty controls */}
        <div className="flex items-center justify-between gap-1 mt-auto pt-1">
          {/* Price */}
          <span className={`font-bold text-rosa leading-none ${featured ? 'text-lg' : 'text-sm md:text-lg'}`}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>

          {/* Quantity controls */}
          {quantity === 0 ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd(product);
              }}
              aria-label={`Adicionar ${product.name}`}
              className="
                w-8 h-8 md:w-9 md:h-9 bg-rosa text-white rounded-full flex items-center justify-center
                transition-all duration-150 hover:bg-rosa-escuro active:scale-90
                shadow-rosa
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
          ) : (
            <div className="flex items-center gap-0.5 bg-creme border border-rosa-claro rounded-pill px-0.5 py-0.5 md:px-1 md:gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(product.id);
                }}
                aria-label="Remover um"
                className="
                  w-8 h-8 flex items-center justify-center text-chocolate rounded-full
                  transition-all duration-150 hover:bg-rosa-claro active:scale-90
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
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

              <span className="w-6 text-center font-bold text-chocolate text-sm select-none">
                {quantity}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd(product);
                }}
                aria-label="Adicionar um"
                className="
                  w-8 h-8 bg-rosa text-white rounded-full flex items-center justify-center
                  transition-all duration-150 hover:bg-rosa-escuro active:scale-90
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
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
          )}
        </div>
      </div>
    </div>
  );
}
