
import heleninhaImg from '../assets/heleninha-off-background.png';

export default function AboutSection() {
  return (
    <section id="sobre" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex justify-center">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-3xl w-full">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="flex-shrink-0 flex items-center justify-center bg-rosa-claro p-8 md:p-10">
              <img
                src={heleninhaImg}
                alt="Heleninha comendo um donut"
                className="w-52 md:w-64 object-contain drop-shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
              <span className="inline-flex items-center self-start bg-rosa-claro text-rosa-escuro rounded-pill text-xs font-medium uppercase tracking-widest px-4 py-1.5">
                Nossa História
              </span>

              <h2
                className="font-outfit font-bold text-chocolate leading-tight"
                style={{ fontSize: 'clamp(22px, 4vw, 34px)', letterSpacing: '-0.02em' }}
              >
                A inspiração tem{' '}
                <span className="text-rosa">nome e sobrenome</span>
              </h2>

              <p className="text-caramelo leading-relaxed text-sm md:text-base">
                A Heleninha tem o dom de transformar qualquer coisa em alegria — e foi ela quem nos
                inspirou a colocar o avental e começar tudo isso. Ver o sorriso dela ao morder o
                primeiro donut foi o momento em que entendemos: precisávamos compartilhar esse
                sabor com o mundo.
              </p>

              <p className="text-caramelo leading-relaxed text-sm md:text-base">
                Cada receita é desenvolvida com ingredientes selecionados, muito cuidado e o amor
                de pais que fazem questão de entregar o melhor — do preparo à sua porta. Aqui,
                qualidade não é promessa: é o jeito que a gente tem de dizer obrigado pela sua
                confiança.
              </p>

              <p className="font-outfit font-semibold text-rosa-escuro text-sm mt-1">
                — A família por trás da Heleninha Donuts ♥
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
