import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleScrollToOffers = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollToNext = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('conhecimento');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const testimonialImages = useMemo(() => [
    {
      src: "/AnyConv.com__depoimento01-1.webp",
      alt: "Depoimento de Patricia Marques Fonseca sobre melhora no sono e dores articulares",
      name: "Patricia Marques Fonseca"
    },
    {
      src: "/AnyConv.com__depoimento06.webp",
      alt: "Depoimento de Gabriela Gomes sobre melhora nas dores no joelho",
      name: "Gabriela Gomes"
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonialImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialImages.length]);

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  return (
    <section id="depoimentos" className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
            Depoimentos Reais de <span className="text-natural-600">Transformação</span>
          </h2>
          <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
            Depoimentos reais de pessoas que recuperaram sua saúde com nossas receitas naturais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-natural-100 overflow-hidden">
            <video
              src="https://i.imgur.com/77TNpQy.mp4"
              controls
              className="w-full h-auto"
              preload="metadata"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-natural-100 overflow-hidden">
            <video
              src="https://i.imgur.com/CF3SOWj.mp4"
              controls
              className="w-full h-auto"
              preload="metadata"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-natural-100 overflow-hidden">
            <video
              src="https://i.imgur.com/OLiohVn.mp4"
              controls
              className="w-full h-auto"
              preload="metadata"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-natural-100 overflow-hidden">
            <video
              src="https://i.imgur.com/u6bF0FY.mp4"
              controls
              className="w-full h-auto"
              preload="metadata"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-natural-100 overflow-hidden">
            <video
              src="https://i.imgur.com/rzUgSjC.mp4"
              controls
              className="w-full h-auto"
              preload="metadata"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-natural-100 overflow-hidden">
            <video
              src="https://i.imgur.com/t0TYi4W.mp4"
              controls
              className="w-full h-auto"
              preload="metadata"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>

        {/* Carrossel de Depoimentos em Imagem */}
        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-natural-800 text-center mb-6">
            Veja Mais Depoimentos Reais
          </h3>
          
          <div
            className="relative bg-white rounded-xl shadow-lg overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative h-96 md:h-80 aspect-ratio-16-9 px-4 md:px-0">
              {testimonialImages.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-natural-800 rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-natural-500 touch-optimized min-w-[44px] min-h-[44px]"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-natural-800 rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-natural-500 touch-optimized min-w-[44px] min-h-[44px]"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-natural-500 touch-optimized min-w-[44px] min-h-[44px] ${
                    index === currentSlide 
                      ? 'bg-natural-600' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 text-center bg-natural-50 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 max-w-2xl mx-auto border border-natural-100 shadow-sm md:shadow-md">
          <p className="text-base md:text-lg text-natural-800 mb-3 md:mb-4 font-semibold">
            Mais de 27 mil pessoas compraram e aprovaram as nossas receitas naturais. Você também pode transformar sua saúde com ingredientes simples da sua cozinha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Quero Começar Minha Transformação
            </a>
            
            <a
              href="#conhecimento"
              onClick={handleScrollToNext}
              className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <ArrowDown size={16} className="inline mr-2" />
              Ver Mais Detalhes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;