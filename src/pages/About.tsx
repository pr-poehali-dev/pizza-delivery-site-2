
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Award, 
  Users, 
  Clock, 
  Leaf, 
  Truck, 
  ShieldCheck
} from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-red-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  О нашей пиццерии
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  С 2015 года мы радуем наших клиентов вкусной пиццей, приготовленной 
                  из качественных и свежих ингредиентов. Наша миссия — доставлять не просто еду, 
                  а настоящие итальянские гастрономические впечатления прямо к вашему дому.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Award className="text-red-600 w-5 h-5 mr-2" />
                    <span>Лучшая пиццерия 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-red-600 w-5 h-5 mr-2" />
                    <span>Более 50,000 клиентов</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-red-600 w-5 h-5 mr-2" />
                    <span>Доставка от 30 минут</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=800&auto=format&fit=crop" 
                  alt="Наша пиццерия" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наша история</h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  История ПиццаМания началась в небольшой семейной пекарне, где Михаил и Елена Воронины 
                  решили воплотить свою мечту — готовить настоящую итальянскую пиццу по традиционным рецептам. 
                  Семья Ворониных провела несколько месяцев в Италии, изучая секреты приготовления 
                  идеального теста и соусов у лучших пиццайоло страны.
                </p>
                <p>
                  В 2015 году открылась первая пиццерия ПиццаМания в центре города. Благодаря 
                  качественным ингредиентам, уникальным рецептам и заботе о каждом клиенте, 
                  маленькая пиццерия быстро завоевала популярность среди местных жителей.
                </p>
                <p>
                  Сегодня ПиццаМания — это сеть из 12 пиццерий, команда из более 200 профессионалов 
                  и десятки тысяч довольных клиентов. Несмотря на рост, мы сохраняем семейные ценности 
                  и традиции, которые были заложены при основании компании.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="text-red-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Свежие ингредиенты</h3>
                <p className="text-gray-700">
                  Мы используем только свежие и натуральные ингредиенты. Овощи поставляются с местных 
                  ферм, а мука для теста импортируется из Италии.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="text-red-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Качество и безопасность</h3>
                <p className="text-gray-700">
                  Строгий контроль качества на всех этапах производства гарантирует безопасность 
                  и превосходный вкус каждой пиццы.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="text-red-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Быстрая доставка</h3>
                <p className="text-gray-700">
                  Мы ценим ваше время и гарантируем, что пицца будет доставлена горячей и свежей 
                  не более чем за 60 минут с момента заказа.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Михаил Воронин",
                  position: "Основатель",
                  photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
                  quote: "Наш успех — это результат любви к делу и внимания к деталям."
                },
                {
                  name: "Елена Воронина",
                  position: "Шеф-повар",
                  photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
                  quote: "Секрет вкусной пиццы — качественные ингредиенты и любовь к готовке."
                },
                {
                  name: "Антон Петров",
                  position: "Пиццайоло",
                  photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
                  quote: "Каждый день я стремлюсь приготовить лучшую пиццу в городе."
                },
                {
                  name: "Мария Иванова",
                  position: "Менеджер доставки",
                  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
                  quote: "Быстрая доставка и улыбка курьера — наш стандарт обслуживания."
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4 group">
                    <div className="overflow-hidden rounded-full w-40 h-40 mx-auto">
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-red-600 mb-2">{member.position}</p>
                  <p className="text-gray-700 italic text-sm">"{member.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Попробуйте нашу пиццу сегодня!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Наслаждайтесь настоящим вкусом итальянской пиццы с доставкой прямо к вашей двери.
            </p>
            <a 
              href="/menu" 
              className="inline-block px-8 py-3 text-lg font-medium bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Заказать пиццу
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
