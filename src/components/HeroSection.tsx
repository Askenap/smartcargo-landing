import { Layout, FileText, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 section-padding">
      <div className="section-container text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
          Smart Cargo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Цифровая платформа управления грузоперевозками по всем видам транспорта.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#contacts"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Запросить демо
          </a>
          <a
            href="#modules"
            className="px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Смотреть модули
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Layout, text: "Единый интерфейс по рейсу" },
            { icon: FileText, text: "Документы и статусы — в одном месте" },
            { icon: Eye, text: "Прозрачность для всех участников" },
          ].map((b) => (
            <div key={b.text} className="flex flex-col items-center gap-3 p-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <b.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
