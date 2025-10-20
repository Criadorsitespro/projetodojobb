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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Activity Notification */}
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

      {/* Viewer Count Banner */}
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

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6 animate-pulse max-w-[95vw]">
              ✨ Mais de 18.000 Membros VIP JÁ GARANTIRAM o acesso!
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
              <span className="text-primary block mb-1 sm:mb-2 animate-pulse">Acesso Vitalício Exclusivo</span>
              <span className="text-foreground block text-xl sm:text-3xl md:text-5xl">à Comunidade de Elite</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Não perca a chance de entrar no grupo mais seletivo e com mais crescimento.
              <br className="hidden sm:block" />
              <span className="text-secondary font-bold">Sua transformação começa agora</span>
            </p>

            {/* Visual Carousel CORRIGIDO com Imagens, Blur e Overlay */}
            <div className="mb-8 sm:mb-12 max-w-4xl mx-auto px-2">
              <Carousel className="w-full">
                <CarouselContent>
                  {/* O map cria 5 slides, usando as imagens 'desfocada-1.jpg' até 'desfocada-5.jpg' */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <CarouselItem key={i}>
                      <div className="p-1">
                        <Card 
                          className={`
                            border-2 border-primary relative overflow-hidden h-[300px] sm:h-[400px] 
                            bg-[url('/desfocada-${i}.jpg')] bg-cover bg-center
                          `}
                        >
                          {/* 1. Camada de Desfoque (z-0) */}
                          <div className="absolute inset-0 z-0" style={{ filter: 'blur(5px)' }}></div>
                          
                          {/* 2. Camada de Overlay Escuro (z-10) - O segredo para o texto ser legível */}
                          <div className="absolute inset-0 bg-black/40 z-10"></div>
                          
                          {/* 3. CONTEÚDO PRINCIPAL (z-20) */}
                          <div className="aspect-video flex items
