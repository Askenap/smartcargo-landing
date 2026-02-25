import { useState } from "react";
import { Globe, Zap, Ship, ChevronDown, ChevronUp } from "lucide-react";

const trackingData = [
  { name: "Дорожные камеры РК (ИС «ТОР»)", status: "Скоро", deadline: "До 5 марта 2026", benefit: "Трекинг авто по всей дорожной сети РК, а не только платным трассам — 95 000 км вместо текущих 5%" },
  { name: "Статусы ДТ импорт/экспорт (ИС «Кеден»)", status: "Скоро", deadline: "До конца марта 2026", benefit: "Видимость таможенного оформления по ввозу и вывозу товаров — дополнение к уже работающим статусам транзита" },
  { name: "Рентген СИК в реальном времени — 10 постов", status: "Скоро", deadline: "До конца апреля 2026", benefit: "Статус прохождения ИДК поступает мгновенно с оборудования, а не после ручной отметки инспектора" },
  { name: "Электронная очередь Cargo Ruqsat", status: "Запущено", deadline: "Запущено", benefit: "Статус бронирования и факт пересечения границы по каждому ТС — без звонков на пост" },
  { name: "Авто-трекинг ЕСУ ТД + СНТ", status: "Запущено", deadline: "Запущено", benefit: "Документальный след каждой внутренней и ЕАЭС-перевозки: выписка СНТ → передача → доставка" },
  { name: "Статусы СВХ (таможенные склады)", status: "В разработке", deadline: "2 квартал 2026", benefit: "Видно, принят ли груз на склад и в каком состоянии — без звонков агенту" },
  { name: "Авиа-трекинг E-Freight", status: "В разработке", deadline: "2 квартал 2026", benefit: "Отслеживание авиа-груза по AWB от приёма до вылета — статусы из аэропортового СВХ" },
  { name: "GPS-пломбы", status: "В разработке", deadline: "2 квартал 2026", benefit: "Реальное местоположение пломбы + оповещение при вскрытии или отклонении от маршрута" },
  { name: "GPS из мобильного приложения ЦПП", status: "В разработке", deadline: "2 квартал 2026", benefit: "Трекинг авто без внешнего трекера — водитель передаёт координаты через приложение Smart Cargo" },
];

const statusStyle = (status: string) => {
  switch (status) {
    case "Запущено":
      return "bg-[hsl(143_64%_90%)] text-[hsl(160_80%_18%)]";
    case "Скоро":
      return "bg-[hsl(48_96%_89%)] text-[hsl(32_80%_30%)]";
    case "В разработке":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const ComingSoonSection = () => {
  const [trackingExpanded, setTrackingExpanded] = useState(false);
  const [borderExpanded, setBorderExpanded] = useState(false);

  return (
    <section id="coming-soon" className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Скоро будет
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card 1: Новые виды трекинга */}
          <div className="lg:col-span-2 border border-border rounded-2xl p-6 bg-background hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[hsl(48_96%_89%)] text-[hsl(32_80%_30%)] text-xs font-bold">
                Скоро
              </span>
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Новые виды трекинга</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Подключаем новые источники данных о движении грузов — от дорожных камер до GPS-пломб.
            </p>

            <button
              onClick={() => setTrackingExpanded(!trackingExpanded)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors mb-4"
            >
              {trackingExpanded ? "Свернуть" : "Показать источники"}
              {trackingExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {trackingExpanded && (
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-medium text-muted-foreground">Трекинг</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Статус</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Срок</th>
                      <th className="text-left p-3 font-medium text-muted-foreground min-w-[200px]">Что даёт</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingData.map((row) => (
                      <tr key={row.name} className="border-b border-border last:border-0">
                        <td className="p-3 font-medium text-foreground">{row.name}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap ${statusStyle(row.status)}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground whitespace-nowrap">{row.deadline}</td>
                        <td className="p-3 text-muted-foreground">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Card 2: Верифицированный проход */}
          <div className="border border-border rounded-2xl p-6 bg-background hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold">
                В разработке
              </span>
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Верифицированный проход государственной границы</h3>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-muted text-muted-foreground mb-3">
              2 квартал 2026
            </span>

            <button
              onClick={() => setBorderExpanded(!borderExpanded)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors w-full justify-center mb-4"
            >
              {borderExpanded ? "Свернуть" : "Подробнее"}
              {borderExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {borderExpanded && (
              <div className="space-y-4 border-t border-border pt-4">
                <div>
                  <h4 className="text-xs font-bold text-destructive uppercase tracking-wide mb-1">Проблема</h4>
                  <p className="text-sm text-muted-foreground">
                    Ожидание в очереди на выезд в Китай за грузом занимает в среднем 25 дней — при том что сам маршрут Хоргос–Актау составляет всего 4 дня. Перевозчики занимают очередь «впрок», без подтверждённого груза.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Решение</h4>
                  <p className="text-sm text-muted-foreground">
                    «Верифицированный проход» — приоритетный режим для перевозчиков, у которых груз подтверждён заранее на стороне КНР. Только такие перевозки получают слот «день-в-день».
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">Как работает</h4>
                  <ul className="space-y-1.5">
                    {[
                      "Перевозчик фиксирует готовность груза в Smart Cargo ещё в Китае",
                      "Smart Cargo автоматически направляет предварительное информирование смежным органам",
                      "На границе — приоритетный слот без ожидания в общей очереди",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-success/10 p-3">
                  <h4 className="text-xs font-bold text-success uppercase tracking-wide mb-1">Результат</h4>
                  <p className="text-sm text-foreground font-medium">
                    Сокращение цикла рейса с 40 до ~15 дней. Прозрачная очередь — только для тех, кто реально готов.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Card 3: Бронирование морской перевозки */}
          <div className="border border-border rounded-2xl p-6 bg-background hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Ship className="w-6 h-6 text-primary" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[hsl(48_96%_89%)] text-[hsl(32_80%_30%)] text-xs font-bold">
                Скоро
              </span>
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
