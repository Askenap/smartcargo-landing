import { useState } from "react";
import {
  CheckCircle2, MapPin, FileCheck, Truck, Train, Ship, Plane, ChevronDown,
} from "lucide-react";
import CppModuleDetails from "@/components/modules/CppModuleDetails";
import TrackingModuleDetails from "@/components/modules/TrackingModuleDetails";

type OpenModule = "cpp" | "tracking" | null;

const ModulesSection = () => {
  const [openModule, setOpenModule] = useState<OpenModule>(null);

  const toggle = (mod: OpenModule) => {
    setOpenModule((prev) => (prev === mod ? null : mod));
  };

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
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Цифровой паспорт перевозки</h3>
            <p className="text-base text-muted-foreground mb-6">
              Один QR-код вместо папки документов — для проверок по пути.
            </p>
            <div className="space-y-2 mb-6">
              {["Один QR вместо «папки бумажек» и объяснений", "Подходит для разных проверок: граница, ЕАЭС (СНТ), перевозки по РК", "Документы подтягиваются из гос. систем — вручную не нужно ничего заполнять"].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => toggle("cpp")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Подробнее
              <ChevronDown className={`w-4 h-4 transition-transform ${openModule === "cpp" ? "rotate-180" : ""}`} />
            </button>
            {openModule === "cpp" && <CppModuleDetails onCollapse={() => setOpenModule(null)} />}
          </div>

          {/* Tracking Card */}
          <div className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Трекинг</h3>
            <p className="text-base text-muted-foreground mb-6">
              Трекинг перевозки - это экран, где видно, где сейчас находится машина/груз и что уже пройдено по дороге (очередь, пост, контроль) — всё автоматически подтягивается из систем.
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
              onClick={() => toggle("tracking")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Подробнее
              <ChevronDown className={`w-4 h-4 transition-transform ${openModule === "tracking" ? "rotate-180" : ""}`} />
            </button>
            {openModule === "tracking" && <TrackingModuleDetails onCollapse={() => setOpenModule(null)} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
