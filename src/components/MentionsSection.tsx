import { Quote, ExternalLink } from "lucide-react";

const presidentialQuotes = [
  {
    label: "Послание Президента народу Казахстана",
    date: "8 сентября 2025",
    text: "Поручаю ускорить внедрение многофункциональной цифровой платформы управления перевозками с применением искусственного интеллекта. До конца октября требуется запустить единую цифровую систему таможенных и логистических услуг Smart Cargo.",
    source: "akorda.kz",
    sourceUrl: "https://akorda.kz",
  },
  {
    label: "Расширенное заседание Правительства",
    date: "10 февраля 2026",
    text: "В Послании мною поручалось внедрить цифровую платформу управления перевозками Smart Cargo и систему таможенного оформления Keden. Они функционируют, но в пилотном режиме. Надо ускорить их полноценный запуск с интеграцией всех ведомственных информсистем.",
    source: "elordainfo.kz",
    sourceUrl: "https://elordainfo.kz",
  },
];

const mediaCards = [
  {
    name: "ТАСС",
    date: "31 декабря 2025",
    title: "Токаев предложил создать в ЕАЭС систему управления грузопотоками",
    description: "Президент представил Smart Cargo как пилотный проект Казахстана, открытый для интеграции с партнёрами по ЕАЭС",
    url: "https://tass.ru/ekonomika/26061989",
  },
  {
    name: "Astana TV",
    date: "30 декабря 2025",
    title: "Бизнес получит единый цифровой доступ к трекингу грузов и госуслугам",
    description: "Платформа Smart Cargo объединяет таможенные, логистические и коммерческие сервисы на одной системе",
    url: "https://astanatv.kz/ru/news/159442/",
  },
  {
    name: "Bizmedia.kz",
    date: "10 февраля 2026",
    title: "Ускорить полный запуск Smart Cargo и системы Keden должен Кабмин",
    description: "Президент поручил правительству ускорить интеграцию всех ведомственных информсистем",
    url: "https://bizmedia.kz/2026-02-10-uskorit-polnyj-zapusk-czifrovoj-platformy-smart-cargo-i-sistemy-keden-dolzhen-kabmin/",
  },
  {
    name: "TAdviser",
    date: "2026",
    title: "Дорожная карта цифровой трансформации транспортной отрасли Казахстана",
    description: "Smart Cargo включён в дорожную карту как ключевой элемент цифровизации логистики",
    url: "https://www.tadviser.ru/",
  },
];

const MentionsSection = () => {
  return (
    <section className="py-24 md:py-28 section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground mb-4">
            Доверие
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            О нас говорят
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Smart Cargo упоминается на высшем уровне и в ведущих СМИ Казахстана
          </p>
        </div>

        {/* Presidential block */}
        <div
          className="rounded-2xl p-8 md:p-10 mb-8"
          style={{
            background: "linear-gradient(135deg, #1a1f36 0%, #2d3561 50%, #1e40af 100%)",
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(212, 168, 67, 0.15)" }}
            >
              <Quote className="w-6 h-6" style={{ color: "#D4A843" }} />
            </div>
            <h3 className="text-xl font-bold text-white">
              Упоминания Президента Республики Казахстан
            </h3>
          </div>

          <div className="space-y-0">
            {presidentialQuotes.map((q, i) => (
              <div key={i}>
                {i > 0 && (
                  <div
                    className="my-8"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
                  />
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(212, 168, 67, 0.18)",
                        color: "#D4A843",
                      }}
                    >
                      {q.label}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {q.date}
                    </span>
                  </div>
                  <blockquote
                    className="italic leading-relaxed mb-4"
                    style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.125rem" }}
                  >
                    «{q.text}»
                  </blockquote>
                  <p style={{ color: "rgba(255,255,255,0.65)" }} className="text-sm mb-1">
                    — Касым-Жомарт Токаев, Президент Республики Казахстан
                  </p>
                  <a
                    href={q.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs inline-flex items-center gap-1 hover:underline"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {q.source}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mediaCards.map((card) => (
            <div
              key={card.name}
              className="rounded-2xl p-5 bg-card flex flex-col transition-shadow"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "var(--card-shadow)")
              }
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-foreground">{card.name}</span>
                <span className="text-xs text-muted-foreground">{card.date}</span>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                {card.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                {card.description}
              </p>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                Читать <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentionsSection;
