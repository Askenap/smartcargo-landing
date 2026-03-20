import { Check, Shield, FileText, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex items-center justify-center py-8 md:py-10 overflow-visible">
      {/* Background blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          top: "50%", left: "30%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 200, height: 200,
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          top: "60%", right: "5%",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      />

      {/* Floating icons */}
      <Shield
        className="absolute text-primary pointer-events-none"
        style={{
          width: 28, height: 28, opacity: visible ? 0.12 : 0,
          top: "8%", left: "8%", zIndex: 1,
          animation: visible ? "mockup-float 6s ease-in-out infinite" : "none",
          transition: "opacity 0.5s 0.7s",
        }}
      />
      <CheckCircle
        className="absolute text-success pointer-events-none"
        style={{
          width: 22, height: 22, opacity: visible ? 0.12 : 0,
          top: "15%", right: "12%", zIndex: 1,
          animation: visible ? "mockup-float 7s ease-in-out -2s infinite" : "none",
          transition: "opacity 0.5s 0.8s",
        }}
      />
      <FileText
        className="absolute text-primary pointer-events-none"
        style={{
          width: 24, height: 24, opacity: visible ? 0.10 : 0,
          bottom: "10%", left: "15%", zIndex: 1,
          animation: visible ? "mockup-float 5s ease-in-out -4s infinite" : "none",
          transition: "opacity 0.5s 0.9s",
        }}
      />

      {/* Main composition */}
      <div className="relative flex items-center gap-4 md:gap-6 z-[2]">
        {/* iPhone */}
        <div
          style={{ perspective: 1200 }}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div
            className="relative shrink-0 group"
            style={{
              width: 240,
              transformStyle: "preserve-3d",
              transform: "rotateY(-12deg) rotateX(4deg) rotateZ(-2deg)",
              transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotateY(-2deg) rotateX(1deg) rotateZ(0deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotateY(-12deg) rotateX(4deg) rotateZ(-2deg)";
            }}
          >
            {/* Phone frame */}
            <div
              className="rounded-[36px] p-[6px]"
              style={{
                background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #111 100%)",
                boxShadow: [
                  "0 2px 4px rgba(0,0,0,0.02)",
                  "0 4px 8px rgba(0,0,0,0.04)",
                  "0 8px 16px rgba(0,0,0,0.06)",
                  "0 16px 32px rgba(0,0,0,0.08)",
                  "0 32px 64px rgba(0,0,0,0.12)",
                  "0 50px 100px rgba(37,99,235,0.08)",
                ].join(", "),
              }}
            >
              {/* Side highlight */}
              <div
                className="absolute top-6 -left-[1px] w-[2px] h-16 rounded-full pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.2), transparent)" }}
              />
              <div
                className="absolute top-20 -right-[1px] w-[2px] h-10 rounded-full pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)" }}
              />

              {/* Notch */}
              <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-[#1a1a1a] rounded-b-2xl z-10">
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#2a2a2a]" />
              </div>

              {/* Screen */}
              <div className="relative rounded-[30px] overflow-hidden bg-[#F8F9FB]" style={{ aspectRatio: "9/19.5" }}>
                {/* Glare overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none rounded-[30px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 25%, transparent 45%, transparent 100%)",
                  }}
                />

                {/* Header */}
                <div
                  className="relative pt-8 pb-3 px-4 text-center"
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
                          {i < statuses.length - 1 && <div className="w-[2px] h-3 bg-[#10B981]" />}
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
        </div>

        {/* Animated dashed connector */}
        <div
          className={`hidden md:block shrink-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
            <path
              d="M0 20 Q35 0 70 20"
              stroke="#2563EB"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeOpacity="0.3"
              fill="none"
              style={{ animation: "mockup-dash 1.5s linear infinite" }}
            />
            <polygon points="66,17 70,20 66,23" fill="#2563EB" fillOpacity="0.3" />
          </svg>
        </div>

        {/* QR code */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          style={{
            perspective: 800,
            transitionDelay: "0.2s",
          }}
        >
          <div
            className="flex flex-col items-center"
            style={{
              transform: "rotateY(6deg) rotateX(-2deg)",
              transformStyle: "preserve-3d",
              transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotateY(1deg) rotateX(0deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotateY(6deg) rotateX(-2deg)";
            }}
          >
            <div
              className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-2xl bg-white p-3 flex items-center justify-center"
              style={{
                boxShadow: [
                  "0 4px 8px rgba(0,0,0,0.04)",
                  "0 12px 32px rgba(0,0,0,0.08)",
                  "0 30px 60px rgba(37,99,235,0.06)",
                ].join(", "),
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
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
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes mockup-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes mockup-dash {
          to { stroke-dashoffset: -16; }
        }
      `}</style>
    </div>
  );
};

export default IPhoneMockup;
