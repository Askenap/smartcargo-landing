import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe, ShieldCheck, Landmark, Truck, Search, FileX, Smartphone, Download,
  QrCode, CheckCircle2, MapPin, FileText, CheckCircle, Lock, ArrowLeft,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import handPhoneMockup from "@/assets/hand-phone-mockup.png";

/* ── Data ── */
const scenarios = [
  { icon: Globe, title: "Граница / таможенный и пограничный пост", text: "QR заменяет бумажный «бегунок», подтверждает прохождение процедур." },
  { icon: MapPin, title: "Международная перевозка по территории РК", text: "Инспекция видит цифровой статус легальности груза без бумажных проверок." },
  { icon: Landmark, title: "Перевозка внутри ЕАЭС (налоговый контроль)", text: "КГД проверяет СНТ: документ существует и корректен — без ручного поиска." },
  { icon: Truck, title: "Внутренняя перевозка по Казахстану", text: "Быстрый доступ к электронным документам и данным рейса." },
];

const steps = [
  { n: 1, title: "Водитель скачивает мобильное приложение", desc: "Доступно в Google Play (App Store — скоро)", icon: Download },
  { n: 2, title: "Данные подтягиваются автоматически и формируется QR", desc: "Цифровой профиль перевозки со всеми документами формируется из источников — заполнять ничего не нужно.", icon: Smartphone },
  { n: 3, title: "Проверяющий сканирует QR и получает подтверждение", desc: "Документ существует · Действителен · Соответствует ТС · Статус актуален", icon: Search },
];

const contents = [
  "Таможенные декларации (транзит/импорт/экспорт)",
  "Предварительное информирование",
  "Статусы смежных контролей",
  "СНТ и ЭСФ (ЕАЭС)",
  "Электронные документы внутренних перевозок (ТТН / путевой лист)",
  "Данные о перевозчике и транспортном средстве",
];

const faqs = [
  { q: "Это только для таможни?", a: "Нет, применяется в 4 сценариях: граница, международная перевозка по РК, ЕАЭС (КГД/СНТ), внутренние перевозки." },
  { q: "Что делает QR?", a: "Проверяет наличие, действительность, соответствие транспорту и статусы процедур." },
  { q: "Нужно ли водителю что-то заполнять?", a: "Обычно нет — QR выдаётся по рейсу автоматически." },
];

const chips = ["Было / Стало", "Сценарии", "Для кого", "Как работает", "Что внутри", "FAQ"] as const;

/* ── QR SVG ── */
const QrSvg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="2" y="2" width="28" height="28" rx="3" fill="#111827" />
    <rect x="6" y="6" width="20" height="20" rx="2" fill="white" />
    <rect x="10" y="10" width="12" height="12" rx="1" fill="#111827" />
    <rect x="70" y="2" width="28" height="28" rx="3" fill="#111827" />
    <rect x="74" y="6" width="20" height="20" rx="2" fill="white" />
    <rect x="78" y="10" width="12" height="12" rx="1" fill="#111827" />
    <rect x="2" y="70" width="28" height="28" rx="3" fill="#111827" />
    <rect x="6" y="74" width="20" height="20" rx="2" fill="white" />
    <rect x="10" y="78" width="12" height="12" rx="1" fill="#111827" />
    <circle cx="50" cy="50" r="12" fill="#2563EB" />
    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">S</text>
    {[[35,5],[40,5],[45,10],[50,5],[55,10],[60,5],[65,15],[35,15],[45,20],[55,20],[60,15],[5,35],[10,40],[15,45],[20,35],[25,40],[5,50],[15,55],[25,50],[20,60],[35,35],[65,35],[35,65],[65,65],[40,40],[60,40],[40,60],[60,60],[75,40],[80,45],[85,50],[75,55],[80,60],[85,65],[75,75],[80,80],[85,75],[90,85],[85,90],[35,75],[40,80],[45,75],[50,85],[55,80],[60,75],[65,80],[35,90],[45,90],[55,90],[65,90],[90,35],[90,45],[90,55]].map(([x,y],i)=>(
      <rect key={i} x={x} y={y} width="4" height="4" fill="#111827" rx="0.5"/>
    ))}
  </svg>
);

const features = [
  { icon: FileText, title: "Все документы в одном коде", desc: "Декларации, СНТ, ЭСФ, ТТН — всё привязано к QR", color: "text-primary" },
  { icon: CheckCircle, title: "Статусы проверок", desc: "Обновляются автоматически в реальном времени", color: "text-success" },
  { icon: Lock, title: "Данные верифицированы", desc: "Подделка исключена — QR ссылается на официальные записи", color: "text-primary" },
];

