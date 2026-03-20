import { ExternalLink, Shield, Truck, Trophy, Globe } from "lucide-react";

const metrics = [
  { number: "12+", label: "лет разработки информационных систем" },
  { number: "800+", label: "сотрудников в холдинге" },
  { number: "70+", label: "реализованных продуктов" },
  { number: "11", label: "стран присутствия холдинга" },
];

const badges = [
  { icon: Shield, text: "Разработчик ИС Keden" },
  { icon: Truck, text: "Разработчик Smart Cargo" },
  { icon: Trophy, text: "ТОП-5 IT Центральной Азии" },
  { icon: Globe, text: "Присутствие в 11 странах" },
];

const DeveloperSection = () => {
  return (
    <section className="py-24 md:py-28 section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground mb-4">
            Разработчик
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Кто стоит за Smart Cargo
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Платформу разрабатывает ТОО SilkWare — часть Kazdream IT Holding, крупнейшего IT-холдинга Казахстана
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: about text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-4 text-foreground text-base leading-relaxed">
              <p>
                SilkWare — компания-разработчик платформы Smart Cargo и таможенной информационной системы Keden, которая уже заменила устаревшие системы АСТАНА-1 и Единое окно и обрабатывает миллионы таможенных деклараций ежегодно.
              </p>
              <p>
                Мы входим в состав Kazdream IT Holding — ведущего технологического холдинга Казахстана, входящего в ТОП-5 IT-разработчиков Центральной Азии. За 12 лет работы команда холдинга реализовала более 70 продуктов в сфере цифровой трансформации, информационной безопасности, искусственного интеллекта и аналитики данных.
              </p>
              <p>
                Наш профиль — проектирование и разработка масштабных информационных систем, работающих на уровне целых отраслей: таможня, транспорт, безопасность, госуправление. Smart Cargo — это не стартап, а продукт команды с глубокой экспертизой в интеграции с десятками ведомственных систем.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://kazdream.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-accent transition-colors active:scale-[0.97]"
              >
                Подробнее о Kazdream
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: metrics */}
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl bg-card p-6 text-center transition-shadow"
                style={{ boxShadow: "var(--card-shadow)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{m.number}</div>
                <p className="text-sm text-muted-foreground leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="rounded-2xl bg-section-alt py-5 px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background text-sm font-medium text-muted-foreground"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <b.icon className="w-4 h-4 text-primary shrink-0" />
                {b.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
