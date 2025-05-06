
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pizza } from "@/types/menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const sizeOptions = [
  { id: "small", name: "Маленькая (25 см)", priceMultiplier: 0.8 },
  { id: "medium", name: "Средняя (30 см)", priceMultiplier: 1 },
  { id: "large", name: "Большая (35 см)", priceMultiplier: 1.2 },
];

const extraToppings = [
  { id: "cheese", name: "Дополнительный сыр", price: 59 },
  { id: "pepperoni", name: "Дополнительная пепперони", price: 79 },
  { id: "mushrooms", name: "Грибы", price: 49 },
  { id: "olives", name: "Оливки", price: 39 },
  { id: "jalapeno", name: "Халапеньо", price: 39 },
];

interface PizzaCardProps {
  pizza: Pizza;
  onAddToCart: (pizza: Pizza, size: string, extras: string[]) => void;
}

const PizzaCard = ({ pizza, onAddToCart }: PizzaCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  
  const handleAddTopping = (toppingId: string) => {
    setSelectedExtras(prev => {
      if (prev.includes(toppingId)) {
        return prev.filter(id => id !== toppingId);
      } else {
        return [...prev, toppingId];
      }
    });
  };
  
  const calculateTotalPrice = () => {
    const sizeMultiplier = sizeOptions.find(s => s.id === selectedSize)?.priceMultiplier || 1;
    const basePrice = pizza.price * sizeMultiplier;
    
    const extrasPrice = selectedExtras.reduce((sum, extraId) => {
      const extra = extraToppings.find(t => t.id === extraId);
      return sum + (extra?.price || 0);
    }, 0);
    
    return Math.round(basePrice + extrasPrice);
  };
  
  const handleAddToCart = () => {
    const customizedPizza = {
      ...pizza,
      size: selectedSize,
      extras: selectedExtras,
      finalPrice: calculateTotalPrice()
    };
    onAddToCart(customizedPizza, selectedSize, selectedExtras);
    setIsDialogOpen(false);
    setSelectedSize("medium");
    setSelectedExtras([]);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={pizza.image} 
            alt={pizza.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {pizza.isNew && (
            <Badge className="absolute top-2 left-2 bg-red-600">Новинка</Badge>
          )}
          {pizza.isPopular && (
            <Badge className="absolute top-2 left-2 bg-amber-500">Хит продаж</Badge>
          )}
        </div>
        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{pizza.name}</h3>
            <span className="font-bold text-red-600">{pizza.price} ₽</span>
          </div>
          <p className="text-gray-600 text-sm mb-3 h-12 overflow-hidden">
            {pizza.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-4">
            {pizza.ingredients.slice(0, 4).map((ingredient, idx) => (
              <Badge key={idx} variant="outline" className="text-xs bg-gray-50">
                {ingredient}
              </Badge>
            ))}
            {pizza.ingredients.length > 4 && (
              <Badge variant="outline" className="text-xs bg-gray-50">
                +{pizza.ingredients.length - 4}
              </Badge>
            )}
          </div>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            Выбрать
          </Button>
        </CardContent>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{pizza.name}</DialogTitle>
            <DialogDescription>
              Настройте свою пиццу, выбрав размер и дополнительные ингредиенты
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <h4 className="text-sm font-medium mb-3">Размер пиццы</h4>
              <RadioGroup 
                value={selectedSize} 
                onValueChange={setSelectedSize}
                className="space-y-2"
              >
                {sizeOptions.map(size => (
                  <div key={size.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value={size.id} id={`size-${size.id}`} />
                      <Label htmlFor={`size-${size.id}`}>{size.name}</Label>
                    </div>
                    <span className="font-medium">
                      {Math.round(pizza.price * size.priceMultiplier)} ₽
                    </span>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Дополнительные ингредиенты</h4>
              <div className="space-y-2">
                {extraToppings.map(topping => (
                  <div key={topping.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id={`topping-${topping.id}`} 
                        checked={selectedExtras.includes(topping.id)}
                        onCheckedChange={() => handleAddTopping(topping.id)}
                      />
                      <Label htmlFor={`topping-${topping.id}`}>{topping.name}</Label>
                    </div>
                    <span className="font-medium">+{topping.price} ₽</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <div className="w-full flex flex-col gap-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Итого:</span>
                <span>{calculateTotalPrice()} ₽</span>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Добавить в корзину
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PizzaCard;
