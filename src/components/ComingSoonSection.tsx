import { Building2, FileCheck2, ShieldAlert, BarChart3 } from "lucide-react";

const modules = [
  { icon: Building2, title: "Единое окно госуслуг", description: "Все государственные сервисы в одном интерфейсе" },
  { icon: FileCheck2, title: "Разрешительные документы", description: "Электронное оформление и контроль разрешений" },
  { icon: ShieldAlert, title: "Риск-анализ и мониторинг", description: "Автоматическая оценка рисков по маршруту и грузу" },
  { icon: BarChart3, title: "Аналитика перевозок", description: "Дашборды, отчёты и статистика по всем рейсам" },
];

const ComingSoonSection = () => {
  return (
    <section id="coming-soon" className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Скоро на платформе
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="border border-border rounded-2xl p-6 bg-background relative hover:shadow-lg transition-shadow">
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-bold">
                Скоро
              </span>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <m.icon className="w-6 h-6 text-foreground" />
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
