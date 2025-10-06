import React, { useState, useCallback, useMemo } from 'react';
import { ShieldCheck, Sparkles, Clock, CreditCard } from 'lucide-react';

const Pricing: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'standard' | 'premium'>('premium');

  const handlePurchaseClick = useCallback((option: 'standard' | 'premium') => {
    const url = option === 'standard'
      ? 'https://remarketing-orcin.vercel.app/'
      : 'https://www.ggcheckout.com/checkout/v2/Ni3orCR2x8kWHSw8LJ8O';

    try {
      if (window.utmify && window.utmify.pixel) {
        window.trackEvent('PurchaseAttempt', {
          packageType: option,
          value: option === 'standard' ? 9.99 : 27.00,
          currency: 'BRL'
        });
      }
    } catch (error) {
      console.error('Error tracking purchase:', error);
    }

    window.open(url, '_blank');
  }, []);

  const bonusItems = useMemo(() => [
    {
      title: "BÔNUS 1 – Guia Detox Natural",
      description: "Plano de 7 dias para desintoxicar seu organismo",
      value: "R$ 47,00"
    },
    {
      title: "BÔNUS 2 – Receitas para Imunidade",
      description: "15 receitas poderosas para fortalecer suas defesas",
      value: "R$ 27,00"
    },
    {
      title: "BÔNUS 3 – Suporte via WhatsApp",
      description: "Tire suas dúvidas diretamente conosco por 30 dias",
      value: "R$ 23,00"
    }
  ], []);

  return (
    <>
      <section id="oferta" className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-natural-100 text-natural-700 text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded-full mb-3 md:mb-4">
              Oferta Exclusiva
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
              Invista na Sua Saúde <span className="text-natural-600">Naturalmente</span>
            </h2>
            <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
              Escolha a opção que melhor atende suas necessidades e comece a transformar sua saúde hoje mesmo
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Package Selector */}
            <div className="bg-natural-50 rounded-full p-1 flex justify-center mb-6 md:mb-8 max-w-xs md:max-w-md mx-auto">
              <button 
                className={`rounded-full px-4 md:px-6 py-2 md:py-3 font-medium w-1/2 transition-colors text-sm md:text-base ${
                  selectedOption === 'standard' 
                    ? 'bg-white text-natural-800 shadow-md' 
                    : 'bg-transparent text-natural-600 hover:bg-white/50'
                }`}
                onClick={() => setSelectedOption('standard')}
              >
                Padrão
              </button>
              <button 
                className={`rounded-full px-4 md:px-6 py-2 md:py-3 font-medium w-1/2 transition-colors text-sm md:text-base ${
                  selectedOption === 'premium' 
                    ? 'bg-white text-natural-800 shadow-md' 
                    : 'bg-transparent text-natural-600 hover:bg-white/50'
                }`}
                onClick={() => setSelectedOption('premium')}
              >
                Completo
              </button>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-natural-100 overflow-hidden">
              {/* Ribbon */}
              {selectedOption === 'premium' && (
                <div className="bg-natural-600 text-white py-2 text-center font-medium text-sm md:text-base">
                  <Sparkles size={16} className="inline-block mr-1" /> MAIS POPULAR | ACESSO COMPLETO
                </div>
              )}
              
              <div className="p-4 md:p-6 lg:p-8 xl:p-10">
                {/* Urgência e Escassez */}
                {selectedOption === 'premium' && (
                  <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700 font-bold">
                          ⚠️ ATENÇÃO: Oferta por tempo limitado! Apenas hoje com 86% de desconto
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
                  <div className="lg:w-1/2">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-natural-800 mb-2 leading-tight">
                      {selectedOption === 'standard' ? 'Farmácia Natural em Casa' : 'Farmácia Natural em Casa + Bônus'}
                    </h3>
                    <p className="text-natural-700 mb-4 md:mb-6 text-sm md:text-base">
                      {selectedOption === 'standard' 
                        ? 'O guia digital básico com todas as receitas naturais' 
                        : 'O pacote completo com guia digital + bônus exclusivos'}
                    </p>

                    <div className="mb-4 md:mb-6">
                      <div className="flex items-end mb-2">
                        <span className="text-gray-400 line-through mr-2 text-sm md:text-base">
                          {selectedOption === 'standard' ? 'R$ 97,00' : 'R$ 197,00'}
                        </span>
                        <span className="text-natural-600 font-medium text-sm md:text-base">
                          Por apenas:
                        </span>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div>
                          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800">
                            {selectedOption === 'standard' ? 'R$ 9,99' : 'R$ 27'}
                          </span>
                          <span className="text-natural-700 ml-1 text-sm md:text-base">à vista</span>
                        </div>
                        <div className="bg-earth-100 text-earth-800 font-bold rounded-lg px-2 md:px-3 py-1 text-xs md:text-sm">
                          {selectedOption === 'standard' ? '90% OFF' : '86% OFF'}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-2">
                        <CreditCard size={18} className="text-natural-600 flex-shrink-0" />
                        <span className="text-natural-700 text-sm md:text-base">
                          ou {selectedOption === 'standard' ? '2x de R$ 4,99' : '3x de R$ 9,00'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-natural-600 flex-shrink-0" />
                        <span className="text-natural-700 text-sm md:text-base">Garantia de 7 dias ou seu dinheiro de volta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-natural-600 flex-shrink-0" />
                        <span className="text-natural-700 text-sm md:text-base">Acesso imediato após a confirmação do pagamento</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-natural-600 flex-shrink-0" />
                        <span className="text-natural-700 text-sm md:text-base font-bold">{selectedOption === 'standard' ? '180 receitas naturais' : 'Mais de 980 receitas naturais'}</span>
                      </div>
                    </div>

                    {selectedOption === 'premium' && (
                      <div className="lg:hidden bg-natural-50 rounded-lg md:rounded-xl p-4 md:p-6 mb-4 md:mb-6">
                        <h4 className="font-bold text-lg md:text-xl text-natural-800 mb-3 md:mb-4 flex items-center gap-2">
                          <Sparkles size={18} className="text-natural-600" />
                          Bônus Exclusivos
                        </h4>
                        
                        <div className="space-y-3 md:space-y-4">
                          {bonusItems.map((bonus, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 md:p-4 shadow-sm border border-natural-100">
                              <h5 className="font-bold text-natural-800 mb-1 text-sm md:text-base leading-tight">{bonus.title}</h5>
                              <p className="text-natural-700 text-xs md:text-sm mb-2 leading-relaxed">{bonus.description}</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs md:text-sm text-natural-600">Valor:</span>
                                <span className="font-bold text-natural-700 text-sm md:text-base">{bonus.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-natural-200">
                          <div className="flex justify-between items-center">
                            <span className="text-natural-700 text-sm md:text-base">Valor Total dos Bônus:</span>
                            <span className="font-bold text-natural-800 text-sm md:text-base">R$ 97,00</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => handlePurchaseClick(selectedOption)}
                      className="w-full text-center text-white font-bold px-6 md:px-8 py-4 md:py-5 rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-base md:text-lg transform hover:scale-105"
                    >
                      🌿 QUERO MELHORAR MINHA SAÚDE AGORA! 🌿
                    </button>
                    
                    <p className="text-center text-xs md:text-sm text-natural-600 mt-3 md:mt-4">
                      Pagamento 100% seguro e criptografado
                    </p>
                  </div>
                  
                  {selectedOption === 'premium' && (
                    <div className="hidden lg:block lg:w-1/2 bg-natural-50 rounded-lg md:rounded-xl p-4 md:p-6">
                      <h4 className="font-bold text-lg md:text-xl text-natural-800 mb-3 md:mb-4 flex items-center gap-2">
                        <Sparkles size={18} className="text-natural-600" />
                        Bônus Exclusivos
                      </h4>
                      
                      <div className="space-y-3 md:space-y-4">
                        {bonusItems.map((bonus, index) => (
                          <div key={index} className="bg-white rounded-lg p-3 md:p-4 shadow-sm border border-natural-100">
                            <h5 className="font-bold text-natural-800 mb-1 text-sm md:text-base leading-tight">{bonus.title}</h5>
                            <p className="text-natural-700 text-xs md:text-sm mb-2 leading-relaxed">{bonus.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs md:text-sm text-natural-600">Valor:</span>
                              <span className="font-bold text-natural-700 text-sm md:text-base">{bonus.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-natural-200">
                        <div className="flex justify-between items-center">
                          <span className="text-natural-700 text-sm md:text-base">Valor Total dos Bônus:</span>
                          <span className="font-bold text-natural-800 text-sm md:text-base">R$ 97,00</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Guarantee Footer */}
              <div className="bg-natural-50 p-3 md:p-4 flex items-center justify-center gap-2">
                <ShieldCheck size={18} className="text-natural-600 flex-shrink-0" />
                <span className="text-natural-700 font-bold text-xs md:text-sm text-center">🛡️ GARANTIA TOTAL: 7 dias para testar ou 100% do seu dinheiro de volta - SEM PERGUNTAS!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;