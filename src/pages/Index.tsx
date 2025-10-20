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
              <div className="w-2 h-
