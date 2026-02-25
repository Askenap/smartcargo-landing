import { lazy, Suspense } from "react";

const Globe3D = lazy(() => import("@/components/Globe3D"));

const HeroSection = () => {
  return (
    <section className="pt-32 pb-4 section-padding overflow-hidden relative">
      {/* Background decorative shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90%] h-[85%] rounded-3xl bg-gradient-to-br from-accent to-secondary opacity-60" />
      </div>
      <div className="section-container flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
            Smart Cargo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Цифровая платформа управления грузоперевозками по всем видам транспорта
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
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

        {/* Right: globe */}
        <div className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-visible">
          <Suspense fallback={null}>
            <Globe3D />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
