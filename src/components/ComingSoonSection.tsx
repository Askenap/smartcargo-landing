import { Ship, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Бронирование морской перевозки",
    description: "Бронирование места на судне и портовых услуг для портов Актау и Курык.",
  },
  {
    icon: Zap,
    title: "Верифицированный проход госграницы",
    description: "Ускоренное прохождение границы через подтверждение готовности перевозки.",
  },
  {
    icon: Globe,
    title: "Новые виды трекинга",
    description: "Трекинг по навигационным пломбам, СВХ и всем дорогам Казахстана.",
  },
];

const ComingSoonSection = () => {
  return (
    <section className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Скоро будет
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="border border-border rounded-2xl p-6 bg-background relative hover:shadow-lg transition-shadow">
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-bold">
                Скоро
              </span>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
