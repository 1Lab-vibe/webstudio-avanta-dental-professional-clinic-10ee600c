import { Phone, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15), transparent 60%)' }} />
      </div>
      <div className="container-narrow section-padding relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 text-sm font-medium opacity-90">
              <MapPin className="h-4 w-4" />
              <span>Краснодар</span>
              <span className="mx-1 opacity-40">·</span>
              <Clock className="h-4 w-4" />
              <span>5 лет на рынке</span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Стоматология AVANTA
            </h1>

            <p className="max-w-lg text-lg leading-relaxed opacity-90">
              Запишитесь онлайн — без звонков и ожидания. Лечение, протезирование, имплантация в&nbsp;одной клинике.
            </p>

            <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm w-fit">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current trust-star" />
                ))}
              </div>
              <span className="text-sm font-medium">
                4.8 на Яндекс Картах · 23 отзыва
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8"
                asChild
              >
                <a href="#request">Записаться на приём</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-primary-foreground hover:bg-white/10 font-medium"
                asChild
              >
                <a href="tel:+78612001234" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +7 (861) 200-12-34
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block flex-shrink-0 w-80 h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden">
            <div className="flex h-full items-center justify-center text-sm opacity-60">
              Фото клиники
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
