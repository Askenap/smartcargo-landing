import { Landmark, Truck, CheckCircle2 } from "lucide-react";

const statePoints = [
  "Снижение контрабанды и «бумажного транзита»",
  "Рост таможенных поступлений за счёт полной прозрачности",
  "Прозрачность движения подакцизных и стратегических грузов",
  "Автоматическое выявление рисков — отклонение от маршрута фиксируется системой",
  "Устранение ручных процедур и снижение коррупционных рисков",
  "Цифровой след каждого груза — от границы до точки доставки",
];

const businessPoints = [
  "Прогнозируемое время прибытия и онлайн-статус груза",
  "Меньше проверок для прозрачных перевозчиков",
  "Снижение споров, потерь и издержек на простой",
  "Один цифровой документ вместо папки бумаг",
  "Защита от злоупотреблений на постах",
  "Доказательная база при спорных ситуациях",
];

const StrategicEffectSection = () => {
  return (
    <section className="py-20 section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground mb-4">
            Результат
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Стратегический эффект
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Переход от бумажного контроля к цифровой модели управления логистикой страны
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Государство */}
          <div className="border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Для государства</h3>
            </div>
            <ul className="space-y-3">
              {statePoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Бизнес */}
          <div className="border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Для бизнеса</h3>
            </div>
            <ul className="space-y-3">
              {businessPoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlight block */}
        <div className="rounded-2xl bg-primary p-8 text-center">
          <p className="text-primary-foreground text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto mb-6">
            Smart Cargo — это не отдельный сервис, а единая платформа, объединяющая таможню, транспортную инспекцию, налоговый контроль и логистику в один цифровой контур.
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-foreground text-primary font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Связаться с командой
          </a>
        </div>
      </div>
    </section>
  );
};

export default StrategicEffectSection;
