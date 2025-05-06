
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ПиццаМания</h3>
            <p className="text-gray-300 mb-4">
              Лучшая пицца в городе с доставкой на дом. Мы используем только свежие ингредиенты и готовим с любовью.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu/classic" className="text-gray-300 hover:text-white transition-colors">
                  Классические пиццы
                </Link>
              </li>
              <li>
                <Link to="/menu/vegetarian" className="text-gray-300 hover:text-white transition-colors">
                  Вегетарианские
                </Link>
              </li>
              <li>
                <Link to="/menu/seafood" className="text-gray-300 hover:text-white transition-colors">
                  Морепродукты
                </Link>
              </li>
              <li>
                <Link to="/menu/drinks" className="text-gray-300 hover:text-white transition-colors">
                  Напитки
                </Link>
              </li>
              <li>
                <Link to="/menu/sides" className="text-gray-300 hover:text-white transition-colors">
                  Закуски
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-white transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/promos" className="text-gray-300 hover:text-white transition-colors">
                  Акции и скидки
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/policy" className="text-gray-300 hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-red-500" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-red-500" />
                <span>info@pizzamania.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-red-500" />
                <span>г. Москва, ул. Пиццерная, д. 42</span>
              </li>
              <li className="pt-2">
                <p className="text-sm text-gray-400">Режим работы:</p>
                <p className="text-gray-300">Ежедневно с 10:00 до 23:00</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ПиццаМания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
