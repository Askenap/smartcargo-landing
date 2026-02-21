import { Handshake, Headphones } from "lucide-react";
import { useState } from "react";

const ContactsSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  return (
    <section id="contacts" className="py-20 section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Остались вопросы?
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Оставьте контакты и мы с вами свяжемся
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Партнёрам и интеграциям</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Обсудим API-интеграцию, совместные проекты и подключение к платформе
                </p>
                <a href="mailto:partners@smartcargo.kz" className="text-sm text-primary hover:underline">
                  partners@smartcargo.kz
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Техническая поддержка</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Вопросы по работе платформы и личному кабинету
                </p>
                <a href="mailto:support@smartcargo.kz" className="text-sm text-primary hover:underline block">
                  support@smartcargo.kz
                </a>
                <span className="text-sm text-muted-foreground">+7 (727) 123-45-67</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Имя</label>
              <input
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Компания</label>
              <input
                type="text"
                placeholder="Название компании"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Сообщение</label>
              <textarea
                placeholder="Ваше сообщение..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
