import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Насколько естественно звучит AI-бот?",
      answer:
        "Наши боты используют синтез речи последнего поколения — без роботизированного тона и пауз. Клиенты зачастую не понимают, что говорят с AI, особенно при правильно настроенном скрипте.",
    },
    {
      question: "Как быстро можно запустить бота?",
      answer:
        "Стандартный запуск занимает 3 рабочих дня: настройка скрипта, тестирование, интеграция с вашей CRM. Для сложных сценариев — до 7 дней.",
    },
    {
      question: "С какими CRM работает NeuroCall?",
      answer:
        "Мы интегрируемся с AmoCRM, Bitrix24, а также с любой системой через REST API. Данные из разговора автоматически попадают в карточку клиента.",
    },
    {
      question: "Что если клиент спросит что-то нестандартное?",
      answer:
        "Бот распознаёт нестандартные ситуации и может переключить звонок на живого оператора или взять контакт для перезвона. Сценарий эскалации настраивается под вас.",
    },
    {
      question: "Сколько стоит решение?",
      answer:
        "Стоимость зависит от объёма звонков и сценариев. Есть тестовый период. Свяжитесь с нами — подберём оптимальный тариф под ваш бизнес.",
    },
    {
      question: "Мои данные и данные клиентов в безопасности?",
      answer:
        "Все данные хранятся на серверах в России, передаются по зашифрованным каналам. Работаем в соответствии с 152-ФЗ о персональных данных.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ответы на популярные вопросы об AI-голосовых ботах NeuroCall Solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
