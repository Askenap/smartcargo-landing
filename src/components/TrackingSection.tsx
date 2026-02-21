import { useState } from "react";
import { ShieldCheck, Globe, Train } from "lucide-react";

const trackingSteps = [
  { id: 1, label: "Въезд", active: true },
  { id: 2, label: "Документы", active: true },
  { id: 3, label: "Контроль", active: true },
  { id: 4, label: "Досмотр", active: true },
  { id: 5, label: "Рентген", active: false },
  { id: 6, label: "Оплата", active: false },
  { id: 7, label: "Выпуск", active: false },
  { id: 8, label: "Выезд", active: false },
];

const events = [
  { icon: ShieldCheck, label: "Таможня", color: "bg-warning", date: "19.02.2026, 14:30", text: "Груз прошёл досмотр" },
  { icon: Globe, label: "Граница", color: "bg-success", date: "19.02.2026, 12:15", text: "Проезд через КПП Хоргос" },
  { icon: Train, label: "ЖД станция", color: "bg-primary", date: "18.02.2026, 09:00", text: "Прибытие: Алматы-2" },
];

const TrackingSection = () => {
  const [transportType, setTransportType] = useState<"auto" | "rail">("auto");

  return (
    <section id="tracking" className="py-20 section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Как работает модуль трекинга
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          Где сейчас ваш груз?
        </p>

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
                  <div className={`absolute -left-[31px] w-5 h-5 rounded flex items-center justify-center text-primary-foreground ${event.color}`}>
                    <event.icon className="w-3 h-3" />
                  </div>
                  <p className="text-[10px] font-medium text-muted-foreground/70 mb-0.5">{event.label}</p>
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
                <p className="text-sm font-medium text-foreground">Оплата сборов</p>
              </div>
            </div>

            {/* Notifications */}
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-1">Уведомления</p>
              <p className="text-xs text-muted-foreground mb-3">Узнайте первым, когда груз пройдёт ключевую точку</p>
              <div className="space-y-2">
                {["Проезд границы", "Прибытие на ЖД станцию", "Проезд по трассе (камера)", "Выпуск груза"].map((item) => (
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
