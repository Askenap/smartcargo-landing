import { Ship, Zap, Globe } from "lucide-react";

const modules = [
  { icon: Ship, title: "Бронирование морской перевозки", description: "Бронирование места на судне и портовых услуг для портов Актау и Курык." },
  { icon: Zap, title: "Верифицированный проход госграницы", description: "Ускоренное прохождение границы через подтверждение готовности перевозки." },
  { icon: Globe, title: "Новые виды трекинга", description: "Трекинг по навигационным пломбам, СВХ и всем дорогам Казахстана." },
];

const ComingSoonSection = () => {
  return (
    <section id="coming-soon" className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Скоро будет
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="border border-border rounded-2xl p-6 bg-background relative hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <m.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-bold">
                  Скоро
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
