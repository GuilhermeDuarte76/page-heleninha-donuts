
import donnutsVideo from '../assets/donnuts.mp4';

interface HeroProps {
  onOpenCart: () => void;
}

function DonutVideo({ size }: { size: number }) {
  return (
    <video
      src={donnutsVideo}
      autoPlay
      loop
      muted
      playsInline
      className="animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'cover',
        display: 'block',
        maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 75%)',
      }}
    />
  );
}

export default function Hero({ onOpenCart }: HeroProps) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
      <div
        className="grid gap-8 md:gap-0 items-center"
        style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}
      >
        {/* Mobile: video on top, then content below */}
        <div className="md:hidden flex justify-center items-center">
          <DonutVideo size={250} />
        </div>

        {/* Desktop: asymmetric two-column grid */}
        <div
          className="hidden md:grid items-center gap-0"
          style={{ gridTemplateColumns: '55% 45%' }}
        >
          {/* Left content */}
          <div className="flex flex-col gap-6 pr-8">
            <HeroContent onOpenCart={onOpenCart} />
          </div>

          {/* Right video */}
          <div className="relative flex items-center justify-center">
            <DonutVideo size={380} />
          </div>
        </div>

        {/* Mobile content (below image) */}
        <div className="md:hidden flex flex-col gap-5 items-center text-center">
          <HeroContent onOpenCart={onOpenCart} center />
        </div>
      </div>
    </section>
  );
}

interface HeroContentProps {
  onOpenCart: () => void;
  center?: boolean;
}

function HeroContent({ onOpenCart, center = false }: HeroContentProps) {
  return (
    <>
      {/* Category tag */}
      <div>
        <span
          className="inline-flex items-center bg-rosa-claro text-rosa-escuro rounded-pill text-xs font-medium uppercase tracking-widest px-4 py-1.5"
        >
          Donuts Artesanais
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-outfit font-bold text-chocolate leading-[1.08] tracking-tight"
        style={{
          fontSize: 'clamp(30px, 7.5vw, 68px)',
          letterSpacing: '-0.02em',
        }}
      >
        Um Doce{' '}
        <span className="text-rosa">Abraço</span>
        <br />
        em Cada Mordida
      </h1>

      {/* Subtitle */}
      <p
        className={`text-caramelo leading-relaxed text-base md:text-lg ${center ? '' : 'max-w-md'}`}
      >
        Donuts artesanais feitos com carinho, fresquinhos e com os recheios mais
        irresistíveis que você já provou.
      </p>

      {/* CTA Buttons */}
      <div className={`flex gap-3 flex-wrap ${center ? 'justify-center' : ''}`}>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 bg-rosa text-white font-outfit font-semibold text-sm px-7 py-3.5 rounded-pill transition-all duration-200 hover:bg-rosa-escuro hover:-translate-y-0.5 active:scale-[0.97] shadow-rosa"
        >
          Ver Cardápio
        </a>
        <button
          onClick={onOpenCart}
          className="inline-flex items-center gap-2 bg-white text-chocolate font-outfit font-semibold text-sm px-7 py-3.5 rounded-pill border-2 border-rosa-claro transition-all duration-200 hover:border-rosa hover:text-rosa hover:-translate-y-0.5 active:scale-[0.97]"
        >
          Pedir agora
        </button>
      </div>
    </>
  );
}
