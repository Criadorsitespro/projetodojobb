import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Eye,
  Flame,
  Lock,
  Crown,
  Star,
  Users,
  Shield,
  Zap,
} from "lucide-react";

// Link de pagamento do produto
const PAYMENT_LINK = "https://pay.cakto.com.br/3dca34b_613477";

const Index = () => {
  const [viewerCount, setViewerCount] = useState(
    Math.floor(Math.random() * 11) + 35
  );
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 59,
    seconds: 30,
  });

  // Atualização da contagem de viewers
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 4) - 1;
      setViewerCount((prev) => Math.max(35, Math.min(55, prev + change)));
    }, Math.floor(Math.random() * 10000) + 10000);

    return () => clearInterval(interval);
  }, []);

  // Contador regressivo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return {
            hours: prev.hours,
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }
        return { hours: 0, minutes: 59, seconds: 30 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Notificações de atividade/compra
  useEffect(() => {
    const cities = [
      "São Paulo",
      "Rio de Janeiro",
      "Belo Horizonte",
      "Brasília",
      "Curitiba",
      "Porto Alegre",
      "Salvador",
      "Fortaleza",
    ];
    const messages = [
      "Novo Membro acaba de garantir o Acesso Premium!",
      `Cliente de ${
        cities[Math.floor(Math.random() * cities.length)]
      } finalizou a compra!`,
      "Mais um acesso vitalício garantido agora mesmo!",
      `Fã de ${
        cities[Math.floor(Math.random() * cities.length)]
      } entrou na comunidade exclusiva!`,
    ];

    const interval = setInterval(() => {
      setNotificationText(
        messages[Math.floor(Math.random() * messages.length)]
      );
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, Math.floor(Math.random() * 30000) + 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Notificação de Atividade */}
      {showNotification && (
        <div className="fixed top-20 right-2 sm:right-4 z-50 animate-slide-in-right max-w-[90vw] sm:max-w-sm">
          <Card className="bg-card border-2 border-primary p-3 sm:p-4 shadow-2xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              <p className="text-sm sm:text-base font-medium">
                {notificationText}
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Exemplo de uso do contador e botão */}
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Oferta por tempo limitado!</h1>
        <p className="text-lg mb-2">
          {timeLeft.minutes.toString().padStart(2, "0")}:
          {timeLeft.seconds.toString().padStart(2, "0")} restantes
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          {viewerCount} pessoas estão vendo esta página agora
        </p>
        <Button asChild>
          <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
            Garantir Acesso Premium
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
