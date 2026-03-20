import {
  ExternalLink,
  Shield,
  Truck,
  Trophy,
  Globe,
  Calendar,
  Users,
  Box,
  MapPin,
  Building2,
  Cpu,
  Lock,
  BrainCircuit,
} from "lucide-react";

const metrics = [
  { number: "12+", label: "лет разработки", icon: Calendar },
  { number: "800+", label: "сотрудников", icon: Users },
  { number: "70+", label: "продуктов", icon: Box },
  { number: "11", label: "стран присутствия", icon: MapPin },
];

const expertise = [
  { icon: Building2, title: "Таможня и логистика", desc: "Системы Keden и Smart Cargo" },
  { icon: Lock, title: "Информационная безопасность", desc: "Защита данных на уровне отрасли" },
  { icon: BrainCircuit, title: "Искусственный интеллект", desc: "AI-модули анализа и прогнозов" },
  { icon: Cpu, title: "Цифровая трансформация", desc: "70+ продуктов для госсектора" },
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
        {/* Header */}
        <div className="text-center mb-14">
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

        {/* Metrics row — full width, compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl bg-card p-5 text-center transition-shadow group"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{m.number}</div>
              <p className="text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column: text + expertise cards */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left: condensed text — 3 cols */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "linear-gradient(135deg, hsl(var(--dark-section-start)) 0%, hsl(var(--dark-section-mid)) 50%, hsl(var(--dark-section-end)) 100%)",
              }}
            >
              <h3 className="text-lg font-bold text-white mb-4">О компании</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                SilkWare — разработчик Smart Cargo и таможенной системы Keden, которая заменила устаревшие АСТАНА-1 и Единое окно. Ежегодно через Keden проходят миллионы деклараций.
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Kazdream IT Holding — ведущий технологический холдинг Казахстана. За 12 лет команда реализовала более 70 продуктов для таможни, транспорта, безопасности и госуправления. Smart Cargo — продукт команды с глубокой экспертизой в интеграции с десятками ведомственных систем.
              </p>
              <a
                href="https://kazdream.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-colors active:scale-[0.97]"
              >
                Подробнее о Kazdream
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: expertise cards — 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl bg-card p-5 flex flex-col items-center text-center transition-shadow group"
                style={{ boxShadow: "var(--card-shadow)" }}
                onMouseEnter={(ev) => (ev.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
                onMouseLeave={(ev) => (ev.currentTarget.style.boxShadow = "var(--card-shadow)")}
              >
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <e.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">{e.title}</h4>
                <p className="text-xs text-muted-foreground leading-snug">{e.desc}</p>
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
