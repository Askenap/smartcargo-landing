import { useState } from "react";

const trackingSteps = [
  { id: 1, label: "Погран", active: true },
  { id: 2, label: "ПИ", active: true },
  { id: 3, label: "Фито/Вето", active: true },
  { id: 4, label: "СКК", active: true },
  { id: 5, label: "Вес/Рентген", active: false },
  { id: 6, label: "Выпуск", active: false },
  { id: 7, label: "СВХ/Оплата", active: false },
  { id: 8, label: "Выезд", active: false },
];

const events = [
  { code: "КД", color: "bg-warning", date: "19.02.2026, 14:30", text: "Груз прошел таможенный досмотр" },
  { code: "КТ", color: "bg-success", date: "19.02.2026, 12:15", text: "Проезд через КПП Хоргос" },
  { code: "ЖС", color: "bg-primary", date: "18.02.2026, 09:00", text: "Прибытие на станцию Алматы-2" },
];

const TrackingSection = () => {
  const [transportType, setTransportType] = useState<"auto" | "rail">("auto");

  return (
    <section id="tracking" className="py-20 section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Трекинг Smart Cargo
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Event History */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">История событий рейса</h3>

            {/* Step badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {trackingSteps.map((step) => (
                <div
                  key={step.id}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold ${
                    step.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step.id}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-8 -mt-6">
              {trackingSteps.map((step) => (
                <span key={step.id} className="w-9 text-center text-[10px] text-muted-foreground">
                  {step.label}
                </span>
              ))}
            </div>

            {/* Events */}
            <div className="space-y-6 border-l-2 border-border pl-6 relative">
              {events.map((event, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[31px] w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center text-primary-foreground ${event.color}`}>
                    {event.code}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{event.date}</p>
                  <p className="text-sm font-medium text-foreground">{event.text}</p>
                  <button className="text-xs text-primary hover:underline mt-1">Подробнее</button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map + Info */}
          <div>
            {/* Transport tabs */}
            <div className="flex gap-1 mb-6 border border-border rounded-lg w-fit">
              <button
                onClick={() => setTransportType("auto")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  transportType === "auto" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Авто
              </button>
              <button
                onClick={() => setTransportType("rail")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  transportType === "rail" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ЖД
              </button>
            </div>

            {/* Map placeholder */}
            <div className="border border-border rounded-2xl h-48 flex items-center justify-center mb-6 bg-secondary/50">
              <span className="text-muted-foreground text-sm">Карта маршрута</span>
            </div>

            {/* Info */}
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs text-muted-foreground">Где груз сейчас:</p>
                <p className="text-sm font-medium text-foreground">КПП Хоргос, таможенный досмотр</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Следующий этап:</p>
                <p className="text-sm font-medium text-foreground">СВХ — оплата сборов</p>
              </div>
            </div>

            {/* Notifications */}
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-3">Уведомления</p>
              <div className="space-y-2">
                {["КПП / очередь", "Станция", "Событие на трассе", "Выпуск груза"].map((item) => (
                  <label key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <input type="checkbox" className="w-4 h-4 rounded border-border" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Включить уведомления
              </button>
              <button className="w-full py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Создать ссылку на просмотр трекинга
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
