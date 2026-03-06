import { useRef, useState } from "react";
import {
  Map, MapPin, Clock, FileCheck, Bell, Truck, Search, Landmark,
  PhoneCall, ChevronUp, Camera, Train, Anchor, ShieldCheck, Ticket
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const chips = ["Было / Стало", "Источники", "Для кого", "Как работает", "FAQ"];

const steps = [
  { n: 1, title: "Зайдите на платформу и мы подтянем все ваши грузоперевозки из государственных баз данных по вашему БИН/ИИН", desc: "Номер авто / номер вагона / номер декларации / бронь очереди и т.д." },
  { n: 2, title: "Smart Cargo автоматически подтягивает события", desc: "Данные из интеграций обновляются в реальном времени" },
  { n: 3, title: "Вы видите всё в одном интерфейсе", desc: "Карта + хронология + статусы + уведомления" },
];

const sources = [
  { icon: Camera, name: "KazToll", what: "Передвижение по номеру авто (фиксации камер на платных трассах)", coverage: "655 камер, охват 4 883 км из 95 000 км (≈5%)" },
  { icon: Train, name: "I-Service (КТЖ)", what: "Передвижение по номеру Ж/Д вагона", coverage: "874 станции, охват 100% сети КТЖ" },
  { icon: ShieldCheck, name: "ИС «Кеден»", what: "Таможенные статусы", coverage: "23 поста на границе с 3-ми странами + внутренние посты (100%)" },
  { icon: Ticket, name: "Cargo Ruqsat / Alem", what: "Статусы электронной очереди", coverage: "Бронь → подтверждение → выезд/пересечение" },
  { icon: Anchor, name: "Морпорты (Актау / Курык)", what: "Морской логистический статус", coverage: "Solvo Морпорт Актау / 1С Курык" },
];

const faqs = [
  { q: "Нужно ли ставить датчики?", a: "Нет: часть трекинга работает по интеграциям и идентификаторам, без установки оборудования." },
  { q: "Можно ли поделиться трекингом?", a: "Да: ссылка на просмотр для участников перевозки." },
];

interface Props {
  onCollapse: () => void;
}

const TrackingModuleDetails = ({ onCollapse }: Props) => {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeChip, setActiveChip] = useState(chips[0]);

  const scrollTo = (chip: string) => {
    setActiveChip(chip);
    refs.current[chip]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="border-t border-border pt-8 mt-8 space-y-10">
      {/* Chip navigation */}
      <div className="flex flex-wrap gap-2 sticky top-16 z-10 bg-background py-3">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => scrollTo(c)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              activeChip === c
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {c}
          </button>
        ))}
        <button
          onClick={onCollapse}
          className="ml-auto flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border border-border text-muted-foreground hover:text-foreground transition-colors"
        >
          Свернуть <ChevronUp className="w-3 h-3" />
        </button>
      </div>

      {/* Было / Стало */}
      <div ref={(el) => { refs.current["Было / Стало"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Было / Стало</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-destructive/30 rounded-xl p-4 bg-destructive/5">
            <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold">Было</span>
            <ul className="mt-3 space-y-1.5">
              {["Звонки и чаты", "Разрозненные системы", "Непонятно «где груз»"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-destructive/60 mt-0.5 shrink-0" />
                  <span className="text-xs text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-success/30 rounded-xl p-4 bg-success/5">
            <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold">Стало</span>
            <ul className="mt-3 space-y-1.5">
              {["Единая хронология событий", "Карта в реальном времени", "Одна ссылка для участников"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Map className="w-3.5 h-3.5 text-success/60 mt-0.5 shrink-0" />
                  <span className="text-xs text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Источники */}
      <div ref={(el) => { refs.current["Источники"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Источники данных</h3>
        <div className="space-y-3">
          {sources.map((s) => (
            <div key={s.name} className="rounded-xl p-4 flex gap-3" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{s.what}</p>
                <p className="text-xs text-muted-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{s.coverage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Для кого */}
      <div ref={(el) => { refs.current["Для кого"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Для кого</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Truck, label: "Логист / перевозчик", text: "Контроль рейса и сроки доставки груза", color: "bg-primary/10", iconColor: "text-primary" },
            { icon: Search, label: "Клиент", text: "Прозрачный статус доставки", color: "bg-warning/10", iconColor: "text-warning" },
            { icon: Landmark, label: "Государственные органы", text: "Быстрее понимать картину по событиям", color: "bg-success/10", iconColor: "text-success" },
          ].map((r) => (
            <div key={r.label} className="rounded-xl p-4 text-center" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className={`w-10 h-10 rounded-lg ${r.color} flex items-center justify-center mx-auto mb-2`}>
                <r.icon className={`w-5 h-5 ${r.iconColor}`} />
              </div>
              <p className="text-sm font-bold text-foreground mb-1">{r.label}</p>
              <p className="text-xs text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Как работает — dark gradient */}
      <div ref={(el) => { refs.current["Как работает"] = el; }} className="rounded-2xl p-6 md:p-8" style={{ background: "linear-gradient(135deg, hsl(var(--dark-section-start)), hsl(var(--dark-section-mid)) 50%, hsl(var(--dark-section-end)))" }}>
        <h3 className="text-lg font-bold text-white mb-4">Как работает</h3>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">{s.n}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{s.title}</p>
                <p className="text-xs text-white/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div ref={(el) => { refs.current["FAQ"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">FAQ</h3>
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-sm">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <a
          href="#contacts"
          className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Вход
        </a>
      </div>
    </div>
  );
};

export default TrackingModuleDetails;
