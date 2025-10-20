import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Carrossel de Imagens
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Pronto para adicionar suas imagens
          </p>
        </div>

        {/* Empty Carousel - Ready for manual image insertion */}
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Slide 1 - Empty */}
              <CarouselItem>
                <div className="p-2">
                  <Card className="border-2 border-gray-200">
                    <div className="aspect-video flex items-center justify-center bg-gray-50">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-4xl text-gray-400">1</span>
                        </div>
                        <p className="text-gray-500 font-medium">Slide 1 - Adicione sua imagem aqui</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              {/* Slide 2 - Empty */}
              <CarouselItem>
                <div className="p-2">
                  <Card className="border-2 border-gray-200">
                    <div className="aspect-video flex items-center justify-center bg-gray-50">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-4xl text-gray-400">2</span>
                        </div>
                        <p className="text-gray-500 font-medium">Slide 2 - Adicione sua imagem aqui</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              {/* Slide 3 - Empty */}
              <CarouselItem>
                <div className="p-2">
                  <Card className="border-2 border-gray-200">
                    <div className="aspect-video flex items-center justify-center bg-gray-50">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-4xl text-gray-400">3</span>
                        </div>
                        <p className="text-gray-500 font-medium">Slide 3 - Adicione sua imagem aqui</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              {/* Slide 4 - Empty */}
              <CarouselItem>
                <div className="p-2">
                  <Card className="border-2 border-gray-200">
                    <div className="aspect-video flex items-center justify-center bg-gray-50">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-4xl text-gray-400">4</span>
                        </div>
                        <p className="text-gray-500 font-medium">Slide 4 - Adicione sua imagem aqui</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              {/* Slide 5 - Empty */}
              <CarouselItem>
                <div className="p-2">
                  <Card className="border-2 border-gray-200">
                    <div className="aspect-video flex items-center justify-center bg-gray-50">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-4xl text-gray-400">5</span>
                        </div>
                        <p className="text-gray-500 font-medium">Slide 5 - Adicione sua imagem aqui</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>

        {/* Instructions */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              📝 Como adicionar suas imagens:
            </h2>
            <div className="text-left space-y-3 text-gray-700">
              <p className="flex items-start gap-2">
                <span className="font-bold min-w-[24px]">1.</span>
                <span>Substitua o conteúdo de cada slide pelo código da sua imagem</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold min-w-[24px]">2.</span>
                <span>Use a tag {'<img>'} com a propriedade src apontando para sua imagem</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold min-w-[24px]">3.</span>
                <span>O carrossel é totalmente responsivo e se adapta a qualquer tela</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold min-w-[24px]">4.</span>
                <span>Use as setas para navegar entre os slides</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
