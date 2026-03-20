import { Check } from "lucide-react";

const statuses = [
  "Предварительное информирование",
  "Пограничный контроль",
  "Фитосанитарный контроль",
  "Ветеринарный контроль",
  "Весогабаритный контроль",
  "Рентген-контроль",
  "Транзитная декларация",
  "Оплата СВХ",
];

const IPhoneMockup = () => {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-8 py-4">
      {/* iPhone */}
      <div
        className="relative shrink-0"
        style={{
          width: 240,
          transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg) rotateX(2deg)";
        }}
      >
        {/* Phone frame */}
        <div
          className="rounded-[36px] p-[6px]"
          style={{
            background: "#1a1a1a",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Notch */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-[#1a1a1a] rounded-b-2xl z-10" />

          {/* Screen */}
          <div className="rounded-[30px] overflow-hidden bg-[#F8F9FB]" style={{ aspectRatio: "9/19.5" }}>
            {/* Header */}
            <div
              className="pt-8 pb-3 px-4 text-center"
              style={{ background: "linear-gradient(135deg, #2563EB, #1e40af)" }}
            >
              <p className="text-[10px] font-bold text-white leading-tight">Проверка перевозки</p>
              <p className="text-[7px] text-white/70">Таможенный контроль</p>
            </div>

            {/* Vehicle card */}
            <div className="mx-3 -mt-1 mb-2 rounded-lg bg-white p-2.5" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded bg-[#2563EB]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#2563EB]">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <span className="text-[9px] font-bold text-[#111827]">563APK13</span>
              </div>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#10B981]/10 text-[6px] font-semibold text-[#10B981]">
                <Check className="w-2 h-2" /> Проверка пройдена
              </span>
            </div>

            {/* Timeline */}
            <div className="px-3 pb-3">
              <p className="text-[7px] font-bold text-[#374151] mb-1.5 uppercase tracking-wider">Статусы проверок</p>
              <div className="space-y-0">
                {statuses.map((s, i) => (
                  <div key={s} className="flex items-start gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                        <Check className="w-2 h-2 text-white" strokeWidth={3} />
                      </div>
                      {i < statuses.length - 1 && (
                        <div className="w-[2px] h-3 bg-[#10B981]" />
                      )}
                    </div>
                    <span className="text-[7px] text-[#374151] leading-tight pt-0.5">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom button */}
            <div className="px-3 pb-3 mt-auto">
              <div
                className="w-full py-1.5 rounded-lg text-center text-[7px] font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #2563EB, #1e40af)" }}
              >
                Вернуться в главное
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashed connector line */}
      <div className="hidden md:flex flex-col items-center gap-1 shrink-0">
        <svg width="60" height="2" className="overflow-visible">
          <line x1="0" y1="1" x2="60" y2="1" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.4" />
          <polygon points="56,0 60,1 56,2" fill="#2563EB" fillOpacity="0.4" />
        </svg>
      </div>

      {/* QR code */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-xl bg-white p-2 flex items-center justify-center"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          {/* Decorative QR pattern */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* QR corners */}
            <rect x="2" y="2" width="28" height="28" rx="3" fill="#111827" />
            <rect x="6" y="6" width="20" height="20" rx="2" fill="white" />
            <rect x="10" y="10" width="12" height="12" rx="1" fill="#111827" />

            <rect x="70" y="2" width="28" height="28" rx="3" fill="#111827" />
            <rect x="74" y="6" width="20" height="20" rx="2" fill="white" />
            <rect x="78" y="10" width="12" height="12" rx="1" fill="#111827" />

            <rect x="2" y="70" width="28" height="28" rx="3" fill="#111827" />
            <rect x="6" y="74" width="20" height="20" rx="2" fill="white" />
            <rect x="10" y="78" width="12" height="12" rx="1" fill="#111827" />

            {/* Center logo circle */}
            <circle cx="50" cy="50" r="12" fill="#2563EB" />
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">S</text>

            {/* Random QR dots */}
            {[
              [35,5],[40,5],[45,10],[50,5],[55,10],[60,5],[65,15],
              [35,15],[45,20],[55,20],[60,15],
              [5,35],[10,40],[15,45],[20,35],[25,40],
              [5,50],[15,55],[25,50],[20,60],
              [35,35],[65,35],[35,65],[65,65],
              [40,40],[60,40],[40,60],[60,60],
              [75,40],[80,45],[85,50],[75,55],[80,60],[85,65],
              [75,75],[80,80],[85,75],[90,85],[85,90],
              [35,75],[40,80],[45,75],[50,85],[55,80],[60,75],[65,80],
              [35,90],[45,90],[55,90],[65,90],
              [90,35],[90,45],[90,55],
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="4" height="4" fill="#111827" rx="0.5" />
            ))}
          </svg>
        </div>
        <p className="text-xs font-medium text-muted-foreground mt-3 text-center leading-snug">
          Один QR = все документы
        </p>
      </div>
    </div>
  );
};

export default IPhoneMockup;
