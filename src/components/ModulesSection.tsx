import { CheckCircle2, MapPin, FileCheck } from "lucide-react";

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
            <h3 className="font-bold text-foreground mb-3 text-3xl">
              Цифровой паспорт перевозки (ЦПП)
            </h3>
            <p className="text-muted-foreground mb-6 font-bold text-lg">
              Единая карточка рейса: все документы и статусы перевозки
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">Замена папок бумажных документов и ручного поиска статусов</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0 text-3xl font-bold" />
                <span className="text-foreground font-bold text-xl">Один QR-код вместо папки документов - для проверок по пути следования грузоперевозки


                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">Данные подтягиваются автоматически из госсистем</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Подробнее
              </button>
              <button className="text-sm font-medium text-primary hover:underline">
                О ЦПП
              </button>
            </div>
          </div>

          {/* Tracking Card */}
          <div className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-3 text-3xl">
              Трекинг Smart Cargo
            </h3>
            <p className="text-muted-foreground mb-6 font-bold text-3xl">
              Цепочка статусов и фактического движения рейса в одном интерфейсе
            </p>

            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Источники данных:</p>
              <div className="flex flex-wrap gap-2">
                {["Кеден + СИК", "KazToll", "i-service (ЖД)", "Cargo Ruqsat"].map((tag) => <span key={tag} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {tag}
                  </span>)}
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
    </section>);
};

export default ModulesSection;