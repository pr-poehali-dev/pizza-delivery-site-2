
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  {
    id: 1,
    title: "Вторая пицца в подарок",
    description: "При заказе большой пиццы вторая маленькая в подарок",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=600&auto=format&fit=crop",
    badge: "ХИТ"
  },
  {
    id: 2,
    title: "Комбо для компании",
    description: "3 пиццы, напитки и картофель фри по суперцене",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
    badge: "ВЫГОДНО"
  },
  {
    id: 3,
    title: "Доставка за 30 минут",
    description: "Или пицца бесплатно! Гарантируем свежесть",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=600&auto=format&fit=crop",
    badge: "ГАРАНТИЯ"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Специальные предложения</h2>
          <p className="text-gray-600 mt-2">Акции и скидки для наших любимых клиентов</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {offer.badge && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {offer.badge}
                  </span>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{offer.title}</h3>
                <p className="text-gray-600 mt-2">{offer.description}</p>
                <button className="mt-4 text-red-600 font-medium flex items-center">
                  Подробнее
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
