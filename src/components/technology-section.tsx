import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    icon: "Phone",
    title: "Звонок клиенту",
    description: "AI-бот инициирует звонок по расписанию или отвечает на входящий. Голос — живой, естественный, без роботизированного тона.",
  },
  {
    number: "02",
    icon: "Mic",
    title: "AI слушает и отвечает",
    description: "Нейросеть распознаёт речь, анализирует эмоции и отвечает по сценарию. Поддерживает естественный диалог и обрабатывает нестандартные ситуации.",
  },
  {
    number: "03",
    icon: "Database",
    title: "Данные в CRM",
    description: "Итоги разговора автоматически попадают в AmoCRM или Bitrix24: запись, статус, комментарии. Никакого ручного ввода.",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-6 bg-[#050a14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Как это работает</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Три шага — и ваш бизнес автоматизирован
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center z-10 relative">
                  <Icon name={step.icon} size={32} className="text-blue-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="md:hidden mt-8 flex items-center justify-center">
                  <Icon name="ArrowDown" size={24} className="text-blue-500/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-blue-400" />
              <span>Интеграция за 3 дня</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-blue-400" />
              <span>AmoCRM / Bitrix24</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-blue-400" />
              <span>Готовые скрипты под ваш бизнес</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-blue-400" />
              <span>Поддержка 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
