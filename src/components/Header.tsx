import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-merriweather font-bold text-primary">
              Отец и Сын
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              О проекте
            </a>
            <a href="/travels" className="text-foreground hover:text-primary transition-colors">
              Путешествия
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">
              Блог
            </a>
            <a href="/reviews" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="/contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Выбрать путешествие
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">
                О проекте
              </a>
              <a href="/travels" className="text-foreground hover:text-primary transition-colors">
                Путешествия
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Блог
              </a>
              <a href="/reviews" className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                Выбрать путешествие
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;