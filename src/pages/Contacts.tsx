import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Готовы обсудить участие в программе или у вас есть вопросы? 
              Мы всегда рады помочь и ответить на все интересующие вас темы.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-merriweather font-bold text-primary mb-8">
                  Контактная информация
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Телефон</h3>
                      <p className="text-foreground">+7 (999) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">
                        Звонки принимаем с 9:00 до 21:00
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-foreground">info@father-son.ru</p>
                      <p className="text-sm text-muted-foreground">
                        Отвечаем в течение 2 часов
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Адрес офиса</h3>
                      <p className="text-foreground">г. Москва, ул. Природная, 15</p>
                      <p className="text-sm text-muted-foreground">
                        БЦ "Экспедиция", офис 420
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Режим работы</h3>
                      <p className="text-foreground">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-foreground">Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-primary mb-4">Мы в соцсетях</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-semibold">Telegram</span>
                    </a>
                    <a href="#" className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-semibold">VK</span>
                    </a>
                    <a href="#" className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-semibold">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">
                    Задать вопрос
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Ваше имя *
                      </label>
                      <Input placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Имя и возраст сына
                      </label>
                      <Input placeholder="Например: Максим, 14 лет" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Телефон *
                      </label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email
                      </label>
                      <Input placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Интересующая программа
                    </label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Выберите программу</option>
                      <option value="mountains">Горы Кавказа: Путь к вершине</option>
                      <option value="rafting">Сплав по реке Белая</option>
                      <option value="survival">Выживание в дикой природе</option>
                      <option value="consultation">Консультация по выбору</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Ваш вопрос или комментарий
                    </label>
                    <Textarea 
                      placeholder="Расскажите, что вас интересует, какие есть вопросы или особенности, которые нужно учесть..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить сообщение
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    * Обязательные поля. Отправляя форму, вы соглашаетесь с обработкой персональных данных.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Как нас найти
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold">
                    Интерактивная карта
                  </p>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Природная, 15, БЦ "Экспедиция"
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center text-muted-foreground">
                <p>Ближайшее метро: Сокольники (5 минут пешком)</p>
                <p>Парковка: Бесплатная на территории БЦ</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;