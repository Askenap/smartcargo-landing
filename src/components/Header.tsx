import { Bell } from "lucide-react";

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
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
          <a href="#tracking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Трекинг</a>
          <a href="#contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-medium">S</span>
          </div>
          <span className="text-sm text-muted-foreground hidden md:inline">🇷🇺 Рус</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
