import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Eye, Flame, Lock, Crown, Star, Users, Shield, Zap } from "lucide-react";

// Link de pagamento do produto
const PAYMENT_LINK = "https://pay.cakto.com.br/3dca34b_613477";

const Index = () => {
  // Simulação de contagem de visualizações online (35 a 55)
  const [viewerCount, setViewerCount] = useState(Math.floor(Math.random() * 11) + 35);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  // Simulação de contador de urgência (59 minutos e 30 segundos)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 59, seconds: 30 });

  // Atualização da contagem de viewers
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 4) - 1; // -1 to +2
      setViewerCount((prev) => Math.max(35, Math.min(55, prev + change)));
    }, Math.floor(Math.random() * 10000) + 10000); // 10-20 segundos

    return () => clearInterval(interval);
  }, []);

  // Contador regressivo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        // Se o contador chegar a zero, ele reseta para o valor inicial
        return { hours: 0, minutes: 59, seconds: 30 }; 
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Notificações de atividade/compra (Social Proof)
  useEffect(() => {
    const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Curitiba", "Porto Alegre", "Salvador", "Fortaleza"];
    const messages = [
      "Novo Membro acaba de garantir o Acesso Premium!",
      `Cliente de ${cities[Math.floor(Math.random() * cities.length)]} finalizou a compra!`,
      "Mais um acesso vitalício garantido agora mesmo!",
      `Fã de ${cities[Math.floor(Math.random() * cities.length)]} entrou na comunidade exclusiva!`,
    ];

    const interval = setInterval(() => {
      setNotificationText(messages[Math.floor(Math.random() * messages.length)]);
      setShowNotification(true);
      // A notificação desaparece após 5 segundos
      setTimeout(() => setShowNotification(false), 5000); 
    }, Math.floor(Math.random() * 30000) + 45000); // 45-75 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Notificação de Atividade (Social Proof) */}
      {showNotification && (
        <div className="fixed top-20 right-2 sm:right-4 z-50 animate-slide-in-right max-w-[90vw] sm:max-w-sm">
          <Card className="bg-card border-2 border-primary p-3 sm:p-4 shadow-2xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-primary line-clamp-2">{notificationText}</p>
            </div>
          </Card>
        </div>
      )}

      {/* Banner de Contagem de Visualizadores */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-secondary/95 backdrop-blur-sm border-b-2 border-primary">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-center">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-lg font-bold text-foreground">
              <span className="text-primary text-base sm:text-xl md:text-2xl">{viewerCount}</span> pessoas estão avaliando esta oferta AGORA!
            </span>
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Seção Principal (Hero Section) */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            {/* Tag de Destaque */}
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6 animate-pulse max-w-[95vw]">
              ✨ Mais de 18.000 Membros VIP JÁ GARANTIRAM o acesso!
            </div>
            
            {/* Título Principal */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
              <span className="text-primary block mb-1 sm:mb-2 animate-pulse">Acesso Vitalício Exclusivo</span>
              <span className="text-foreground block text-xl sm:text-3xl md:text-5xl">à Comunidade de Elite</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Não perca a chance de entrar no grupo mais seletivo e com mais crescimento.
              <br className="hidden sm:block" />
              <span className="text-secondary font-bold">Sua transformação começa agora</span>
            </p>

            {/* Carrossel Visual com Imagens, Blur e Overlay (CORRIGIDO) */}
            <div className="mb-8 sm:mb-12 max-w-4xl mx-auto px-2">
              <Carousel className="w-full">
                <CarouselContent>
                  {/* Itera de 1 a 5, referenciando 'desfocadaN.jpg' */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <CarouselItem key={i}>
                      <div className="p-1">
                        <Card 
                          className="border-2 border-primary relative overflow-hidden h-[300px] sm:h-[400px] bg-cover bg-center"
                          style={{ 
                                backgroundImage: `url('/desfocada${i}.jpg')` 
                            }} 
                        >
                          {/* 1. Camada de Desfoque (Blur) */}
                          <div className="absolute inset-0 z-0" style={{ filter: 'blur(5px)' }}></div>
                          
                          {/* 2. Camada de Overlay Escuro */}
                          <div className="absolute inset-0 bg-black/40 z-10"></div>
                          
                          {/* 3. CONTEÚDO PRINCIPAL (Texto e Ícone) */}
                          <div className="aspect-video flex items-center justify-center relative z-20 h-full w-full">
                              <div className="text-center p-4 sm:p-8">
                                  <Crown className="w-10 h-10 sm:w-16 sm:h-16 text-primary mx-auto mb-2 sm:mb-4" />
                                  <p className="text-primary font-bold text-sm sm:text-lg">Conteúdo Exclusivo Premium</p>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2">Acesso Imediato após Pagamento</p>
                              </div>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-primary left-0 sm:left-2" />
                <CarouselNext className="border-primary right-0 sm:right-2" />
              </Carousel>
            </div>

            {/* Preço */}
            <div className="mb-6 sm:mb-8 px-2">
              <div className="text-muted-foreground text-lg sm:text-2xl mb-2">
                <span className="line-through">De: R$297,00</span>
              </div>
              <div className="text-4xl sm:text-6xl md:text-8xl font-black text-primary animate-pulse mb-3 sm:mb-4">
                R$29,90
              </div>
              <div className="text-secondary text-base sm:text-xl font-bold animate-bounce">
                💣 Promoção Relâmpago – O tempo está acabando!
              </div>
            </div>

            {/* Caixa de Urgência (Contador) */}
            <Card className="inline-block bg-secondary/50 border-2 border-primary p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm max-w-[95vw]">
              <div className="text-primary text-base sm:text-lg font-bold mb-2">⏰ Oferta expira em:</div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-mono text-foreground font-black tracking-wider">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </Card>

            {/* CTA Principal */}
            <div className="mb-4 px-2">
              <Button
                size="lg"
                onClick={() => window.location.href = PAYMENT_LINK}
                className="bg-gradient-to-r from-secondary via-destructive to-secondary hover:from-destructive hover:via-secondary hover:to-destructive text-foreground font-black py-4 sm:py-6 md:py-8 px-6 sm:px-10 md:px-12 text-base sm:text-xl md:text-2xl lg:text-3xl border-2 sm:border-4 border-primary shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse uppercase w-full sm:w-auto max-w-full"
              >
                🔥 QUERO MEU ACESSO AGORA!
              </Button>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground px-2">
              <Lock className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Pagamento 100% seguro e discreto
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-foreground mb-8 sm:mb-12 md:mb-16 px-2">
            🔥 O que você vai encontrar:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: "Material Exclusivo",
                description: "Conteúdo novo e impactante produzido diariamente"
              },
              {
                icon: Crown,
                title: "Acesso Vitalício",
                description: "Pague uma única vez e tenha acesso ilimitado para sempre"
              },
              {
                icon: Star,
                title: "100% Exclusivo",
                description: "Descubra o que você não encontra em nenhum outro lugar"
              },
              {
                icon: Shield,
                title: "Sigilo Total",
                description: "Sua identidade protegida com total discrição"
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="bg-card border-2 border-secondary/50 p-4 sm:p-6 md:p-8 text-center hover:scale-105 hover:border-primary transition-all duration-500 backdrop-blur-sm">
                <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 sm:mb-4 md:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-foreground mb-8 sm:mb-12 md:mb-16 px-2">
            💬 Depoimentos Reais:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                text: "Simplesmente viciante! O acesso vitalício foi o melhor investimento.",
                author: "J.S., membro VIP"
              },
              {
                text: "A qualidade é impecável e o sigilo me dá total conforto. Recomendo demais!",
                author: "L.M., assinante"
              },
              {
                text: "Estava buscando algo diferente e encontrei um paraíso. O valor é irrisório!",
                author: "F.R., fã fiel"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-card border-2 border-primary/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="text-primary mb-3 sm:mb-4 text-xl sm:text-2xl">⭐⭐⭐⭐⭐</div>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed italic">"{testimonial.text}"</p>
                <div className="text-secondary font-bold text-sm sm:text-base">{testimonial.author}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Final de CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-r from-secondary/40 via-card to-secondary/40 p-6 sm:p-8 md:p-12 border-2 sm:border-4 border-primary/70 backdrop-blur-sm text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-foreground mb-6 sm:mb-8 leading-tight px-2">
              ✨ Essa oferta exclusiva de{" "}
              <span className="text-primary">R$29,90</span>{" "}
              não vai durar para sempre!
            </h2>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
              💋 Clique no botão agora e garanta seu lugar.
              <br />
              <span className="text-secondary font-bold">Te espero lá dentro!</span> 😏
            </p>
            <div className="mb-6 sm:mb-8 px-2">
              <Button
                size="lg"
                onClick={() => window.location.href = PAYMENT_LINK}
                className="bg-gradient-to-r from-secondary via-destructive to-secondary hover:from-destructive hover:via-secondary hover:to-destructive text-foreground font-black py-4 sm:py-6 md:py-8 px-8 sm:px-12 md:px-16 text-lg sm:text-2xl md:text-3xl lg:text-4xl border-2 sm:border-4 border-primary shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse uppercase w-full sm:w-auto max-w-full"
              >
                🔥 GARANTIR MEU ACESSO AGORA!
              </Button>
            </div>
            <div className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              <Lock className="inline w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              Pagamento 100% seguro e discreto | 💎 Acesso imediato
            </div>
          </Card>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-8 sm:py-12 px-3 sm:px-4 md:px-8 border-t-2 border-secondary/30 bg-card/80">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed px-2">
            © 2024 - Todos os direitos reservados | Conteúdo Exclusivo Premium
          </p>
        </div>
      </footer>

      {/* Estilos para Animações (Notificação) */}
      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;
