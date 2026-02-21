import { QrCode, FileX, Smartphone, Truck, Landmark, Search } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Водитель регистрируется в приложении",
    items: [
      "Вход через eGov Mobile или QazETA для иностранцев",
      "Перевозчик прикрепляет водителя к рейсу",
    ],
  },
  {
    number: 2,
    title: "Система сама собирает документы",
    items: [
      "Декларации, разрешения и отметки контроля появляются автоматически из государственных баз",
    ],
  },
  {
    number: 3,
    title: "Один QR вместо папки бумаг",
    items: [
      "На границе — проверка за секунды",
      "На дороге — инспектор сканирует и видит всё",
      "В ЕАЭС — подтверждение легальности груза",
    ],
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Как работает модуль «Цифровой паспорт перевозки»
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <ul className="space-y-1.5">
                    {step.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-1.5">
                        <span className="text-muted-foreground mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="border border-border rounded-lg px-4 py-3 inline-flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Легитимизация:</span>
              <a href="#" className="text-sm text-primary font-medium hover:underline">
                Приказ о ЦПП →
              </a>
            </div>
          </div>

          {/* QR Code Mock */}
          <div className="border border-border rounded-2xl p-8 bg-background">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-foreground">Рейс SC-2026-001</span>
            </div>
            <div className="flex items-center justify-center py-12">
              <div className="w-48 h-48 bg-secondary rounded-2xl flex items-center justify-center">
                <QrCode className="w-32 h-32 text-foreground" />
              </div>
            </div>
            <button className="w-full py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              Показать QR крупно
            </button>
          </div>
        </div>

        {/* Было / Стало */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Было / Стало</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-destructive/30 rounded-2xl p-6 bg-destructive/5 relative">
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold">Было</span>
              <div className="flex items-center gap-4 mt-4">
                <FileX className="w-12 h-12 text-destructive/60" />
                <div>
                  <p className="font-semibold text-foreground">Папка с бумагами</p>
                  <p className="text-sm text-muted-foreground">Бегунок с печатями, копии деклараций, ручной поиск статусов на каждом посту</p>
                </div>
              </div>
            </div>
            <div className="border border-success/30 rounded-2xl p-6 bg-success/5 relative">
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold">Стало</span>
              <div className="flex items-center gap-4 mt-4">
                <Smartphone className="w-12 h-12 text-success/60" />
                <div>
                  <p className="font-semibold text-foreground">QR-код в телефоне</p>
                  <p className="text-sm text-muted-foreground">Все документы и статусы рейса — в одном QR-коде на экране телефона водителя</p>
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
              <p className="text-sm text-muted-foreground">Документы и отметки контроля в одном QR — меньше простоев на границе</p>
            </div>
            <div className="border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-6 h-6 text-warning" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Государству</h4>
              <p className="text-sm text-muted-foreground">Единый цифровой пакет документов — меньше нарушений и ошибок</p>
            </div>
            <div className="border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Инспектору</h4>
              <p className="text-sm text-muted-foreground">Сканируй QR — весь пакет документов на экране за секунды</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
