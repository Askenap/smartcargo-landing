const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-16 section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-lg text-background">Smart Cargo</span>
            </div>
            <p className="text-sm text-footer-foreground">
              Единая цифровая платформа управления грузоперевозками
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-background mb-4">Навигация</h4>
            <ul className="space-y-2">
              {["О платформе", "Модули", "Как работает", "Трекинг", "Скоро будет", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-footer-foreground hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-background mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@smartcargo.kz" className="text-footer-foreground hover:text-background transition-colors">
                  support@smartcargo.kz
                </a>
              </li>
              <li className="text-footer-foreground">+7 (7172) 00-00-00</li>
              <li className="text-footer-foreground">Республика Казахстан</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-8 text-center">
          <p className="text-sm text-footer-foreground">
            © 2026 Smart Cargo. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
