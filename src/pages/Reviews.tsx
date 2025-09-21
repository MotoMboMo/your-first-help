import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    fatherName: "Андрей Волков",
    sonName: "Максим",
    sonAge: 14,
    trip: "Горы Кавказа",
    date: "Сентябрь 2024",
    rating: 5,
    text: "Неделя в горах изменила наши отношения кардинально. Максим стал более открытым, а я понял, какой у меня замечательный сын. Спасибо организаторам за профессионализм и душевную атмосферу!",
    highlight: "Сын стал более ответственным и уверенным в себе"
  },
  {
    id: 2,
    fatherName: "Дмитрий Петров",
    sonName: "Артем",
    sonAge: 12,
    trip: "Сплав по реке Белая",
    date: "Август 2024",
    rating: 5,
    text: "Это было наше первое совместное приключение такого масштаба. Артем преодолел свой страх воды, а я научился его по-настоящему слушать. Вернулись домой как лучшие друзья.",
    highlight: "Преодолели страхи и стали ближе"
  },
  {
    id: 3,
    fatherName: "Сергей Михайлов",
    sonName: "Денис",
    sonAge: 16,
    trip: "Выживание в дикой природе",
    date: "Июль 2024",
    rating: 5,
    text: "Интенсивная программа, но результат того стоит. Денис открылся с неожиданной стороны — оказался настоящим лидером. А я понял, что мой 'ребенок' уже почти взрослый мужчина.",
    highlight: "Увидел в сыне будущего мужчину"
  },
  {
    id: 4,
    fatherName: "Александр Новиков",
    sonName: "Егор",
    sonAge: 13,
    trip: "Горы Кавказа",
    date: "Июнь 2024",
    rating: 5,
    text: "Организация на высшем уровне, инструкторы — профессионалы своего дела. Но главное — это эмоции. Егор до сих пор рассказывает друзьям о нашем походе. Планируем ехать снова!",
    highlight: "Получили незабываемые эмоции и воспоминания"
  },
  {
    id: 5,
    fatherName: "Игорь Сидоров",
    sonName: "Никита",
    sonAge: 15,
    trip: "Сплав по реке Белая",
    date: "Май 2024",
    rating: 5,
    text: "Никита — интроверт, всегда было сложно с ним разговаривать. После поездки он сам стал инициировать наши беседы. Появились общие темы, общие воспоминания. Это бесценно.",
    highlight: "Наладили общение с сыном-интровертом"
  },
  {
    id: 6,
    fatherName: "Владимир Козлов",
    sonName: "Тимур",
    sonAge: 11,
    trip: "Выживание в дикой природе",
    date: "Октябрь 2024",
    rating: 5,
    text: "Тимур самый младший в группе был, но показал характер! Теперь дома помогает во всем, стал более самостоятельным. А я научился видеть в нем не малыша, а партнера.",
    highlight: "Сын стал более самостоятельным и ответственным"
  }
];

const videoReviews = [
  {
    id: 1,
    title: "Отзыв Андрея и Максима о походе в горы Кавказа",
    duration: "3:25"
  },
  {
    id: 2,
    title: "Дмитрий и Артем делятся впечатлениями о сплаве",
    duration: "2:48"
  },
  {
    id: 3,
    title: "Сергей и Денис о программе выживания",
    duration: "4:12"
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              Отзывы участников
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Истории отцов и сыновей, которые прошли наши программы и изменили свои отношения к лучшему.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-foreground">Счастливых пар</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4.9</div>
                <div className="text-foreground">Средний рейтинг</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-foreground">Рекомендуют друзьям</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">85%</div>
                <div className="text-foreground">Возвращаются снова</div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Reviews */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-merriweather font-bold text-primary mb-12 text-center">
              Видеоотзывы
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {videoReviews.map((video) => (
                <Card key={video.id}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-primary/10 rounded-t-lg flex items-center justify-center relative">
                      <div className="text-primary text-6xl">▶</div>
                      <Badge className="absolute top-2 right-2 bg-black/50 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-primary">{video.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Text Reviews */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-merriweather font-bold text-primary mb-12 text-center">
              Письменные отзывы
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {reviews.map((review) => (
                <Card key={review.id} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-primary">
                          {review.fatherName} и {review.sonName} ({review.sonAge} лет)
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{review.trip}</Badge>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-accent">★</span>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-foreground italic mb-4">
                      "{review.text}"
                    </blockquote>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-accent">
                        Главный результат: {review.highlight}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-merriweather font-bold text-primary mb-4">
              Готовы создать свою историю?
            </h2>
            <p className="text-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к сотням отцов и сыновей, которые уже изменили свои отношения 
              благодаря нашим программам.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-semibold transition-colors">
              Выбрать программу
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;