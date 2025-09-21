import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-image.jpg";

const travelPrograms = [
  {
    id: 1,
    title: "Горы Кавказа",
    duration: "7 дней",
    description: "Треккинг в горах с восхождением на вершину. Испытайте себя и научитесь поддерживать друг друга.",
    icon: "🏔️"
  },
  {
    id: 2,
    title: "Сплав по реке",
    duration: "5 дней", 
    description: "Водные приключения на рафтах с рыбалкой и вечерними посиделками у костра.",
    icon: "🚣"
  },
  {
    id: 3,
    title: "Выживание",
    duration: "4 дня",
    description: "Интенсивный курс выживания в дикой природе. Откройте в себе и сыне скрытые ресурсы.",
    icon: "🔥"
  },
  {
    id: 4,
    title: "Конные походы",
    duration: "6 дней",
    description: "Путешествие верхом через живописные долины. Научитесь доверять друг другу и лошадям.",
    icon: "🐎"
  },
  {
    id: 5,
    title: "Морское приключение",
    duration: "8 дней",
    description: "Парусный поход с изучением навигации и морского дела. Покорите морскую стихию вместе.",
    icon: "⛵"
  },
  {
    id: 6,
    title: "Зимний лагерь",
    duration: "5 дней",
    description: "Выживание в зимних условиях, строительство иглу и разведение костра в снегу.",
    icon: "❄️"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-merriweather font-bold mb-6">
              Проект "Отец и Сын"
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Путешествия, которые меняют жизнь
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              Выбрать путешествие
            </Button>
          </div>
        </section>

        {/* For Whom Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-12 text-center">
                Для кого этот проект?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <span className="text-2xl">💼</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          Занятые отцы
                        </h3>
                        <p className="text-foreground">
                          Вы много работаете и понимаете, что упускаете важные моменты 
                          в жизни сына. Хотите наладить близкие отношения.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          Потерянная связь
                        </h3>
                        <p className="text-foreground">
                          Сын подрос, стал более замкнутым. Разговоры сводятся к "как дела в школе". 
                          Вы чувствуете, что теряете контакт.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          Желание изменений
                        </h3>
                        <p className="text-foreground">
                          Готовы инвестировать время и силы в отношения с сыном. 
                          Хотите стать для него не только отцом, но и другом.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-8">
                  <blockquote className="text-xl italic text-primary mb-6">
                    "Дети растут быстро. Если не успеешь построить отношения сейчас, 
                    потом может быть уже поздно."
                  </blockquote>
                  <div className="bg-accent/10 rounded-lg p-6">
                    <h4 className="font-bold text-primary mb-4">Результат участия:</h4>
                    <ul className="space-y-2 text-foreground">
                      <li>✓ Открытое общение с сыном</li>
                      <li>✓ Общие воспоминания на всю жизнь</li>
                      <li>✓ Взаимное доверие и понимание</li>
                      <li>✓ Уверенность сына в себе</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Programs */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-12 text-center">
              Наши программы
            </h2>
            
            <div className="relative max-w-6xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {travelPrograms.map((program) => (
                    <CarouselItem key={program.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full">
                        <CardHeader>
                          <div className="h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-4xl">{program.icon}</span>
                          </div>
                          <CardTitle className="font-merriweather text-primary">
                            {program.title}
                          </CardTitle>
                          <Badge className="w-fit">{program.duration}</Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground mb-4">
                            {program.description}
                          </p>
                          <Button variant="outline" className="w-full">
                            Подробнее
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-12 text-center">
              Как это проходит
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-primary/5 rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-primary text-lg">Фото 1</span>
                  <p className="text-sm text-muted-foreground mt-2">Подготовка к походу</p>
                </div>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-primary text-lg">Фото 2</span>
                  <p className="text-sm text-muted-foreground mt-2">В пути</p>
                </div>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-primary text-lg">Фото 3</span>
                  <p className="text-sm text-muted-foreground mt-2">Достижение цели</p>
                </div>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-primary text-lg">Фото 4</span>
                  <p className="text-sm text-muted-foreground mt-2">Воспоминания на всю жизнь</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Slider */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-12 text-center">
              Отзывы участников
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <blockquote className="text-foreground italic mb-4">
                    "Неделя в горах изменила наши отношения кардинально. 
                    Максим стал более открытым, а я понял, какой у меня замечательный сын."
                  </blockquote>
                  <cite className="text-primary font-semibold">
                    — Андрей Волков и Максим (14 лет)
                  </cite>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <blockquote className="text-foreground italic mb-4">
                    "Артем преодолел свой страх воды, а я научился его по-настоящему слушать. 
                    Вернулись домой как лучшие друзья."
                  </blockquote>
                  <cite className="text-primary font-semibold">
                    — Дмитрий Петров и Артем (12 лет)
                  </cite>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <blockquote className="text-foreground italic mb-4">
                    "Денис открылся с неожиданной стороны — оказался настоящим лидером. 
                    А я понял, что мой 'ребенок' уже почти взрослый мужчина."
                  </blockquote>
                  <cite className="text-primary font-semibold">
                    — Сергей Михайлов и Денис (16 лет)
                  </cite>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Читать все отзывы
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-6">
              Готовы изменить отношения с сыном?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto">
              Выберите программу и начните путь к более крепким отношениям уже сегодня.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              Выбрать путешествие
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
