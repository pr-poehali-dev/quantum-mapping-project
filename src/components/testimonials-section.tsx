import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Дмитрий Соколов",
    role: "Владелец сети стоматологий «Белая улыбка»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Количество неявок на приёмы снизилось на 38% уже в первый месяц. Бот звонит, напоминает, переносит — всё без участия администратора. Очень доволен.",
  },
  {
    name: "Ирина Мельникова",
    role: "Операционный директор службы доставки «Везём»",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Раньше мы держали 4 оператора только на подтверждение заказов. Теперь справляется один AI-бот. Сэкономили больше 200 тысяч рублей в месяц.",
  },
  {
    name: "Алексей Громов",
    role: "CEO таксопарка «Скорость»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Внедрили за 3 дня, как и обещали. Интеграция с Bitrix24 прошла без проблем. Клиенты иногда не понимают, что говорят с ботом — это высший пилотаж.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron">Клиенты говорят</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные результаты владельцев малого и среднего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-blue-400">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
