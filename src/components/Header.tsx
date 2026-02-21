const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container section-padding flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SC</span>
          </div>
          <span className="font-bold text-lg text-foreground">Smart Cargo</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#modules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Модули</a>
          <a href="#coming-soon" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Скоро</a>
          <a href="#contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
        </nav>
        <a
          href="https://app.smartcargo.kz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Вход
        </a>
      </div>
    </header>
  );
};

export default Header;
