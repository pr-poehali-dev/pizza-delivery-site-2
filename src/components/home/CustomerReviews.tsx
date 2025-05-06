
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Иван Петров",
    rating: 5,
    date: "15.04.2025",
    comment: "Очень вкусная пицца! Доставка была быстрой, всего 25 минут. Буду заказывать еще!",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 2,
    name: "Анна Сидорова",
    rating: 5,
    date: "10.04.2025",
    comment: "Пицца была горячей и очень вкусной. Особенно понравилась 'Пепперони' с дополнительным сыром.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Дмитрий Иванов",
    rating: 4,
    date: "05.04.2025",
    comment: "Хорошая пицца, быстрая доставка. Немного остыла, но всё равно была вкусной.",
    avatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 4,
    name: "Елена Смирнова",
    rating: 5,
    date: "01.04.2025",
    comment: "Лучшая пицца в городе! Тесто тонкое, много начинки. Доставка точно в срок.",
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    id: 5,
    name: "Максим Козлов",
    rating: 5,
    date: "28.03.2025",
    comment: "Заказываем уже в третий раз, качество всегда на высоте. Рекомендую комбо-наборы!",
    avatar: "https://i.pravatar.cc/150?img=11"
  }
];

const CustomerReviews = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Отзывы наших клиентов</h2>
          <p className="text-gray-600 mt-2">Более 10,000 довольных клиентов уже оценили наш сервис</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                <div className="p-1">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>{review.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center">
                            <div className="flex mr-2">{renderStars(review.rating)}</div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerReviews;
