import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              NeuroCall<span className="text-blue-400"> Solutions</span>
            </h2>
            <p className="text-gray-300 mb-2 max-w-md">
              AI-голосовые боты для автоматизации обзвона и записи клиентов.
            </p>
            <p className="text-gray-400 text-sm mb-6">📧 hello@neurocall.ru  ·  📞 +7 (977) 606-89-01</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <a href="#technology" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Технологии
                </a>
              </li>
              <li>
                <a href="#applications" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Сценарии
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Демо
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Кейсы клиентов
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Партнёрам
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2026 NeuroCall Solutions. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}