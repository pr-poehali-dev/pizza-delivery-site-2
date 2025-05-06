
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-red-600">
              ПиццаМания
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-red-600 transition-colors">
              Главная
            </Link>
            <Link to="/menu" className="font-medium hover:text-red-600 transition-colors">
              Меню
            </Link>
            <Link to="/promos" className="font-medium hover:text-red-600 transition-colors">
              Акции
            </Link>
            <Link to="/about" className="font-medium hover:text-red-600 transition-colors">
              О нас
            </Link>
            <Link to="/contacts" className="font-medium hover:text-red-600 transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-red-600 transition-colors" />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/profile">
              <User className="h-6 w-6 text-gray-700 hover:text-red-600 transition-colors" />
            </Link>
            <Button className="hidden md:flex bg-red-600 hover:bg-red-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
