import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              О проекте "Отец и Сын"
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы создаем уникальные путешествия, которые укрепляют связь между отцами и сыновьями 
              через совместные приключения и личностное развитие.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-merriweather font-bold text-primary mb-8 text-center">
                Наша миссия
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    В современном мире отцы и сыновья часто теряют связь друг с другом. 
                    Работа, учеба, гаджеты — все это отдаляет нас от самых важных людей в нашей жизни.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Наш проект создан для того, чтобы дать отцам и сыновьям возможность провести 
                    время вместе, познать друг друга заново и создать воспоминания, 
                    которые останутся на всю жизнь.
                  </p>
                </div>
                <div className="bg-secondary rounded-lg p-8">
                  <blockquote className="text-lg italic text-primary">
                    "Лучший подарок, который отец может дать сыну — это время, 
                    проведенное вместе в приключениях и открытиях."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-merriweather font-bold text-primary mb-12 text-center">
                История основателя
              </h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="bg-primary/10 rounded-lg h-80 flex items-center justify-center">
                    <span className="text-primary text-lg">Фото основателя</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Привет! Меня зовут [Имя основателя], и я отец двоих сыновей. 
                    Идея создания проекта "Отец и Сын" родилась из личного опыта.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    В какой-то момент я понял, что мои дети выросли, а я практически их не знаю. 
                    Работа поглощала все мое время, а общение с сыновьями сводилось к формальным 
                    вопросам об учебе и быте.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Первое совместное путешествие изменило все. За неделю в горах мы стали ближе, 
                    чем за предыдущие годы. Тогда я понял — это нужно не только нам, 
                    но и тысячам других отцов и сыновей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-merriweather font-bold text-primary mb-12 text-center">
              Ценности проекта
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-4">
                  Аутентичность
                </h3>
                <p className="text-foreground">
                  Настоящие эмоции, искренние разговоры и подлинные переживания 
                  вдали от городской суеты.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-4">
                  Доверие
                </h3>
                <p className="text-foreground">
                  Создание безопасного пространства для открытого общения 
                  и взаимного понимания.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-4">
                  Развитие
                </h3>
                <p className="text-foreground">
                  Личностный рост через преодоление вызовов и получение нового опыта.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;