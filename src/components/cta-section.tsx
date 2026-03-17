import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold mb-6 font-orbitron text-slate-800">
            Готовы автоматизировать обзвоны?
          </h2>
          <p className="text-xl mb-10 leading-relaxed max-w-2xl mx-auto text-slate-800">
            Запустите AI-бота за 3 дня. Первые 100 звонков — бесплатно в рамках тестового периода.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 pulse-button text-lg px-8 py-6 border-0 shadow-lg shadow-blue-500/30"
            >
              Попробовать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white text-lg px-8 py-6 bg-transparent"
            >
              Связаться с нами
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-700">Без скрытых платежей · Запуск за 3 дня · Поддержка на каждом шаге</p>
        </div>
      </div>
    </section>
  )
}