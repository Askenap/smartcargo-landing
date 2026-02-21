import { QrCode } from "lucide-react";

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
      </div>
    </section>
  );
};

export default HowItWorksSection;
