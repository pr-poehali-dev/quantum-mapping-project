import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Распознавание эмоций",
    description: "Sentiment Analysis в реальном времени — бот понимает настроение клиента и адаптирует тон разговора.",
    icon: "Heart",
    badge: "AI",
  },
  {
    title: "50+ языков",
    description: "Поддержка русского, английского и других языков. Бот говорит как живой носитель — без акцента.",
    icon: "Globe",
    badge: "Мультиязычный",
  },
  {
    title: "Интеграция с CRM",
    description: "Данные автоматически попадают в AmoCRM и Bitrix24 по API. Никакого ручного ввода.",
    icon: "Link",
    badge: "API",
  },
  {
    title: "Работает 24/7",
    description: "Бот принимает звонки в любое время без выходных, праздников и больничных.",
    icon: "Clock",
    badge: "Нон-стоп",
  },
  {
    title: "В 10 раз дешевле",
    description: "Замените целый колл-центр одним AI-агентом. ROI окупается уже в первый месяц.",
    icon: "TrendingDown",
    badge: "Экономия",
  },
  {
    title: "Готов за 3 дня",
    description: "Настройка скрипта, тестирование и запуск за 3 рабочих дня. Никаких долгих внедрений.",
    icon: "Zap",
    badge: "Быстрый старт",
  },
]

export function FeaturesSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Почему выбирают NeuroCall</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Технологии мирового уровня — результаты, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Icon name={feature.icon} size={22} className="text-blue-400" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/15 text-blue-300 border-blue-500/30">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
