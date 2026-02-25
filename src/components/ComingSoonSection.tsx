import { useRef, useState } from "react";
import {
  Globe, Zap, Ship, ChevronDown, ChevronUp, CheckCircle2,
  Camera, FileCheck, ScanLine, Ticket, FileText, Warehouse,
  Plane, MapPin, Smartphone, Truck, Landmark, Clock
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const trackingSources = [
  { icon: Camera, name: "Дорожные камеры РК", provider: "ИС «ТОР»", desc: "Трекинг авто по всей дорожной сети — 95 000 км вместо текущих 5%", deadline: "До 5 марта 2026", launched: false },
  { icon: FileCheck, name: "Статусы ДТ импорт/экспорт", provider: "ИС «Кеден»", desc: "Видимость таможенного оформления по ввозу и вывозу", deadline: "До конца марта 2026", launched: false },
  { icon: ScanLine, name: "Рентген СИК в реальном времени — 10 постов", provider: "Nuctech", desc: "Статус ИДК мгновенно с оборудования, без ручной отметки инспектора", deadline: "До конца апреля 2026", launched: false },
  { icon: Ticket, name: "Электронная очередь Cargo Ruqsat", provider: "МФ РК", desc: "Статус бронирования и факт пересечения границы по каждому ТС — без звонков на пост", deadline: "Запущено 24.02.2026", launched: true },
  { icon: FileText, name: "Авто-трекинг ЕСУ ТД + СНТ", provider: "МТ РК", desc: "Документальный след каждой внутренней и ЕАЭС-перевозки: выписка СНТ → передача → доставка", deadline: "Запущено 24.02.2026", launched: true },
  { icon: Warehouse, name: "Статусы СВХ", provider: "ИС «Кеден»", desc: "Принят ли груз на склад и в каком состоянии — без звонков агенту", deadline: "2 квартал 2026", launched: false },
  { icon: Plane, name: "Авиа-трекинг", provider: "E-Freight", desc: "Отслеживание авиа-груза по AWB от приёма до вылета", deadline: "2 квартал 2026", launched: false },
  { icon: MapPin, name: "GPS по навигационной пломбе", provider: "ИС «Транзит»", desc: "Местоположение пломбы + оповещение при вскрытии или отклонении от маршрута", deadline: "2 квартал 2026", launched: false },
  { icon: Smartphone, name: "GPS из мобильного приложения ЦПП", provider: "Smart Cargo", desc: "Трекинг без внешнего трекера — водитель передаёт координаты через приложение", deadline: "2 квартал 2026", launched: false },
];

const borderChips = ["Было / Стало", "Для кого", "Как работает"];

const borderSteps = [
  { n: 1, title: "Водитель подтверждает готовность груза в приложении Smart Cargo ещё находясь в Китае", icon: Smartphone },
  { n: 2, title: "Smart Cargo автоматически направляет предварительное информирование смежным органам на границе", icon: FileCheck },
  { n: 3, title: "Система выдаёт приоритетный слот на пересечение — без ожидания в общей очереди", icon: Clock },
];

const ComingSoonSection = () => {
  const [trackingExpanded, setTrackingExpanded] = useState(false);
  const [borderExpanded, setBorderExpanded] = useState(false);
  const [activeBorderChip, setActiveBorderChip] = useState(borderChips[0]);
  const borderRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToBorder = (chip: string) => {
    setActiveBorderChip(chip);
    borderRefs.current[chip]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const badgeClass = "px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold";

  return (
    <section id="coming-soon" className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Скоро будет
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Новые виды трекинга */}
          <div className="lg:col-span-2 border border-border rounded-2xl p-6 bg-background hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <span className={badgeClass}>Ближайшее обновление: 5 марта</span>
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Новые виды трекинга</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Подключаем новые источники данных о движении грузов — от дорожных камер до GPS-пломб.
            </p>

            <button
              onClick={() => setTrackingExpanded(!trackingExpanded)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors mb-4 self-start"
            >
              {trackingExpanded ? "Свернуть" : "Показать источники"}
              {trackingExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {trackingExpanded && (
              <div className="space-y-3">
                {trackingSources.map((s) => (
                  <div key={s.name} className="border border-border rounded-xl p-4 flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-bold text-foreground">{s.name}</p>
                        {s.launched && (
                          <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold">Запущено</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{s.provider}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">{s.desc}</p>
                      {!s.launched && (
                        <p className="text-xs text-muted-foreground/50 mt-1">{s.deadline}</p>
                      )}
                      {s.launched && (
                        <p className="text-xs text-success/70 mt-1">{s.deadline}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 2: Верифицированный проход */}
          <div className="border border-border rounded-2xl p-6 bg-background hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className={badgeClass}>2 квартал 2026</span>
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Верифицированный проход государственной границы</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Слот «день-в-день» на границе РК–КНР только для перевозчиков с подтверждённым грузом — без ожидания в общей очереди
            </p>

            <div className="space-y-2 mb-4">
              {[
                "Приоритетный слот только при подтверждённом грузе на стороне КНР",
                "Предварительное информирование смежных органов автоматически",
                "Сокращение цикла рейса с 40 до ~15 дней",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setBorderExpanded(!borderExpanded)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors self-start mb-4"
            >
              {borderExpanded ? "Свернуть" : "Подробнее"}
              {borderExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {borderExpanded && (
              <div className="border-t border-border pt-6 mt-2 space-y-8">
                {/* Chip navigation */}
                <div className="flex flex-wrap gap-2">
                  {borderChips.map((c) => (
                    <button
                      key={c}
                      onClick={() => scrollToBorder(c)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        activeBorderChip === c
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* Было / Стало */}
                <div ref={(el) => { borderRefs.current["Было / Стало"] = el; }}>
                  <h4 className="text-sm font-bold text-foreground mb-3">Было / Стало</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="border border-destructive/30 rounded-xl p-3 bg-destructive/5">
                      <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold">Было</span>
                      <ul className="mt-2 space-y-1.5">
                        {[
                          "Очередь на выезд в КНР 25 дней",
                          "Бронирование «впрок» без подтверждённого груза",
                          "Простой фур в Китае 14+ дней при норме 7",
                        ].map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-1.5 shrink-0" />
                            <span className="text-xs text-foreground">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-success/30 rounded-xl p-3 bg-success/5">
                      <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold">Стало</span>
                      <ul className="mt-2 space-y-1.5">
                        {[
                          "Слот день-в-день",
                          "Только перевозчики с подтверждённым грузом",
                          "Быстрый оборот транспорта",
                        ].map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-success/60 mt-0.5 shrink-0" />
                            <span className="text-xs text-foreground">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Для кого */}
                <div ref={(el) => { borderRefs.current["Для кого"] = el; }}>
                  <h4 className="text-sm font-bold text-foreground mb-3">Для кого</h4>
                  <div className="space-y-3">
                    {[
                      { icon: Truck, label: "Перевозчик", text: "Предсказуемый рейс, меньше простоев и затрат", color: "bg-primary/10", iconColor: "text-primary" },
                      { icon: Landmark, label: "Государство", text: "Снижение очереди, рост пропускной способности коридора РК–КНР", color: "bg-warning/10", iconColor: "text-warning" },
                      { icon: Globe, label: "КНР", text: "Нормализация паритета, меньше скопления казахстанских фур на территории Китая", color: "bg-success/10", iconColor: "text-success" },
                    ].map((r) => (
                      <div key={r.label} className="border border-border rounded-xl p-3 flex gap-3">
                        <div className={`w-8 h-8 rounded-lg ${r.color} flex items-center justify-center shrink-0`}>
                          <r.icon className={`w-4 h-4 ${r.iconColor}`} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground">{r.label}</p>
                          <p className="text-xs text-muted-foreground">{r.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Как работает */}
                <div ref={(el) => { borderRefs.current["Как работает"] = el; }}>
                  <h4 className="text-sm font-bold text-foreground mb-3">Как работает</h4>
                  <div className="space-y-3">
                    {borderSteps.map((s) => (
                      <div key={s.n} className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <span className="text-primary-foreground font-bold text-xs">{s.n}</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                            <s.icon className="w-3.5 h-3.5 text-primary" />
                          </p>
                          <p className="text-xs text-muted-foreground">{s.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card 3: Бронирование морской перевозки */}
          <div className="border border-border rounded-2xl p-6 bg-background hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Ship className="w-6 h-6 text-primary" />
              </div>
              <span className={badgeClass}>2 квартал 2026</span>
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Бронирование морской перевозки</h3>
            <p className="text-sm text-muted-foreground">Бронирование места на судне и портовых услуг для портов Актау и Курык.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
