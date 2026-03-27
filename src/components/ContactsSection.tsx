import { Handshake, Headphones } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 md:py-28 section-padding bg-section-alt">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Остались вопросы?
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Свяжитесь с нами удобным способом
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
};

export default ContactsSection;
