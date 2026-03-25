
export default function Footer() {
  return (
    <footer className="bg-chocolate text-white pt-10 pb-24 md:pb-10 px-8 mt-8 md:mt-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-outfit font-bold text-xl">Heleninha Donuts</span>
          <span className="text-white/60 text-sm">Feito com carinho, sabor que abraça</span>
        </div>

        {/* Copyright */}
        <p className="text-white/50 text-sm text-center md:text-right">
          © 2025 Heleninha Donuts. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
