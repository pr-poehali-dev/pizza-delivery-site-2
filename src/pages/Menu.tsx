
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PizzaCard from "@/components/menu/PizzaCard";
import PizzaFilters from "@/components/menu/PizzaFilters";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { pizzas, categories, ingredients } from "@/data/pizzas";
import { Pizza, Category, Ingredient, FilterState } from "@/types/menu";

const Menu = () => {
  const navigate = useNavigate();
  const [filteredPizzas, setFilteredPizzas] = useState<Pizza[]>(pizzas);
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    ingredients: [],
    priceRange: [0, 2000],
    sortBy: "popular"
  });
  
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  
  useEffect(() => {
    // Get cart items count from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItemCount(cart.length);
  }, []);

  useEffect(() => {
    let result = [...pizzas];
    
    // Filter by category
    if (filters.category) {
      result = result.filter(pizza => pizza.category === filters.category);
    }
    
    // Filter by ingredients
    if (filters.ingredients.length > 0) {
      result = result.filter(pizza => 
        filters.ingredients.every(ing => pizza.ingredients.includes(ing))
      );
    }
    
    // Filter by price range
    result = result.filter(pizza => 
      pizza.price >= filters.priceRange[0] && pizza.price <= filters.priceRange[1]
    );
    
    // Sort
    if (filters.sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    // Default is "popular" which is the original order
    
    setFilteredPizzas(result);
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  const handleAddToCart = (pizza: Pizza) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      ...pizza,
      id: pizza.id + "-" + Date.now(), // Ensure unique ID for each cart item
      quantity: 1,
      size: "medium"
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItemCount(cart.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-red-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Наше меню</h1>
            <p className="text-lg text-gray-700 mb-6">
              Выберите пиццу из нашего разнообразного меню или создайте свою
            </p>
            
            {cartItemCount > 0 && (
              <Button 
                onClick={() => navigate("/cart")}
                className="bg-red-600 hover:bg-red-700 mb-4 flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                Перейти в корзину ({cartItemCount})
              </Button>
            )}
            
            <PizzaFilters 
              categories={categories}
              ingredients={ingredients}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPizzas.length > 0 ? (
              filteredPizzas.map(pizza => (
                <PizzaCard 
                  key={pizza.id} 
                  pizza={pizza} 
                  onAddToCart={() => handleAddToCart(pizza)} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Пиццы не найдены
                </h3>
                <p className="text-gray-600 mb-4">
                  Попробуйте изменить параметры фильтрации
                </p>
                <Button 
                  onClick={() => setFilters({
                    category: "",
                    ingredients: [],
                    priceRange: [0, 2000],
                    sortBy: "popular"
                  })}
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  Сбросить все фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
