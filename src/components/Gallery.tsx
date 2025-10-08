import React, { useMemo, useCallback } from 'react';
import { ArrowDown } from 'lucide-react';

const Gallery: React.FC = () => {
  const handleScrollToOffers = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollToNext = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('beneficios');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const ingredients = useMemo(() => [
    { name: "Gengibre", properties: "Anti-inflamatório", image: "https://i.imgur.com/8xX7mBK.png" },
    { name: "Canela", properties: "Regula açúcar", image: "https://i.imgur.com/zlu8mNa.png" },
    { name: "Alho", properties: "Fortalece imunidade", image: "https://i.imgur.com/RpiQbz1.png" },
    { name: "Mel", properties: "Antibacteriano", image: "https://i.imgur.com/5Bfz8lx.png" },
    { name: "Cúrcuma", properties: "Anti-inflamatório", image: "https://i.imgur.com/ohCDckd.png" },
    { name: "Camomila", properties: "Calmante natural", image: "https://i.imgur.com/lYUBytt.png" },
    { name: "Pressão Alta", properties: "Controle natural", image: "https://i.imgur.com/3qqTAOL.png" },
    { name: "Diabetes", properties: "Regula glicose", image: "https://i.imgur.com/Xaenznu.png" }
  ], []);

  return (
    <section id="galeria" className="py-12 md:py-16 bg-natural-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-natural-800 mb-4">
            Ingredientes <span className="text-natural-600">Simples</span>, Resultados <span className="text-natural-600">Extraordinários</span>
          </h2>
          <p className="text-lg text-natural-700 max-w-2xl mx-auto">
            Conheça alguns ingredientes poderosos que você já tem em casa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 max-w-6xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-white rounded-lg p-3 md:p-4 shadow-sm text-center">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-16 object-contain mb-2"
                loading="lazy"
                decoding="async"
                width="64"
                height="64"
              />
              <h3 className="font-bold text-natural-800 mb-1 text-xs md:text-sm">{ingredient.name}</h3>
              <p className="text-natural-700 text-xs leading-tight">{ingredient.properties}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a 
            href="#oferta" 
            onClick={handleScrollToOffers}
            className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl text-lg mr-4"
          >
            Acesse Todas as Receitas →
          </a>
          
          <a 
            href="#beneficios" 
            onClick={handleScrollToNext}
            className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 text-base"
          >
            <ArrowDown size={16} className="inline mr-2" />
            Ver Benefícios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;