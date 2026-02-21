import { useState } from "react";
import {
  CheckCircle2, MapPin, FileCheck, Truck, Train, Ship, Plane,
  QrCode, FileX, Smartphone, Landmark, Search, ChevronDown,
  ShieldCheck, Globe, PhoneCall, Map
} from "lucide-react";

const cppSteps = [
  {
    number: 1,
    title: "Водитель регистрируется в приложении",
    items: ["Вход через eGov Mobile или QazETA для иностранцев", "Перевозчик прикрепляет водителя к рейсу"],
  },
  {
    number: 2,
    title: "Система сама собирает документы",
    items: ["Декларации, разрешения и отметки контроля появляются автоматически из государственных баз"],
  },
  {
    number: 3,
    title: "Один QR вместо папки бумаг",
    items: ["На границе — проверка за секунды", "На дороге — инспектор сканирует и видит всё", "В ЕАЭС — подтверждение легальности груза"],
  },
];

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

const trackingEvents = [
  { icon: ShieldCheck, label: "Таможня", color: "bg-warning", date: "19.02.2026, 14:30", text: "Груз прошёл досмотр" },
  { icon: Globe, label: "Граница", color: "bg-success", date: "19.02.2026, 12:15", text: "Проезд через КПП Хоргос" },
  { icon: Train, label: "ЖД станция", color: "bg-primary", date: "18.02.2026, 09:00", text: "Прибытие: Алматы-2" },
];

const ModulesSection = () => {
  const [cppExpanded, setCppExpanded] = useState(false);
  const [trackingExpanded, setTrackingExpanded] = useState(false);
  const [transportType, setTransportType] = useState<"auto" | "rail">("auto");

  return (
    <section id="modules" className="py-20 section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Модули платформы
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ЦПП Card */}
          <div className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-6">
              <FileCheck className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Цифровой паспорт перевозки</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Один QR-код вместо папки бумаг. Все документы и статусы рейса — в телефоне водителя.
            </p>
            <div className="space-y-3 mb-8">
              {["Больше никаких бумаг — всё в телефоне", "Один QR на таможне вместо папки с печатями", "Декларации, СНТ, ТТН — сами появляются в профиле рейса"].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCppExpanded(!cppExpanded)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Подробнее
              <ChevronDown className={`w-4 h-4 transition-transform ${cppExpanded ? "rotate-180" : ""}`} />
            </button>

            {/* Expandable content */}
            {cppExpanded && (
              <div className="mt-8 space-y-10 border-t border-border pt-8">
                {/* Как работает */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-6">Как работает</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {cppSteps.map((step) => (
                        <div key={step.number} className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <span className="text-primary-foreground font-bold text-xs">{step.number}</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground mb-1">{step.title}</p>
                            <ul className="space-y-1">
                              {step.items.map((item, i) => (
                                <li key={i} className="text-xs text-muted-foreground">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border border-border rounded-xl p-6 bg-secondary/30 flex flex-col items-center justify-center">
                      <div className="w-32 h-32 bg-background rounded-xl flex items-center justify-center mb-3">
                        <QrCode className="w-20 h-20 text-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">Рейс SC-2026-001</p>
                    </div>
                  </div>
                </div>

                {/* Было / Стало */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Было / Стало</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-destructive/30 rounded-xl p-4 bg-destructive/5">
                      <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold">Было</span>
                      <div className="flex items-center gap-3 mt-3">
                        <FileX className="w-8 h-8 text-destructive/60 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">Папка с бумагами</p>
                          <p className="text-xs text-muted-foreground">Бегунок с печатями, копии деклараций</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-success/30 rounded-xl p-4 bg-success/5">
                      <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold">Стало</span>
                      <div className="flex items-center gap-3 mt-3">
                        <Smartphone className="w-8 h-8 text-success/60 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">QR-код в телефоне</p>
                          <p className="text-xs text-muted-foreground">Все документы — в одном QR-коде</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Для кого */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Для кого</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Truck, label: "Перевозчику", text: "Документы в одном QR — меньше простоев", color: "bg-primary/10", iconColor: "text-primary" },
                      { icon: Landmark, label: "Государству", text: "Единый цифровой пакет — меньше ошибок", color: "bg-warning/10", iconColor: "text-warning" },
                      { icon: Search, label: "Инспектору", text: "Сканируй QR — всё на экране", color: "bg-success/10", iconColor: "text-success" },
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
              </div>
            )}
          </div>

          {/* Tracking Card */}
          <div className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Трекинг Smart Cargo</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Видьте, где ваш груз прямо сейчас: камеры на трассах, ЖД станции, порты — всё на одной карте
            </p>
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Виды транспорта:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Truck, label: "Авто" },
                  { icon: Train, label: "ЖД" },
                  { icon: Ship, label: "Море" },
                  { icon: Plane, label: "Авиа" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setTrackingExpanded(!trackingExpanded)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Подробнее
              <ChevronDown className={`w-4 h-4 transition-transform ${trackingExpanded ? "rotate-180" : ""}`} />
            </button>

            {/* Expandable content */}
            {trackingExpanded && (
              <div className="mt-8 space-y-10 border-t border-border pt-8">
                {/* Как работает */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Как работает модуль трекинга</h4>
                  <p className="text-sm text-muted-foreground mb-6">Где сейчас ваш груз?</p>

                  {/* Transport tabs */}
                  <div className="flex gap-1 mb-4 border border-border rounded-lg w-fit">
                    <button
                      onClick={() => setTransportType("auto")}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        transportType === "auto" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Авто
                    </button>
                    <button
                      onClick={() => setTransportType("rail")}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        transportType === "rail" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      ЖД
                    </button>
                  </div>

                  {/* Step badges */}
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {trackingSteps.map((step) => (
                      <div
                        key={step.id}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          step.active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {step.id}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {trackingSteps.map((step) => (
                      <span key={step.id} className="w-8 text-center text-[9px] text-muted-foreground">{step.label}</span>
                    ))}
                  </div>

                  {/* Events */}
                  <div className="space-y-4 border-l-2 border-border pl-5 relative">
                    {trackingEvents.map((event, i) => (
                      <div key={i} className="relative">
                        <div className={`absolute -left-[27px] w-4 h-4 rounded flex items-center justify-center text-primary-foreground ${event.color}`}>
                          <event.icon className="w-2.5 h-2.5" />
                        </div>
                        <p className="text-[10px] font-medium text-muted-foreground/70">{event.label}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                        <p className="text-sm font-medium text-foreground">{event.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Было / Стало */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Было / Стало</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-destructive/30 rounded-xl p-4 bg-destructive/5">
                      <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold">Было</span>
                      <div className="flex items-center gap-3 mt-3">
                        <PhoneCall className="w-8 h-8 text-destructive/60 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">Звонки и поиск</p>
                          <p className="text-xs text-muted-foreground">Десятки звонков на посты, неизвестность</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-success/30 rounded-xl p-4 bg-success/5">
                      <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold">Стало</span>
                      <div className="flex items-center gap-3 mt-3">
                        <Map className="w-8 h-8 text-success/60 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">Карта и таймлайн</p>
                          <p className="text-xs text-muted-foreground">Всё на одном экране в реальном времени</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Для кого */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Для кого</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Truck, label: "Перевозчику", text: "Этапы и задержки без звонков", color: "bg-primary/10", iconColor: "text-primary" },
                      { icon: Landmark, label: "Государству", text: "Прозрачность движения по маршруту", color: "bg-warning/10", iconColor: "text-warning" },
                      { icon: Search, label: "Инспектору", text: "Быстрый контекст по статусам", color: "bg-success/10", iconColor: "text-success" },
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
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
