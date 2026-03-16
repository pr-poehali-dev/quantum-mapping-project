import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const dialog = [
  { role: "bot", text: "Здравствуйте! Это NeuroCall, салон красоты «Стиль». Хотите записаться на стрижку?" },
  { role: "client", text: "Да, мне бы на эту субботу, если есть место." },
  { role: "bot", text: "Конечно! В субботу есть время в 12:00 и в 15:30. Какое вам удобнее?" },
  { role: "client", text: "В 12:00 отлично." },
  { role: "bot", text: "Прекрасно! Записал вас на субботу в 12:00 к мастеру Анне. Напомнить за день до визита?" },
  { role: "client", text: "Да, пожалуйста." },
  { role: "bot", text: "Готово! Ждём вас в субботу. Хорошего дня! 👋" },
]

export function SafetySection() {
  const [visibleCount, setVisibleCount] = useState(2)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    setVisibleCount(2)

    let count = 2
    const interval = setInterval(() => {
      count += 1
      setVisibleCount(count)
      if (count >= dialog.length) {
        clearInterval(interval)
        setIsPlaying(false)
      }
    }, 1400)
  }

  const handleReset = () => {
    setVisibleCount(2)
    setIsPlaying(false)
  }

  return (
    <section id="demo" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Демо-диалог</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Послушайте, как AI-бот записывает клиента к парикмахеру
          </p>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-card overflow-hidden">
          {/* Player header */}
          <div className="flex items-center justify-between px-6 py-4 bg-blue-500/5 border-b border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <Icon name="Bot" size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">NeuroCall Bot</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-400">AI-агент • Онлайн</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mic" size={16} className="text-blue-400" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 bg-blue-400 rounded-full ${isPlaying ? "animate-pulse" : ""}`}
                    style={{ height: `${8 + i * 3}px`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dialog bubbles */}
          <div className="p-6 space-y-4 min-h-[320px]">
            {dialog.slice(0, visibleCount).map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "client" ? "justify-end" : "justify-start"} animate-[fadeIn_0.4s_ease-out]`}
              >
                {msg.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <Icon name="Bot" size={14} className="text-blue-400" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "bot"
                      ? "bg-blue-500/10 border border-blue-500/20 text-gray-100 rounded-tl-sm"
                      : "bg-gray-700 text-white rounded-tr-sm"
                  }`}
                >
                  <p className="text-xs mb-1 font-semibold opacity-60">
                    {msg.role === "bot" ? "Operator AI" : "Client"}
                  </p>
                  {msg.text}
                </div>
                {msg.role === "client" && (
                  <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center ml-2 mt-1 flex-shrink-0">
                    <Icon name="User" size={14} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="px-6 py-4 border-t border-blue-500/20 flex items-center justify-between bg-blue-500/5">
            <p className="text-xs text-gray-500">
              {visibleCount < dialog.length ? `Сообщение ${visibleCount} из ${dialog.length}` : "Диалог завершён ✓"}
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent"
              >
                <Icon name="RotateCcw" size={14} className="mr-1.5" />
                Сначала
              </Button>
              <Button
                size="sm"
                onClick={handlePlay}
                disabled={isPlaying}
                className="bg-blue-500 hover:bg-blue-600 text-white border-0"
              >
                <Icon name={isPlaying ? "Loader" : "Play"} size={14} className={`mr-1.5 ${isPlaying ? "animate-spin" : ""}`} />
                {isPlaying ? "Воспроизведение..." : "Запустить диалог"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
