import { Truck, Landmark, Package, ClipboardList, CheckCircle2 } from "lucide-react";

const audiences = [
  {
    icon: Truck,
    title: "Перевозчики",
    subtitle: "Автопарки и водители",
    color: "border-t-primary",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    points: [
      "Один QR вместо пачки бумажных документов",
      "Защита от злоупотреблений на постах",
      "Цифровая доказательная база при спорах",
      "Прозрачные действия проверяющих органов",
    ],
    cta: { label: "Узнать о ЦПП", href: "#modules" },
  },
  {
    icon: Landmark,
    title: "Государственные органы",
    subtitle: "КГД, транспортная инспекция, таможня, пограничные посты",
    color: "border-t-success",
    iconColor: "text-success",
    iconBg: "bg-success/10",
    points: [
      "100% цифровой охват перевозок",
      "Онлайн-мониторинг движения грузов",
      "Быстрый инструмент проверки — сканирование вместо ручного анализа",
      "Аналитика по маршрутам, снижение коррупционных рисков",
    ],
    cta: { label: "Узнать о модулях", href: "#modules" },
  },
  {
    icon: Package,
    title: "Грузовладельцы",
    subtitle: "Импортёры, экспортёры, торговые компании",
    color: "border-t-warning",
    iconColor: "text-warning",
    iconBg: "bg-warning/10",
    points: [
      "Прогнозируемое время прибытия в реальном времени",
      "Онлайн-статус груза на каждом этапе",
      "Меньше проверок при прозрачной перевозке",
      "Снижение споров и потерь при транспортировке",
    ],
    cta: { label: "Узнать о трекинге", href: "#modules" },
  },
  {
    icon: ClipboardList,
    title: "Таможенные брокеры",
    subtitle: "Брокерские компании и декларанты",
    color: "border-t-destructive",
    iconColor: "text-destructive",
    iconBg: "bg-destructive/10",
    points: [
      "Автоматизация оформления деклараций и документов",
      "AI-ассистент для подготовки таможенных документов",
      "Маркетплейс брокерских услуг — доступ к новым клиентам",
      "Ускоренное прохождение границы для клиентов",
    ],
    cta: { label: "Узнать о таможенных сервисах", href: "#coming-soon" },
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground mb-4">
            Аудитория
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Для кого создана платформа
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Smart Cargo объединяет всех участников грузовой логистики в единую цифровую среду
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className={`border border-border border-t-4 ${a.color} rounded-2xl p-6 hover:shadow-lg transition-shadow bg-card`}
            >
              <div className={`w-11 h-11 rounded-xl ${a.iconBg} flex items-center justify-center mb-4`}>
                <a.icon className={`w-5 h-5 ${a.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{a.subtitle}</p>
              <ul className="space-y-2 mb-5">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={a.cta.href}
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                {a.cta.label} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
