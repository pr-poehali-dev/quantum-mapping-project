import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Стоматология и клиники",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            AI-бот звонит пациентам, напоминает о приёме, записывает на удобное время и переносит визиты.
            Администратор занимается приёмом, а не телефоном.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Автозапись на приём и перенос визита
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Напоминание за день до приёма — снижение неявок на 40%
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Сбор отзывов после посещения автоматически
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Служба доставки и такси",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Бот подтверждает заказы, уточняет адрес, сообщает время доставки и обрабатывает претензии — 
            всё без участия оператора.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Подтверждение и уточнение заказа голосом
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Оповещение о статусе доставки в реальном времени
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Обработка отмен и переноса без стресса для клиента
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Опросы NPS и обратная связь",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Автоматический обзвон после покупки или услуги. Бот собирает оценку, записывает комментарии
            и передаёт негативные кейсы живому менеджеру.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Голосовой сбор NPS по 10-балльной шкале
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Эскалация негатива на менеджера мгновенно
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Аналитика и отчёты автоматически в CRM
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Сценарии использования</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            AI-бот NeuroCall Solutions адаптируется под задачи вашего бизнеса —
            от записи клиентов до сбора отзывов.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
