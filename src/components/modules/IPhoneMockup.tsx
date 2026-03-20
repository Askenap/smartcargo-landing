import { FileText, CheckCircle, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import handPhoneMockup from "@/assets/hand-phone-mockup.png";

const features = [
  {
    icon: FileText,
    title: "Все документы в одном коде",
    desc: "Декларации, СНТ, ЭСФ, ТТН — всё привязано к QR",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Статусы проверок",
    desc: "Обновляются автоматически в реальном времени",
    color: "text-success",
  },
  {
    icon: Lock,
    title: "Данные верифицированы",
    desc: "Подделка исключена — QR ссылается на официальные записи",
    color: "text-primary",
  },
];

const IPhoneMockup = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4"
    >
      {/* Left: QR + features */}
      <div
        className={`flex flex-col items-center sm:items-start gap-4 shrink-0 transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        {/* QR Card */}
        <div
          className="inline-flex items-center justify-center p-4 rounded-2xl bg-white"
          style={{
            boxShadow: "0 4px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-[100px] h-[100px]">
            <rect x="2" y="2" width="28" height="28" rx="3" fill="#111827" />
            <rect x="6" y="6" width="20" height="20" rx="2" fill="white" />
            <rect x="10" y="10" width="12" height="12" rx="1" fill="#111827" />
            <rect x="70" y="2" width="28" height="28" rx="3" fill="#111827" />
            <rect x="74" y="6" width="20" height="20" rx="2" fill="white" />
            <rect x="78" y="10" width="12" height="12" rx="1" fill="#111827" />
            <rect x="2" y="70" width="28" height="28" rx="3" fill="#111827" />
            <rect x="6" y="74" width="20" height="20" rx="2" fill="white" />
            <rect x="10" y="78" width="12" height="12" rx="1" fill="#111827" />
            <circle cx="50" cy="50" r="12" fill="#2563EB" />
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">S</text>
            {[[35,5],[40,5],[45,10],[50,5],[55,10],[60,5],[65,15],[35,15],[45,20],[55,20],[60,15],[5,35],[10,40],[15,45],[20,35],[25,40],[5,50],[15,55],[25,50],[20,60],[35,35],[65,35],[35,65],[65,65],[40,40],[60,40],[40,60],[60,60],[75,40],[80,45],[85,50],[75,55],[80,60],[85,65],[75,75],[80,80],[85,75],[90,85],[85,90],[35,75],[40,80],[45,75],[50,85],[55,80],[60,75],[65,80],[35,90],[45,90],[55,90],[65,90],[90,35],[90,45],[90,55]].map(([x,y],i)=>(
              <rect key={i} x={x} y={y} width="4" height="4" fill="#111827" rx="0.5"/>
            ))}
          </svg>
        </div>

        <p className="text-xs font-semibold text-muted-foreground text-center sm:text-left">
          Один QR = все документы
        </p>

        {/* Features */}
        <div className="flex flex-col gap-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <f.icon className={`w-4 h-4 ${f.color}`} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-foreground leading-snug">{f.title}</p>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashed connector — sm+ only */}
      <div
        className={`hidden sm:block shrink-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "0.5s" }}
      >
        <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
          <path d="M0 15 Q20 0 40 15" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.25" fill="none" style={{ animation: "mockup-dash 1.5s linear infinite" }} />
          <polygon points="36,12 40,15 36,18" fill="#2563EB" fillOpacity="0.25" />
        </svg>
      </div>

      {/* Right: hand holding phone */}
      <div
        className={`shrink-0 transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: "0.2s" }}
      >
        <img
          src={handPhoneMockup}
          alt="Рука держит смартфон с интерфейсом Smart Cargo"
          className="max-h-[300px] sm:max-h-[400px] w-auto object-contain select-none"
          draggable={false}
        />
      </div>

      <style>{`
        @keyframes mockup-dash {
          to { stroke-dashoffset: -12; }
        }
      `}</style>
    </div>
  );
};

export default IPhoneMockup;