/* ── Page ── */
const CppPage = () => {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeChip, setActiveChip] = useState<string>(chips[0]);

  const scrollTo = (chip: string) => {
    setActiveChip(chip);
    refs.current[chip]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 section-padding overflow-hidden">
        <div className="section-container">
          <Link
            to="/#modules"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к модулям
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left text */}
            <div className="flex-1 max-w-xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-success/10 text-success border border-success/30">
                🚀 Пилотный запуск — 15 марта 2026
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4" style={{ lineHeight: 1.1 }}>
                Цифровой паспорт перевозки
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Один QR-код вместо папки документов — для проверок по пути следования грузоперевозки.
              </p>

              {/* Feature bullets */}
              <div className="flex flex-col gap-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
                      <f.icon className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground leading-snug">{f.title}</p>
                      <p className="text-xs text-muted-foreground leading-snug mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* App links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/></svg>
                  Google Play
                </a>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted text-muted-foreground text-sm font-medium cursor-default">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  App Store — скоро
                </span>
              </div>
            </div>

            {/* Right: hand + QR */}
            <div className="flex items-center gap-6 lg:gap-8 shrink-0">
              {/* Hand */}
              <img
                src={handPhoneMockup}
                alt="Рука держит смартфон с интерфейсом Smart Cargo"
                className="max-h-[350px] md:max-h-[480px] w-auto object-contain select-none"
                draggable={false}
              />

              {/* Dashed arrow */}
              <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="hidden md:block shrink-0">
                <path d="M0 15 Q25 0 50 15" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.25" fill="none" style={{ animation: "mockup-dash 1.5s linear infinite" }} />
                <polygon points="46,12 50,15 46,18" fill="#2563EB" fillOpacity="0.25" />
              </svg>

              {/* QR */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] p-4 rounded-2xl bg-white"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <QrSvg />
                </div>
                <p className="text-xs font-semibold text-muted-foreground">Один QR = все документы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Details ── */}
      <section className="pb-24 section-padding">
        <div className="section-container max-w-4xl">
          {/* Chip navigation */}
          <div className="flex flex-wrap gap-2 sticky top-16 z-10 bg-background/95 backdrop-blur-sm py-4 mb-10 border-b border-border">
            {chips.map((c) => (
              <button
                key={c}
                onClick={() => scrollTo(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeChip === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Было / Стало */}
          <div ref={(el) => { refs.current["Было / Стало"] = el; }} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-foreground mb-6">Было / Стало</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-destructive/30 rounded-2xl p-6 bg-destructive/5">
                <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-bold">Было</span>
                <ul className="mt-4 space-y-2.5">
                  {["Папка документов", "Бумажный «бегунок»", "Доказание достоверности документов"].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <FileX className="w-4 h-4 text-destructive/60 mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-success/30 rounded-2xl p-6 bg-success/5">
                <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-bold">Стало</span>
                <ul className="mt-4 space-y-2.5">
                  {["Один QR-код", "Проверка за секунды", "Документ из баз уже проверен"].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <Smartphone className="w-4 h-4 text-success/60 mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Сценарии */}
          <div ref={(el) => { refs.current["Сценарии"] = el; }} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-foreground mb-6">Сценарии применения</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {scenarios.map((s) => (
                <div key={s.title} className="rounded-2xl p-5 bg-card" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Для кого */}
          <div ref={(el) => { refs.current["Для кого"] = el; }} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-foreground mb-6">Для кого</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { icon: Truck, label: "Водитель / перевозчик", text: "Проще проверка, меньше бумаги", color: "bg-primary/10", iconColor: "text-primary" },
                { icon: Landmark, label: "Контролирующие органы", text: "Прозрачность и подтверждение по источнику", color: "bg-warning/10", iconColor: "text-warning" },
                { icon: Search, label: "Инспекция / КГД", text: "Быстрый контроль и фиксация", color: "bg-success/10", iconColor: "text-success" },
              ].map((r) => (
                <div key={r.label} className="rounded-2xl p-5 text-center" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className={`w-12 h-12 rounded-xl ${r.color} flex items-center justify-center mx-auto mb-3`}>
                    <r.icon className={`w-5 h-5 ${r.iconColor}`} />
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">{r.label}</p>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Как работает */}
          <div ref={(el) => { refs.current["Как работает"] = el; }} className="mb-16 scroll-mt-28 rounded-2xl p-6 md:p-8" style={{ background: "linear-gradient(135deg, hsl(var(--dark-section-start)), hsl(var(--dark-section-mid)) 50%, hsl(var(--dark-section-end)))" }}>
            <h2 className="text-2xl font-bold text-white mb-6">Как работает</h2>
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.n}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">{s.n}</span>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white flex items-center gap-2">
                        <s.icon className="w-4 h-4 text-white/80" />
                        {s.title}
                      </p>
                      <p className="text-sm text-white/70 mt-1">{s.desc}</p>
                    </div>
                  </div>
                  {s.n === 1 && (
                    <div className="ml-14 mt-3 flex flex-wrap gap-2">
                      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-foreground text-sm font-medium hover:opacity-90 transition-opacity">Google Play</a>
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 text-white/70 text-sm font-medium cursor-default">App Store — скоро</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Что внутри */}
          <div ref={(el) => { refs.current["Что внутри"] = el; }} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-foreground mb-6">Что внутри ЦПП</h2>
            <div className="space-y-3">
              {contents.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-base text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div ref={(el) => { refs.current["FAQ"] = el; }} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-foreground mb-6">FAQ</h2>
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/#contacts"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes mockup-dash {
          to { stroke-dashoffset: -12; }
        }
      `}</style>
    </div>
  );
};

export default CppPage;
