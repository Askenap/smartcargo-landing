import { CheckCircle2, MapPin, FileCheck, Truck, Train, Ship, Plane } from "lucide-react";

const ModulesSection = () => {
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
            <h3 className="text-xl font-bold text-foreground mb-3">
              Цифровой паспорт перевозки
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Один QR-код вместо папки бумаг. Все документы и статусы рейса — в телефоне водителя.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">Больше никаких бумаг — всё в телефоне</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">Один QR на таможне вместо папки с печатями</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">Декларации, СНТ, ТТН — сами появляются в профиле рейса</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Подробнее
              </button>
              <button className="text-sm font-medium text-primary hover:underline">
                Как это работает
              </button>
            </div>
          </div>

          {/* Tracking Card */}
          <div className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Трекинг Smart Cargo
            </h3>
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

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Подробнее
              </button>
              <button className="text-sm font-medium text-primary hover:underline">
                О трекинге
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
