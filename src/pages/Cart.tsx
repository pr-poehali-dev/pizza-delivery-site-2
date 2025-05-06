
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Trash2, Clock, ArrowLeft, Check } from "lucide-react";
import { CartItem } from "@/types/cart";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryTime, setDeliveryTime] = useState("asap");
  const [scheduledTime, setScheduledTime] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    entrance: "",
    floor: "",
    apartment: "",
    comment: ""
  });
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRemoveItem = (itemId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "pizza20") {
      setDiscount(0.2);
    } else if (promoCode.toLowerCase() === "welcome") {
      setDiscount(0.15);
    } else {
      setDiscount(0);
      alert("Промокод недействителен или истек срок его действия");
    }
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.finalPrice || item.price) * item.quantity, 0);
  };
  
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = subtotal > 1500 ? 0 : 199;
    const discountAmount = subtotal * discount;
    
    return subtotal - discountAmount + deliveryFee;
  };
  
  const handleCheckout = () => {
    // Validate form
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Пожалуйста, заполните обязательные поля");
      return;
    }
    
    // Process order
    const order = {
      items: cartItems,
      customer: formData,
      payment: paymentMethod,
      deliveryTime: deliveryTime === "asap" ? "Как можно скорее" : scheduledTime,
      total: calculateTotal(),
      date: new Date().toISOString()
    };
    
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    
    // Clear cart
    localStorage.setItem("cart", JSON.stringify([]));
    
    // Show success screen
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Заказ успешно оформлен!</h1>
            <p className="text-lg text-gray-700 mb-8">
              Спасибо за ваш заказ. Мы доставим вашу пиццу как можно скорее.
            </p>
            <div className="flex flex-col gap-4">
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => navigate("/")}
              >
                Вернуться на главную
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
                onClick={() => navigate("/profile")}
              >
                Перейти в личный кабинет
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Ваша корзина пуста</h1>
            <p className="text-lg text-gray-700 mb-8">
              Добавьте аппетитную пиццу из нашего меню, чтобы оформить заказ
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => navigate("/menu")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Перейти в меню
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ваш заказ</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 h-32">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow p-4 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 h-auto"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Размер: {item.size === "small" ? "Маленькая" : 
                                item.size === "medium" ? "Средняя" : "Большая"}
                      </div>
                      {item.extras && item.extras.length > 0 && (
                        <div className="text-sm text-gray-600 mb-2">
                          Дополнительно: {item.extras.join(", ")}
                        </div>
                      )}
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-2"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="px-3">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-2"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <div className="font-semibold text-gray-900">
                          {((item.finalPrice || item.price) * item.quantity).toFixed(0)} ₽
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 mb-8"
              onClick={() => navigate("/menu")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться в меню
            </Button>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="customer-info">
                <AccordionTrigger className="text-lg font-semibold text-gray-900">
                  Информация для доставки
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 py-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя*</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Иван Иванов"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон*</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+7 (999) 123-45-67"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Адрес доставки*</Label>
                      <Input 
                        id="address" 
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        placeholder="Улица, дом"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="entrance">Подъезд</Label>
                        <Input 
                          id="entrance" 
                          name="entrance"
                          value={formData.entrance}
                          onChange={handleFormChange}
                          placeholder="1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="floor">Этаж</Label>
                        <Input 
                          id="floor" 
                          name="floor"
                          value={formData.floor}
                          onChange={handleFormChange}
                          placeholder="5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apartment">Квартира</Label>
                        <Input 
                          id="apartment" 
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleFormChange}
                          placeholder="42"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="comment">Комментарий к заказу</Label>
                      <Textarea 
                        id="comment" 
                        name="comment"
                        value={formData.comment}
                        onChange={handleFormChange}
                        placeholder="Код домофона, как пройти и т.д."
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="delivery-time">
                <AccordionTrigger className="text-lg font-semibold text-gray-900">
                  Время доставки
                </AccordionTrigger>
                <AccordionContent>
                  <RadioGroup 
                    value={deliveryTime} 
                    onValueChange={setDeliveryTime}
                    className="space-y-4 py-2"
                  >
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="asap" id="asap" />
                      <div>
                        <Label htmlFor="asap" className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Как можно скорее
                        </Label>
                        <p className="text-sm text-gray-600 ml-6">Примерное время: 30-60 минут</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="scheduled" id="scheduled" />
                      <div className="w-full">
                        <Label htmlFor="scheduled">Выбрать время</Label>
                        <Input 
                          type="datetime-local"
                          className="mt-2"
                          disabled={deliveryTime !== "scheduled"}
                          value={scheduledTime}
                          onChange={(e) => setScheduledTime(e.target.value)}
                          min={new Date().toISOString().slice(0, 16)}
                        />
                      </div>
                    </div>
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="payment">
                <AccordionTrigger className="text-lg font-semibold text-gray-900">
                  Способ оплаты
                </AccordionTrigger>
                <AccordionContent>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="space-y-3 py-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Картой онлайн</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card-courier" id="card-courier" />
                      <Label htmlFor="card-courier">Картой курьеру</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Наличными</Label>
                    </div>
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Товары</span>
                    <span>{calculateSubtotal().toFixed(0)} ₽</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Доставка</span>
                    <span>{calculateSubtotal() > 1500 ? "Бесплатно" : "199 ₽"}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between mb-2 text-green-600">
                      <span>Скидка</span>
                      <span>-{(calculateSubtotal() * discount).toFixed(0)} ₽</span>
                    </div>
                  )}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between font-semibold">
                    <span>Итого</span>
                    <span>{calculateTotal().toFixed(0)} ₽</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Label htmlFor="promo" className="text-sm">Промокод</Label>
                  <div className="flex mt-1">
                    <Input 
                      id="promo" 
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button 
                      onClick={applyPromoCode}
                      className="rounded-l-none bg-red-600 hover:bg-red-700"
                    >
                      ОК
                    </Button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Для демо используйте: PIZZA20 или WELCOME
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={handleCheckout}
                >
                  Оформить заказ
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
