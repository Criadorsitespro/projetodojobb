import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Eye, Flame, Lock, Crown, Star, Users, Shield, Zap } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/3dca34b_613477";

const Index = () => {
  const [viewerCount, setViewerCount] = useState(Math.floor(Math.random() * 11) + 35);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 59, seconds: 30 });

  // Viewer count update
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 4) - 1; // -1 to +2
      setViewerCount((prev) => Math.max(35, Math.min(55, prev + change)));
    }, Math.floor(Math.random() * 10000) + 10000); // 10-20 seconds

    return () => clearInterval(interval);
  }, []);

  // Countdown timer
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
        return { hours: 0, minutes: 59, seconds: 30 }; // Reset
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Activity notifications
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
      setTimeout(() => setShowNotification(false), 5000);
    }, Math.floor(Math.random() * 30000) + 45000); // 45-75 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Activity Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
          <Card className="bg-card border-2 border-primary p-4 shadow-2xl max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-sm font-semibold text-primary">{notificationText}</p>
            </div>
          </Card>
        </div>
      )}

      {/* Viewer Count Banner */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-secondary/95 backdrop-blur-sm border-b-2 border-primary">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-3 text-center">
            <Eye className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm md:text-lg font-bold text-foreground">
              <span className="text-primary text-xl md:text-2xl">{viewerCount}</span> pessoas estão avaliando esta oferta AGORA!
            </span>
            <Flame className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
              ✨ Mais de 18.000 Membros VIP JÁ GARANTIRAM o acesso!
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-primary block mb-2 animate-pulse">Acesso Vitalício Exclusivo</span>
              <span className="text-foreground block text-3xl md:text-5xl">à Comunidade de Elite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Não perca a chance de entrar no grupo mais seletivo e com mais crescimento.
              <br />
              <span className="text-secondary font-bold">Sua transformação começa agora</span>
            </p>

            {/* Visual Carousel */}
            <div className="mb-12 max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <CarouselItem key={i}>
                      <div className="p-1">
                        <Card className="border-2 border-primary bg-gradient-to-br from-card to-muted">
                          <div className="aspect-video flex items-center justify-center">
                            <div className="text-center p-8">
                              <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
                              <p className="text-primary font-bold text-lg">Conteúdo Exclusivo Premium</p>
                              <p className="text-muted-foreground text-sm mt-2">Acesso Imediato após Pagamento</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-primary" />
                <CarouselNext className="border-primary" />
              </Carousel>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="text-muted-foreground text-2xl mb-2">
                <span className="line-through">De: R$297,00</span>
              </div>
              <div className="text-6xl md:text-8xl font-black text-primary animate-pulse mb-4">
                R$29,90
              </div>
              <div className="text-secondary text-xl font-bold animate-bounce">
                💣 Promoção Relâmpago – O tempo está acabando!
              </div>
            </div>

            {/* Urgency Box */}
            <Card className="inline-block bg-secondary/50 border-2 border-primary p-6 mb-8 backdrop-blur-sm">
              <div className="text-primary text-lg font-bold mb-2">⏰ Oferta expira em:</div>
              <div className="text-4xl md:text-5xl font-mono text-foreground font-black tracking-wider">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </Card>

            {/* Main CTA */}
            <div className="mb-4">
              <Button
                size="lg"
                onClick={() => window.location.href = PAYMENT_LINK}
                className="bg-gradient-to-r from-secondary via-destructive to-secondary hover:from-destructive hover:via-secondary hover:to-destructive text-foreground font-black py-8 px-12 text-2xl md:text-3xl border-4 border-primary shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse uppercase"
              >
                🔥 QUERO MEU ACESSO AGORA!
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <Lock className="inline w-4 h-4 mr-1" />
              Pagamento 100% seguro e discreto
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-16">
            🔥 O que você vai encontrar:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={idx} className="bg-card border-2 border-secondary/50 p-8 text-center hover:scale-105 hover:border-primary transition-all duration-500 backdrop-blur-sm">
                <benefit.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-16">
            💬 Depoimentos Reais:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={idx} className="bg-card border-2 border-primary/50 p-8 backdrop-blur-sm">
                <div className="text-primary mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">"{testimonial.text}"</p>
                <div className="text-secondary font-bold">{testimonial.author}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-r from-secondary/40 via-card to-secondary/40 p-12 border-4 border-primary/70 backdrop-blur-sm text-center">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight">
              ✨ Essa oferta exclusiva de{" "}
              <span className="text-primary">R$29,90</span>{" "}
              não vai durar para sempre!
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 leading-relaxed">
              💋 Clique no botão agora e garanta seu lugar.
              <br />
              <span className="text-secondary font-bold">Te espero lá dentro!</span> 😏
            </p>
            <div className="mb-8">
              <Button
                size="lg"
                onClick={() => window.location.href = PAYMENT_LINK}
                className="bg-gradient-to-r from-secondary via-destructive to-secondary hover:from-destructive hover:via-secondary hover:to-destructive text-foreground font-black py-8 px-16 text-3xl md:text-4xl border-4 border-primary shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse uppercase"
              >
                🔥 GARANTIR MEU ACESSO AGORA!
              </Button>
            </div>
            <div className="text-lg text-muted-foreground">
              <Lock className="inline w-5 h-5 mr-2" />
              Pagamento 100% seguro e discreto | 💎 Acesso imediato
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t-2 border-secondary/30 bg-card/80">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground leading-relaxed">
            © 2024 - Todos os direitos reservados | Conteúdo Exclusivo Premium
          </p>
        </div>
      </footer>

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
