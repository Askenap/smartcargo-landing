import { useState } from "react";
import {
  CheckCircle2, MapPin, FileCheck, Truck, Train, Ship, Plane, ChevronDown, Smartphone,
} from "lucide-react";
import CppModuleDetails from "@/components/modules/CppModuleDetails";
import TrackingModuleDetails from "@/components/modules/TrackingModuleDetails";

const ModulesSection = () => {
  const [cppOpen, setCppOpen] = useState(true);
  const [trackingOpen, setTrackingOpen] = useState(true);

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
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Цифровой паспорт перевозки</h3>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: 'hsl(48 96% 89%)', color: 'hsl(32 80% 30%)' }}>
              🚀 Пилотный запуск — 15 марта 2026
            </span>
            <p className="text-base font-semibold text-muted-foreground mb-6">
              Один QR-код вместо папки документов — для проверок по пути следования грузоперевозки.
            </p>
            <div className="space-y-2 mb-4">
              {["Один QR вместо «папки бумажек» и объяснений", "Подходит для разных проверок: государственная граница, ЕАЭС (СНТ), перевозки по РК", "Документы подтягиваются из государственных систем — вручную не нужно ничего заполнять"].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>
            <div className="mb-6 p-3 rounded-xl bg-secondary/50 border border-border">
              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                Мобильное приложение для водителя
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/></svg>
                  Google Play
                </a>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-medium cursor-default">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  App Store — скоро
                </span>
              </div>
            </div>
            <button
              onClick={() => setCppOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {cppOpen ? "Свернуть" : "Подробнее"}
              <ChevronDown className={`w-4 h-4 transition-transform ${cppOpen ? "rotate-180" : ""}`} />
            </button>
            {cppOpen && <CppModuleDetails onCollapse={() => setCppOpen(false)} />}
          </div>

          {/* Tracking Card */}
          <div className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Трекинг</h3>
            <p className="text-base font-semibold text-muted-foreground mb-6">
              Трекинг перевозки - это экран, на котором видно, где сейчас находится машина/груз и что уже пройдено по дороге (таможенный контроль, камера видеонаблюдения, электронная очередь) - всё автоматически подтягивается из систем.
            </p>
            <div className="mb-6">
              <p className="text-xs text-muted-foreground mb-2">Виды транспорта:</p>
              <div className="flex flex-wrap gap-2">
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
              onClick={() => setTrackingOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {trackingOpen ? "Свернуть" : "Подробнее"}
              <ChevronDown className={`w-4 h-4 transition-transform ${trackingOpen ? "rotate-180" : ""}`} />
            </button>
            {trackingOpen && <TrackingModuleDetails onCollapse={() => setTrackingOpen(false)} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
