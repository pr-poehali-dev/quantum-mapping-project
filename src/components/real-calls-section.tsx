import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CallItem {
  id: number;
  title: string;
  description: string;
  duration: string;
  tag: string;
  tagColor: string;
  src: string | null;
}

const calls: CallItem[] = [
  {
    id: 1,
    title: "Запись на приём в стоматологии",
    description: "Бот уточнил удобное время, подтвердил врача и напомнил о визите",
    duration: "1:42",
    tag: "Медицина",
    tagColor: "bg-blue-500/20 text-blue-400",
    src: null,
  },
  {
    id: 2,
    title: "Обработка заказа доставки",
    description: "Приём заказа, уточнение адреса и времени без участия оператора",
    duration: "2:10",
    tag: "Доставка",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    src: null,
  },
  {
    id: 3,
    title: "NPS-опрос после покупки",
    description: "Автоматический сбор обратной связи и оценки от клиента",
    duration: "0:58",
    tag: "Опросы",
    tagColor: "bg-violet-500/20 text-violet-400",
    src: null,
  },
  {
    id: 4,
    title: "Подтверждение брони в отеле",
    description: "Напоминание о заезде, уточнение пожеланий, изменение даты",
    duration: "1:25",
    tag: "Гостиницы",
    tagColor: "bg-amber-500/20 text-amber-400",
    src: null,
  },
  {
    id: 5,
    title: "Возврат товара в интернет-магазине",
    description: "Бот провёл клиента по процессу возврата, оформил заявку",
    duration: "2:33",
    tag: "E-commerce",
    tagColor: "bg-rose-500/20 text-rose-400",
    src: null,
  },
  {
    id: 6,
    title: "Информирование о задолженности",
    description: "Мягкое напоминание клиенту и предложение способов оплаты",
    duration: "1:05",
    tag: "Финансы",
    tagColor: "bg-cyan-500/20 text-cyan-400",
    src: null,
  },
];

function CallCard({ call }: { call: CallItem }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handlePlay = () => {
    if (call.src && audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        setPlaying(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(0);
        return;
      }
      setPlaying(true);
      setProgress(0);
      let p = 0;
      intervalRef.current = setInterval(() => {
        p += 1;
        setProgress(p);
        if (p >= 100) {
          clearInterval(intervalRef.current!);
          setPlaying(false);
          setProgress(0);
        }
      }, 80);
    }
  };

  return (
    <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-5 flex flex-col gap-4 hover:border-blue-500/40 transition-all duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${call.tagColor}`}>
            {call.tag}
          </span>
          <h3 className="text-white font-semibold mt-2 text-sm leading-snug">{call.title}</h3>
          <p className="text-gray-400 text-xs mt-1 leading-relaxed">{call.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePlay}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
            playing
              ? "bg-blue-500 text-white"
              : "bg-gray-700 hover:bg-blue-500 text-gray-300 hover:text-white"
          }`}
        >
          <Icon name={playing ? "Pause" : "Play"} size={16} />
        </button>

        <div className="flex-1 flex flex-col gap-1">
          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-gray-500 text-xs">
            <span>{playing ? "воспроизведение..." : "нажми для прослушивания"}</span>
            <span>{call.duration}</span>
          </div>
        </div>
      </div>

      {call.src && <audio ref={audioRef} src={call.src} onEnded={() => { setPlaying(false); setProgress(0); }} />}
    </div>
  );
}

export function RealCallsSection() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Реальные примеры
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Реальные примеры звонков
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Послушайте, как наши боты общаются с клиентами в разных сферах бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {calls.map((call) => (
            <CallCard key={call.id} call={call} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Записи будут добавлены в ближайшее время
          </p>
        </div>
      </div>
    </section>
  );
}
