
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-red-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Доставка пиццы на дом —{" "}
              <span className="text-red-600">Быстро и вкусно!</span>
            </h1>
            <p className="text-lg text-gray-700">
              Мы доставляем свежеприготовленную итальянскую пиццу прямо к вашей двери. 
              Только лучшие ингредиенты и настоящий вкус!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/menu">Заказать пиццу</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Link to="/promos">Акции и скидки</Link>
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Доставка от 30 минут</span>
              
              <div className="p-2 bg-white rounded-full shadow-sm">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-gray-700">Высший рейтинг</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop" 
              alt="Аппетитная пицца"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <span className="text-red-600 font-bold text-xl">20%</span>
                <p className="text-sm text-gray-700">скидка на первый заказ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-12 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
