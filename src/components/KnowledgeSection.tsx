import React, { useCallback } from 'react';
import { BookOpen, ArrowDown } from 'lucide-react';

const KnowledgeSection: React.FC = () => {
  const handleScrollToOffers = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollToNext = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('ciencia');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="conhecimento" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-natural-50 rounded-xl p-4 md:p-8">
            <BookOpen className="mx-auto mb-4 text-natural-600" size={40} />
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-natural-800">
              Viva com mais qualidade e menos dor!
            </h3>
            <p className="text-natural-700 mb-4 md:mb-6 text-sm md:text-base">
              Descubra o guia natural que já transformou a vida de mais de 27.000 brasileiros
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
              <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                <img src="https://i.imgur.com/eMOD6si.png" alt="Alergias" className="w-full h-20 object-contain mb-2" />
                <p className="text-sm font-medium text-natural-800">Alergias</p>
              </div>
              <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                <img src="https://i.imgur.com/v6fUZVC.png" alt="Insônia" className="w-full h-20 object-contain mb-2" />
                <p className="text-sm font-medium text-natural-800">Insônia</p>
              </div>
              <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                <img src="https://i.imgur.com/DKYgMvC.png" alt="Ansiedade" className="w-full h-20 object-contain mb-2" />
                <p className="text-sm font-medium text-natural-800">Ansiedade</p>
              </div>
              <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                <img src="https://i.imgur.com/ilqknlR.png" alt="Dores" className="w-full h-20 object-contain mb-2" />
                <p className="text-sm font-medium text-natural-800">Dores</p>
              </div>
              <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                <img src="https://i.imgur.com/W8iR9Pd.png" alt="Pressão" className="w-full h-20 object-contain mb-2" />
                <p className="text-sm font-medium text-natural-800">Pressão</p>
              </div>
              <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                <img src="https://i.imgur.com/aUSaf7H.png" alt="Energia" className="w-full h-20 object-contain mb-2" />
                <p className="text-sm font-medium text-natural-800">Energia</p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors shadow-lg hover:shadow-xl text-base md:text-lg mr-2 md:mr-4 mb-2 md:mb-0"
            >
              Quero Acesso Agora →
            </a>
            <a 
              href="#receitas-lista" 
              onClick={handleScrollToNext}
              className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-4 md:px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base"
            >
              <ArrowDown size={18} className="inline mr-2" />
              Ver Lista Completa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;