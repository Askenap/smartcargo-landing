import { useState } from "react";
import { ShieldCheck, Globe, Train, PhoneCall, Map, Truck, Landmark, Search } from "lucide-react";

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

        {/* Было / Стало */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Было / Стало</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-destructive/30 rounded-2xl p-6 bg-destructive/5 relative">
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold">Было</span>
              <div className="flex items-center gap-4 mt-4">
                <PhoneCall className="w-12 h-12 text-destructive/60" />
                <div>
                  <p className="font-semibold text-foreground">Звонки и поиск статусов</p>
                  <p className="text-sm text-muted-foreground">Десятки звонков на посты, ручная проверка статусов, неизвестность о местоположении груза</p>
                </div>
              </div>
            </div>
            <div className="border border-success/30 rounded-2xl p-6 bg-success/5 relative">
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold">Стало</span>
              <div className="flex items-center gap-4 mt-4">
                <Map className="w-12 h-12 text-success/60" />
                <div>
                  <p className="font-semibold text-foreground">Карта и таймлайн в одном окне</p>
                  <p className="text-sm text-muted-foreground">Все события, статусы и местоположение груза — на одном экране в реальном времени</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Для кого */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Для кого</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Перевозчику</h4>
              <p className="text-sm text-muted-foreground">Видите этапы и задержки без звонков на пост</p>
            </div>
            <div className="border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-6 h-6 text-warning" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Государству</h4>
              <p className="text-sm text-muted-foreground">Прозрачность движения и событий по маршруту</p>
            </div>
            <div className="border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Инспектору</h4>
              <p className="text-sm text-muted-foreground">Быстрый контекст по статусам и точкам прохождения</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
