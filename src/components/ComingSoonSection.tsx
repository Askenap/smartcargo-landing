import { Ship, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Бронь на паром онлайн",
    description: "Забронируйте место на судне из Актау или Курык через Smart Cargo.",
  },
  {
    icon: Zap,
    title: "Быстрый проезд границы РК–КНР",
    description: "Подтвердите, что груз готов — получите слот на проезд без очереди в 25 дней.",
  },
  {
    icon: Globe,
    title: "GPS-трекинг в реальном времени",
    description: "Навигационные пломбы, GPS-трекеры и камеры по всей стране — видьте груз на карте в любой момент.",
  },
];

const ComingSoonSection = () => {
  return (
    <section className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Другие модули платформы
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
