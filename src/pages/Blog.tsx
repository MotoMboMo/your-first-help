import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Как подготовить сына к первому походу",
    excerpt: "Практические советы по физической и психологической подготовке к совместному путешествию.",
    category: "Психология",
    date: "15 ноября 2024",
    readTime: "5 мин",
    image: "psychology-1.jpg"
  },
  {
    id: 2,
    title: "История нашего восхождения на Эльбрус",
    excerpt: "Как 12-летний Максим и его отец покорили высочайшую вершину Европы.",
    category: "Истории из поездок",
    date: "8 ноября 2024",
    readTime: "8 мин",
    image: "story-1.jpg"
  },
  {
    id: 3,
    title: "Почему современным отцам важно проводить время с сыновьями",
    excerpt: "Исследования показывают влияние качественного времени на развитие личности подростка.",
    category: "Психология",
    date: "1 ноября 2024",
    readTime: "6 мин",
    image: "psychology-2.jpg"
  },
  {
    id: 4,
    title: "Топ-5 навыков выживания для городских детей",
    excerpt: "Базовые навыки, которые пригодятся в походе и сформируют уверенность в себе.",
    category: "Практические советы",
    date: "25 октября 2024",
    readTime: "4 мин",
    image: "tips-1.jpg"
  },
  {
    id: 5,
    title: "Сплав по Катуни: как мы преодолевали страхи",
    excerpt: "Рассказ о том, как водная стихия научила отца и сына доверять друг другу.",
    category: "Истории из поездок",
    date: "18 октября 2024",
    readTime: "7 мин",
    image: "story-2.jpg"
  },
  {
    id: 6,
    title: "Мужские разговоры: о чем говорить с сыном",
    excerpt: "Темы для бесед, которые помогут лучше понять внутренний мир подростка.",
    category: "Психология",
    date: "10 октября 2024",
    readTime: "5 мин",
    image: "psychology-3.jpg"
  }
];

const categories = ["Все статьи", "Психология", "Истории из поездок", "Практические советы"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              Блог проекта
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Истории из наших путешествий, советы по воспитанию и практические рекомендации 
              для укрепления отношений между отцами и сыновьями.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "Все статьи" ? "default" : "outline"}
                  className={category === "Все статьи" ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="h-48 bg-primary/10 rounded-t-lg flex items-center justify-center">
                      <span className="text-primary">Фото статьи</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge 
                        variant={post.category === "Психология" ? "default" : 
                                post.category === "Истории из поездок" ? "secondary" : "outline"}
                      >
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <CardTitle className="font-merriweather text-primary mb-3 flex-0">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                      <span>{post.date}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Читать →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-merriweather font-bold text-primary mb-4">
                Подписка на новые статьи
              </h2>
              <p className="text-foreground mb-8">
                Получайте лучшие материалы о воспитании и путешествиях прямо на почту.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;