import { ArrowLeftRight, BarChart3, Search, Shield, Clock, Globe } from "lucide-react";

const cards = [
  {
    icon: ArrowLeftRight,
    title: "Транзитный потенциал",
    text: "Казахстан — ключевое звено маршрута Китай–Европа. Платформа ускоряет прохождение грузов и делает коридор конкурентоспособным.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Конкурентоспособность логистики",
    text: "Цифровые инструменты для перевозчиков, брокеров и госорганов — вместо разрозненных бумажных процедур и ручных проверок.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Search,
    title: "Прозрачность и борьба с тенью",
    text: "Каждый груз получает цифровой след. Подделка документов исключена — данные верифицируются через официальные информационные системы.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: Shield,
    title: "Транспортная безопасность",
    text: "GPS-мониторинг, автоматическое выявление отклонений от маршрута и подозрительных остановок — в масштабе всей логистической цепочки.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Clock,
    title: "Снижение издержек и времени",
    text: "Один QR-код вместо папки документов. Проверка за секунды вместо часов. Меньше простоя — дешевле перевозка.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Международные коридоры",
    text: "Интеграция в цифровые транспортные стандарты ЕАЭС и международных коридоров. Совместимость с системами партнёров.",
    color: "text-success",
    bg: "bg-success/10",
  },
];

const WhySection = () => {
  return (
    <section className="py-20 section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground mb-4">
            Миссия платформы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Зачем нужен Smart Cargo
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Цифровая инфраструктура управления грузопотоками — от бумажного контроля к прозрачной логистике
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
