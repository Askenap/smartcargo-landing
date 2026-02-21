import { useRef, useState } from "react";
import {
  Globe, ShieldCheck, Landmark, Truck, Search, FileX, Smartphone,
  QrCode, CheckCircle2, ChevronUp, MapPin
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const chips = ["Сценарии", "Как работает", "Что внутри", "Было / Стало", "Для кого", "FAQ"];

const scenarios = [
  { icon: Globe, title: "Граница / таможенный и пограничный пост", text: "QR заменяет бумажный «бегунок», подтверждает прохождение процедур." },
  { icon: MapPin, title: "Международная перевозка по территории РК", text: "Инспекция видит цифровой статус легальности груза без бумажных проверок." },
  { icon: Landmark, title: "Перевозка внутри ЕАЭС (налоговый контроль)", text: "КГД проверяет СНТ: документ существует и корректен — без ручного поиска." },
  { icon: Truck, title: "Внутренняя перевозка по Казахстану", text: "Быстрый доступ к электронным документам (ТТН/путевой лист) и данным рейса." },
];

const steps = [
  { n: 1, title: "Формируется цифровой профиль перевозки", desc: "Данные подтягиваются автоматически из государственных источников" },
  { n: 2, title: "Водитель получает один QR-код", desc: "QR — ключ к проверке, а не сканы документов" },
  { n: 3, title: "Проверяющий сканирует QR и получает подтверждение", desc: "Документ существует · Действителен · Соответствует ТС · Статус актуален" },
];

const contents = [
  "Таможенные декларации (транзит/импорт/экспорт)",
  "Предварительное информирование",
  "Статусы смежных контролей",
  "СНТ и ЭСФ (ЕАЭС)",
  "Электронные документы внутренних перевозок (ТТН/путевой лист)",
  "Данные о перевозчике и ТС",
];

const faqs = [
  { q: "Это только для таможни?", a: "Нет, применяется в 4 сценариях: граница, международная перевозка по РК, ЕАЭС (КГД/СНТ), внутренние перевозки." },
  { q: "Что делает QR?", a: "Проверяет наличие, действительность, соответствие транспорту и статусы процедур." },
  { q: "Нужно ли водителю что-то заполнять?", a: "Обычно нет — QR выдаётся по рейсу автоматически." },
];

interface Props {
  onCollapse: () => void;
}

const CppModuleDetails = ({ onCollapse }: Props) => {
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

      {/* Hero */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Цифровой паспорт перевозки (ЦПП)</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Один QR-код вместо папки документов — подходит для разных сценариев контроля.
        </p>
        <div className="rounded-xl border border-primary/20 bg-accent p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Водителю нужно только:</p>
          <p className="text-sm text-foreground">Получить QR-код и показывать его при проверке.</p>
          <p className="text-xs text-muted-foreground mt-1">
            Система подтверждает документы и статусы по государственным источникам.
          </p>
        </div>
      </div>

      {/* Сценарии */}
      <div ref={(el) => { refs.current["Сценарии"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Сценарии применения</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {scenarios.map((s) => (
            <div key={s.title} className="border border-border rounded-xl p-4">
              <s.icon className="w-5 h-5 text-primary mb-2" />
              <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Как работает */}
      <div ref={(el) => { refs.current["Как работает"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Как работает</h3>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-bold text-xs">{s.n}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Что внутри */}
      <div ref={(el) => { refs.current["Что внутри"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Что внутри ЦПП</h3>
        <div className="space-y-2">
          {contents.map((c) => (
            <div key={c} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
              <span className="text-sm text-foreground">{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Было / Стало */}
      <div ref={(el) => { refs.current["Было / Стало"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Было / Стало</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-destructive/30 rounded-xl p-4 bg-destructive/5">
            <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold">Было</span>
            <ul className="mt-3 space-y-1.5">
              {["Папка документов", "Ручной поиск", "Бумажный «бегунок»", "Споры на проверках"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <FileX className="w-3.5 h-3.5 text-destructive/60 mt-0.5 shrink-0" />
                  <span className="text-xs text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-success/30 rounded-xl p-4 bg-success/5">
            <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold">Стало</span>
            <ul className="mt-3 space-y-1.5">
              {["Один QR-код", "Проверка за секунды", "Подтверждение по источнику", "Меньше спорных ситуаций"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-success/60 mt-0.5 shrink-0" />
                  <span className="text-xs text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Для кого */}
      <div ref={(el) => { refs.current["Для кого"] = el; }}>
        <h3 className="text-lg font-bold text-foreground mb-4">Для кого</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Truck, label: "Водитель / перевозчик", text: "Проще проверка, меньше бумаги", color: "bg-primary/10", iconColor: "text-primary" },
            { icon: Landmark, label: "Госорганы", text: "Прозрачность и подтверждение по источнику", color: "bg-warning/10", iconColor: "text-warning" },
            { icon: Search, label: "Инспекция / КГД", text: "Быстрый контроль и фиксация", color: "bg-success/10", iconColor: "text-success" },
          ].map((r) => (
            <div key={r.label} className="border border-border rounded-xl p-4 text-center">
              <div className={`w-10 h-10 rounded-lg ${r.color} flex items-center justify-center mx-auto mb-2`}>
                <r.icon className={`w-5 h-5 ${r.iconColor}`} />
              </div>
              <p className="text-sm font-bold text-foreground mb-1">{r.label}</p>
              <p className="text-xs text-muted-foreground">{r.text}</p>
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
          Запросить демо
        </a>
      </div>
    </div>
  );
};

export default CppModuleDetails;
