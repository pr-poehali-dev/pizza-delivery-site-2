
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Promos = () => {
  const currentPromos = [
    {
      id: 1,
      title: "2 пиццы по цене 1",
      description: "При заказе большой пиццы, вторую маленькую пиццу вы получаете в подарок!",
      image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=600&auto=format&fit=crop",
      validUntil: "2025-06-15",
      tags: ["Выгодно", "Популярное"],
      code: "2PIZZA",
      condition: "При заказе пиццы от 800 ₽",
      isNew: true
    },
    {
      id: 2,
      title: "Комбо для компании",
      description: "3 пиццы на выбор + 2 порции картофеля фри + 2 л напитка всего за 2499 ₽",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
      validUntil: "2025-07-01",
      tags: ["Комбо", "Выгодно"],
      code: "COMBO",
      condition: "При оформлении заказа на сайте",
      isNew: false
    },
    {
      id: 3,
      title: "Бесплатная доставка",
      description: "При заказе от 1500 ₽ доставка бесплатно в пределах КАД",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=600&auto=format&fit=crop",
      validUntil: "2025-08-30",
      tags: ["Доставка"],
      code: "FREE",
      condition: "Сумма заказа от 1500 ₽",
      isNew: false
    },
    {
      id: 4,
      title: "Скидка 20% в будние дни",
      description: "С понедельника по четверг с 12:00 до 16:00 скидка 20% на все меню",
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop",
      validUntil: "2025-06-30",
      tags: ["Скидка", "Выгодно"],
      code: "WEEKDAY20",
      condition: "В будние дни с 12:00 до 16:00",
      isNew: true
    },
    {
      id: 5,
      title: "Скидка 15% на первый заказ",
      description: "Для новых клиентов скидка 15% на первый заказ через приложение или сайт",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&auto=format&fit=crop",
      validUntil: "2025-12-31",
      tags: ["Новым клиентам", "Скидка"],
      code: "WELCOME",
      condition: "Для новых пользователей",
      isNew: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Акции и специальные предложения</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Воспользуйтесь нашими выгодными предложениями и скидками для заказа любимой пиццы
            </p>
          </div>
        </section>
        
        {/* Current Promos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Текущие акции</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPromos.map(promo => (
                <div key={promo.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <img 
                      src={promo.image} 
                      alt={promo.title} 
                      className="w-full h-full object-cover"
                    />
                    {promo.isNew && (
                      <Badge className="absolute top-4 right-4 bg-red-600">
                        Новая акция
                      </Badge>
                    )}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{promo.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {promo.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">{promo.description}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      Действует до: {new Date(promo.validUntil).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Tag className="w-4 h-4 mr-2" />
                      Промокод: <span className="font-semibold ml-1">{promo.code}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-6 italic">{promo.condition}</p>
                    <Link to="/menu">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Заказать сейчас
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How to use promos */}
        <section className="bg-red-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Как воспользоваться акцией</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-red-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Выберите акцию</h3>
                <p className="text-gray-700">
                  Ознакомьтесь с условиями акции и скопируйте промокод
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-red-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Сделайте заказ</h3>
                <p className="text-gray-700">
                  Добавьте пиццу и другие товары, соответствующие условиям акции
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-red-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Примените промокод</h3>
                <p className="text-gray-700">
                  Введите промокод в корзине при оформлении заказа и получите скидку
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Часто задаваемые вопросы</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Можно ли комбинировать несколько акций?",
                  answer: "К сожалению, промокоды и акции нельзя суммировать. При оформлении заказа вы можете использовать только один промокод."
                },
                {
                  question: "Есть ли ограничение на использование промокода?",
                  answer: "Да, большинство промокодов можно использовать только один раз на один аккаунт. Некоторые акции имеют ограничения по количеству использований."
                },
                {
                  question: "Что делать, если промокод не сработал?",
                  answer: "Убедитесь, что вы правильно ввели промокод и что ваш заказ соответствует условиям акции. Если проблема не решается, свяжитесь с нашей службой поддержки."
                },
                {
                  question: "До какого времени действуют акции?",
                  answer: "Срок действия акции указан в её описании. Обычно акции действуют до 23:59 указанной даты окончания."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Хотите первыми узнавать о новых акциях?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Подпишитесь на нашу рассылку и получайте информацию о новых акциях и специальных предложениях
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Promos;
