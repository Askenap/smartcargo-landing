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
    <div ref={wrapperRef} className="relative flex items-center justify-center py-8 md:py-12 overflow-visible">
      {/* Background blobs */}
      <div className="absolute pointer-events-none" style={{ width: 450, height: 450, background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", top: "50%", left: "30%", transform: "translate(-50%, -50%)" }} />
      <div className="absolute pointer-events-none" style={{ width: 220, height: 220, background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", top: "60%", right: "5%", transform: "translateY(-50%)" }} />

      {/* Floating icons */}
      <Shield className="absolute text-primary pointer-events-none" style={{ width: 28, height: 28, opacity: visible ? 0.12 : 0, top: "5%", left: "5%", animation: visible ? "mockup-float 6s ease-in-out infinite" : "none", transition: "opacity 0.5s 0.7s" }} />
      <CheckCircle className="absolute text-success pointer-events-none" style={{ width: 22, height: 22, opacity: visible ? 0.12 : 0, top: "12%", right: "10%", animation: visible ? "mockup-float 7s ease-in-out -2s infinite" : "none", transition: "opacity 0.5s 0.8s" }} />
      <FileText className="absolute text-primary pointer-events-none" style={{ width: 24, height: 24, opacity: visible ? 0.10 : 0, bottom: "8%", left: "12%", animation: visible ? "mockup-float 5s ease-in-out -4s infinite" : "none", transition: "opacity 0.5s 0.9s" }} />

      {/* Main composition */}
      <div className="relative flex items-center gap-6 md:gap-10 z-[2]">

        {/* iPhone 17 Pro with 3D depth */}
        <div
          style={{ perspective: 1200 }}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div
            className="relative shrink-0"
            style={{
              width: 300,
              transformStyle: "preserve-3d",
              transform: "rotateY(-12deg) rotateX(4deg) rotateZ(-2deg)",
              transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "rotateY(-2deg) rotateX(1deg) rotateZ(0deg)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "rotateY(-12deg) rotateX(4deg) rotateZ(-2deg)"; }}
          >
            {/* 3D side edges (visible due to rotation) */}
            {/* Right edge */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: 8, right: -5, width: 6, height: "calc(100% - 16px)",
                borderRadius: "0 4px 4px 0",
                background: "linear-gradient(180deg, #3a3a3a 0%, #222 40%, #1a1a1a 100%)",
                transform: "rotateY(90deg) translateZ(0px)",
                transformOrigin: "left center",
                boxShadow: "2px 0 8px rgba(0,0,0,0.3)",
              }}
            />
            {/* Bottom edge */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: -4, left: 12, right: 12, height: 5,
                borderRadius: "0 0 4px 4px",
                background: "linear-gradient(90deg, #2a2a2a, #1a1a1a, #2a2a2a)",
                transform: "rotateX(-90deg)",
                transformOrigin: "top center",
              }}
            />

            {/* Titanium buttons — left side */}
            <div className="absolute pointer-events-none" style={{ top: 100, left: -3, width: 3, height: 28, borderRadius: "3px 0 0 3px", background: "linear-gradient(180deg, #555, #3a3a3a, #555)" }} />
            <div className="absolute pointer-events-none" style={{ top: 145, left: -3, width: 3, height: 50, borderRadius: "3px 0 0 3px", background: "linear-gradient(180deg, #555, #3a3a3a, #555)" }} />
            <div className="absolute pointer-events-none" style={{ top: 205, left: -3, width: 3, height: 50, borderRadius: "3px 0 0 3px", background: "linear-gradient(180deg, #555, #3a3a3a, #555)" }} />
            {/* Right side — power button */}
            <div className="absolute pointer-events-none" style={{ top: 160, right: -3, width: 3, height: 60, borderRadius: "0 3px 3px 0", background: "linear-gradient(180deg, #555, #3a3a3a, #555)" }} />

            {/* Phone frame — Natural Titanium finish */}
            <div
              className="rounded-[44px] p-[5px] relative"
              style={{
                background: "linear-gradient(145deg, #4a4a4a 0%, #2a2a2a 20%, #1a1a1a 50%, #222 80%, #3a3a3a 100%)",
                boxShadow: [
                  "0 2px 4px rgba(0,0,0,0.03)",
                  "0 4px 8px rgba(0,0,0,0.05)",
                  "0 8px 16px rgba(0,0,0,0.07)",
                  "0 16px 32px rgba(0,0,0,0.09)",
                  "0 32px 64px rgba(0,0,0,0.14)",
                  "0 50px 100px rgba(37,99,235,0.10)",
                  "inset 0 1px 0 rgba(255,255,255,0.08)",
                  "inset 0 -1px 0 rgba(0,0,0,0.2)",
                ].join(", "),
              }}
            >
              {/* Edge highlight streaks */}
              <div className="absolute top-8 -left-[1px] w-[2px] h-20 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.25), transparent)" }} />
              <div className="absolute top-24 -right-[1px] w-[1px] h-14 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
              {/* Top chamfer highlight */}
              <div className="absolute top-[1px] left-[50px] right-[50px] h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

              {/* Dynamic Island */}
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-10">
                <div className="w-[90px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a2e] ring-1 ring-[#2a2a3a]" />
                </div>
              </div>

              {/* Screen */}
              <div className="relative rounded-[39px] overflow-hidden bg-[#F8F9FB]" style={{ aspectRatio: "9/19.5" }}>
                {/* Glare overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[39px]" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 20%, transparent 40%, transparent 100%)" }} />

                {/* Status bar */}
                <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[8px] font-semibold text-white relative z-[5]" style={{ background: "linear-gradient(135deg, #2563EB, #1e40af)" }}>
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="white"><rect x="0" y="3" width="2" height="5" rx="0.5" /><rect x="3" y="2" width="2" height="6" rx="0.5" /><rect x="6" y="1" width="2" height="7" rx="0.5" /><rect x="9" y="0" width="2" height="8" rx="0.5" /></svg>
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none"><rect x="0.5" y="0.5" width="13" height="8" rx="1.5" stroke="white" strokeWidth="1" /><rect x="14" y="2.5" width="1.5" height="4" rx="0.5" fill="white" /><rect x="1.5" y="1.5" width="11" height="6" rx="1" fill="white" /></svg>
                  </span>
                </div>

                {/* Header */}
                <div className="px-5 pt-2 pb-4 text-center" style={{ background: "linear-gradient(135deg, #2563EB, #1e40af)" }}>
                  <p className="text-[13px] font-bold text-white leading-tight">Проверка перевозки</p>
                  <p className="text-[10px] text-white/70 mt-0.5">Таможенный контроль</p>
                </div>

                {/* Vehicle card */}
                <div className="mx-4 -mt-2 mb-3 rounded-xl bg-white p-3 relative z-[1]" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#2563EB]">
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                      </svg>
                    </div>
                    <span className="text-[12px] font-bold text-[#111827] tracking-wide">563APK13</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[9px] font-semibold text-[#10B981]">
                    <Check className="w-3 h-3" /> Проверка пройдена
                  </span>
                </div>

                {/* Timeline */}
                <div className="px-4 pb-3">
                  <p className="text-[9px] font-bold text-[#6B7280] mb-2 uppercase tracking-widest">Статусы проверок</p>
                  <div>
                    {statuses.map((s, i) => (
                      <div key={s} className="flex items-start gap-2.5">
                        <div className="flex flex-col items-center">
                          <div className="w-[18px] h-[18px] rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                          </div>
                          {i < statuses.length - 1 && <div className="w-[2px] h-[14px] bg-[#10B981]/50" />}
                        </div>
                        <span className="text-[10px] text-[#374151] leading-tight pt-[2px] font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom button */}
                <div className="px-4 pb-4 mt-1">
                  <div className="w-full py-2.5 rounded-xl text-center text-[10px] font-semibold text-white" style={{ background: "linear-gradient(135deg, #2563EB, #1e40af)" }}>
                    Вернуться в главное
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated dashed connector */}
        <div className={`hidden md:block shrink-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.5s" }}>
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
            <path d="M0 20 Q40 0 80 20" stroke="#2563EB" strokeWidth="2" strokeDasharray="8 8" strokeOpacity="0.3" fill="none" style={{ animation: "mockup-dash 1.5s linear infinite" }} />
            <polygon points="76,17 80,20 76,23" fill="#2563EB" fillOpacity="0.3" />
          </svg>
        </div>

        {/* QR code */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          style={{ perspective: 800, transitionDelay: "0.2s" }}
        >
          <div
            className="flex flex-col items-center"
            style={{ transform: "rotateY(6deg) rotateX(-2deg)", transformStyle: "preserve-3d", transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "rotateY(1deg) rotateX(0deg)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "rotateY(6deg) rotateX(-2deg)"; }}
          >
            <div
              className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-2xl bg-white p-3.5 flex items-center justify-center"
              style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.08), 0 30px 60px rgba(37,99,235,0.06)" }}
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
                {[[35,5],[40,5],[45,10],[50,5],[55,10],[60,5],[65,15],[35,15],[45,20],[55,20],[60,15],[5,35],[10,40],[15,45],[20,35],[25,40],[5,50],[15,55],[25,50],[20,60],[35,35],[65,35],[35,65],[65,65],[40,40],[60,40],[40,60],[60,60],[75,40],[80,45],[85,50],[75,55],[80,60],[85,65],[75,75],[80,80],[85,75],[90,85],[85,90],[35,75],[40,80],[45,75],[50,85],[55,80],[60,75],[65,80],[35,90],[45,90],[55,90],[65,90],[90,35],[90,45],[90,55]].map(([x, y], i) => (
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
