import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-merriweather font-bold mb-4">
              Отец и Сын
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Путешествия, которые укрепляют связь между отцом и сыном, 
              создают незабываемые воспоминания и способствуют личностному росту.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="space-y-2">
              <h4 className="font-semibold">Подписка на новости</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Ваш email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="bg-accent hover:bg-accent/90">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Главная</a></li>
              <li><a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">О проекте</a></li>
              <li><a href="/travels" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Путешествия</a></li>
              <li><a href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Блог</a></li>
              <li><a href="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Отзывы</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+7 (999) 123-45-67</li>
              <li>info@father-son.ru</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-primary-foreground transition-colors">Telegram</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">VK</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">YouTube</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Проект "Отец и Сын". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;