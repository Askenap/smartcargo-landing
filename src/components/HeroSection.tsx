import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { id: 1, title: "Создание рейса", description: "Перевозчик создаёт рейс и привязывает водителя" },
  { id: 2, title: "Загрузка документов", description: "Документы подтягиваются автоматически из госсистем" },
  { id: 3, title: "Проверка документов", description: "Диспетчер проверяет корректность" },
  { id: 4, title: "QR код активен", description: "Формируется единый QR-код для предъявления" },
  { id: 5, title: "Все документы готовы", description: "Рейс готов к отправке" },
];

const HeroSection = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <section className="pt-32 pb-16 section-padding">
      <div className="section-container text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-8">
          Smart Cargo — цифровая платформа управления грузоперевозками по всем видам транспорта.
        </h1>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a href="#modules" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
            О ЦПП
          </a>
          <a href="#tracking" className="px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
            О Трекинге
          </a>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Интерактивный маршрут — нажмите на точку
        </p>

        {/* Interactive Route Map */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-route p-8 relative overflow-hidden">
          {/* Route tooltip */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-warning text-warning-foreground text-sm font-medium">
              Кликните на точки маршрута для навигации
            </span>
          </div>

          {/* Toggle switches */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <label className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <div className="w-10 h-5 bg-success rounded-full relative">
                <div className="w-4 h-4 bg-background rounded-full absolute right-0.5 top-0.5" />
              </div>
              QR код активен
            </label>
            <label className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <div className="w-10 h-5 bg-primary rounded-full relative">
                <div className="w-4 h-4 bg-background rounded-full absolute right-0.5 top-0.5" />
              </div>
              Все документы
            </label>
          </div>

          {/* Route line with dots */}
          <div className="relative py-8">
            <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-primary-foreground/20" />
            <div className="flex justify-between px-4 relative">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(i)}
                  className={`w-4 h-4 rounded-full transition-all z-10 ${
                    i <= currentStep
                      ? "bg-primary-foreground shadow-lg scale-125"
                      : "bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step info */}
          <div className="mt-4 bg-background/10 backdrop-blur rounded-xl p-4 inline-block">
            <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">
              Шаг {currentStep + 1} из {steps.length}
            </p>
            <p className="text-primary-foreground font-semibold mt-1">
              {steps[currentStep].title}
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">
              {steps[currentStep].description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className="flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> НАЗАД
            </button>
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentStep ? "w-8 bg-primary-foreground" : "w-1.5 bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              className="flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            >
              ДАЛЕЕ <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
