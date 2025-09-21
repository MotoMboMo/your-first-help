import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const travelPrograms = [
  {
    id: 1,
    title: "Горы Кавказа: Путь к вершине",
    duration: "7 дней",
    ageRange: "12-18 лет",
    price: "45 000 ₽",
    description: "Треккинг в горах Кавказа с ночевками в палатках, преодоление перевалов и восхождение на вершину.",
    includes: ["Проживание в палатках", "3-разовое питание", "Опытный инструктор", "Снаряжение"],
    difficulty: "Средняя"
  },
  {
    id: 2,
    title: "Сплав по реке Белая",
    duration: "5 дней",
    ageRange: "10-16 лет",
    price: "32 000 ₽",
    description: "Водный поход на рафтах с рыбалкой, купанием и вечерними посиделками у костра.",
    includes: ["Проживание в лагере", "3-разовое питание", "Инструктор по рафтингу", "Все снаряжение"],
    difficulty: "Легкая"
  },
  {
    id: 3,
    title: "Выживание в дикой природе",
    duration: "4 дня",
    ageRange: "14-18 лет",
    price: "38 000 ₽",
    description: "Интенсивный курс выживания с минимумом цивилизации, изучение навыков добычи огня и пищи.",
    includes: ["Базовое снаряжение", "Инструктор-выживальщик", "Медицинская поддержка"],
    difficulty: "Высокая"
  }
];

const Travels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              Наши путешествия
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите программу, которая подходит возрасту вашего сына и уровню вашей физической подготовки.
            </p>
          </div>
        </section>

        {/* Travel Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {travelPrograms.map((program) => (
                <Card key={program.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-primary">Фото программы</span>
                    </div>
                    <CardTitle className="font-merriweather text-primary">
                      {program.title}
                    </CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">{program.duration}</Badge>
                      <Badge variant="outline">{program.ageRange}</Badge>
                      <Badge 
                        variant={program.difficulty === 'Легкая' ? 'default' : 
                                program.difficulty === 'Средняя' ? 'secondary' : 'destructive'}
                      >
                        {program.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-foreground mb-6 flex-1">
                      {program.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-2">Что включено:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {program.includes.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4 mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {program.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          за пару отец+сын
                        </span>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Подать заявку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-merriweather font-bold text-primary mb-8">
                Как проходят наши путешествия
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Малые группы</h3>
                  <p className="text-foreground">До 8 пар отец+сын для персонального внимания</p>
                </div>
                <div>
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Цели и вызовы</h3>
                  <p className="text-foreground">Каждый день — новая задача для совместного решения</p>
                </div>
                <div>
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤔</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Рефлексия</h3>
                  <p className="text-foreground">Вечерние беседы для осмысления дня</p>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Узнать больше о программах
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Travels;