
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterX, SlidersHorizontal } from "lucide-react";
import { Category, Ingredient, FilterState } from "@/types/menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

interface PizzaFiltersProps {
  categories: Category[];
  ingredients: Ingredient[];
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

const PizzaFilters = ({
  categories,
  ingredients,
  filters,
  onFilterChange,
}: PizzaFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState<FilterState>(filters);
  
  const handlePriceChange = (value: number[]) => {
    setTempFilters((prev) => ({
      ...prev,
      priceRange: value,
    }));
  };

  const handleIngredientToggle = (ingredientId: string) => {
    setTempFilters((prev) => {
      const newIngredients = prev.ingredients.includes(ingredientId)
        ? prev.ingredients.filter((id) => id !== ingredientId)
        : [...prev.ingredients, ingredientId];
      return {
        ...prev,
        ingredients: newIngredients,
      };
    });
  };

  const applyFilters = () => {
    onFilterChange(tempFilters);
    setIsOpen(false);
  };

  const resetFilters = () => {
    const resetFilters = {
      category: "",
      ingredients: [],
      priceRange: [0, 2000],
      sortBy: "popular",
    };
    setTempFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.category) count++;
    if (filters.ingredients.length > 0) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 2000) count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-50"
              >
                <SlidersHorizontal size={16} />
                Фильтры
                {activeFiltersCount > 0 && (
                  <span className="ml-1 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Фильтры меню</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Категории</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant={tempFilters.category === "" ? "default" : "outline"}
                      className={
                        tempFilters.category === ""
                          ? "bg-red-600 hover:bg-red-700"
                          : "border-red-600 text-red-600 hover:bg-red-50"
                      }
                      onClick={() =>
                        setTempFilters((prev) => ({ ...prev, category: "" }))
                      }
                    >
                      Все
                    </Button>
                    {categories.map((cat) => (
                      <Button
                        key={cat.id}
                        size="sm"
                        variant={
                          tempFilters.category === cat.id ? "default" : "outline"
                        }
                        className={
                          tempFilters.category === cat.id
                            ? "bg-red-600 hover:bg-red-700"
                            : "border-red-600 text-red-600 hover:bg-red-50"
                        }
                        onClick={() =>
                          setTempFilters((prev) => ({
                            ...prev,
                            category: cat.id,
                          }))
                        }
                      >
                        {cat.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">
                    Ценовой диапазон: {tempFilters.priceRange[0]} - {tempFilters.priceRange[1]} ₽
                  </h3>
                  <Slider
                    defaultValue={tempFilters.priceRange}
                    min={0}
                    max={2000}
                    step={50}
                    value={tempFilters.priceRange}
                    onValueChange={handlePriceChange}
                    className="py-4"
                  />
                </div>

                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="ingredients">
                    <AccordionTrigger className="text-sm font-medium">
                      Ингредиенты
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        {ingredients.map((ing) => (
                          <div key={ing.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`ingredient-${ing.id}`}
                              checked={tempFilters.ingredients.includes(ing.id)}
                              onCheckedChange={() => handleIngredientToggle(ing.id)}
                            />
                            <Label htmlFor={`ingredient-${ing.id}`}>{ing.name}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <SheetFooter className="pt-4 flex flex-col gap-3 sm:flex-col">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={applyFilters}
                >
                  Применить фильтры
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-50"
                  onClick={resetFilters}
                >
                  Сбросить все
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center gap-1"
              onClick={resetFilters}
            >
              <FilterX size={16} />
              Сбросить
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Сортировка:</span>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => onFilterChange({ sortBy: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сортировать по" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">По популярности</SelectItem>
              <SelectItem value="price-low">Сначала дешевле</SelectItem>
              <SelectItem value="price-high">Сначала дороже</SelectItem>
              <SelectItem value="name">По названию</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PizzaFilters;
