import { lazy, Suspense } from "react";

const Globe3D = lazy(() => import("@/components/Globe3D"));

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 section-padding overflow-hidden">
      {/* Globe background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[600px] h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]">
          <Suspense fallback={null}>
            <Globe3D />
          </Suspense>
        </div>
      </div>

      <div className="section-container text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
          Smart Cargo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Цифровая платформа управления грузоперевозками по всем видам транспорта
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacts"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Вход
          </a>
          <a
            href="#modules"
            className="px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Смотреть модули
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
