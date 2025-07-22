import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const products = [
    {
      id: 1,
      name: "Яркая куртка Trendy",
      price: 4500,
      originalPrice: 6000,
      image: "/img/cbd035ad-4786-4036-96d3-4bc130023aed.jpg",
      brand: "YOUTH",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Оранжевый", "Синий"],
      isNew: true,
      discount: 25
    },
    {
      id: 2,
      name: "Стильные джинсы Electric",
      price: 3200,
      originalPrice: 4000,
      image: "/img/b9374198-e4fa-454f-b261-a00299fa1466.jpg",
      brand: "URBAN",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Синий", "Черный"],
      isNew: false,
      discount: 20
    },
    {
      id: 3,
      name: "Модная коллекция Mix",
      price: 5600,
      originalPrice: 7000,
      image: "/img/18f7b968-51a2-4142-96b3-0c153b26949c.jpg",
      brand: "STYLE",
      sizes: ["M", "L", "XL"],
      colors: ["Микс"],
      isNew: true,
      discount: 20
    }
  ];

  const filterProducts = () => {
    return products.filter(product => {
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSize = !selectedSize || product.sizes.includes(selectedSize);
      const matchesColor = !selectedColor || product.colors.includes(selectedColor);
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;
      
      return matchesPrice && matchesSize && matchesColor && matchesBrand;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-electric-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-navy">
                <span className="text-orange">FASHION</span> STORE
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-orange transition-colors">Главная</a>
                <a href="#" className="text-gray-700 hover:text-orange transition-colors">Каталог</a>
                <a href="#" className="text-gray-700 hover:text-orange transition-colors">Новинки</a>
                <a href="#" className="text-gray-700 hover:text-orange transition-colors">Акции</a>
                <a href="#" className="text-gray-700 hover:text-orange transition-colors">Доставка</a>
                <a href="#" className="text-gray-700 hover:text-orange transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingBag" size={20} />
                <span className="absolute -top-2 -right-2 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-navy">Молодежная</span>{" "}
              <span className="text-orange">мода</span>{" "}
              <span className="text-electric">2024</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте мир ярких трендов и стильных решений. Одежда, которая подчеркнет вашу индивидуальность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white px-8 py-4 text-lg">
                Смотреть коллекцию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-electric text-electric hover:bg-electric hover:text-white px-8 py-4 text-lg">
                Новинки и тренды
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Найдите свой стиль</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Размер</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите размер" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все размеры</SelectItem>
                  <SelectItem value="XS">XS</SelectItem>
                  <SelectItem value="S">S</SelectItem>
                  <SelectItem value="M">M</SelectItem>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="XL">XL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Цвет</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите цвет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все цвета</SelectItem>
                  <SelectItem value="Оранжевый">Оранжевый</SelectItem>
                  <SelectItem value="Синий">Синий</SelectItem>
                  <SelectItem value="Черный">Черный</SelectItem>
                  <SelectItem value="Микс">Микс</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Бренд</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите бренд" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все бренды</SelectItem>
                  <SelectItem value="YOUTH">YOUTH</SelectItem>
                  <SelectItem value="URBAN">URBAN</SelectItem>
                  <SelectItem value="STYLE">STYLE</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Цена: {priceRange[0]}₽ - {priceRange[1]}₽
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={10000}
                min={0}
                step={500}
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-navy">Каталог товаров</h2>
            <p className="text-gray-600">Найдено: {filteredProducts.length} товаров</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-electric text-white">НОВИНКА</Badge>
                    )}
                    {product.discount && (
                      <Badge className="bg-orange text-white">-{product.discount}%</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{product.brand}</Badge>
                  <h3 className="font-semibold text-lg mb-2 text-navy">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-orange">{product.price.toLocaleString()}₽</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through">{product.originalPrice.toLocaleString()}₽</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="secondary" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-navy hover:bg-navy-light text-white">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-electric-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">Новинки и тренды</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
              <Icon name="TrendingUp" size={48} className="text-orange mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Весенние тренды</h3>
              <p className="text-gray-600">Яркие цвета и смелые принты для активного образа жизни</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
              <Icon name="Star" size={48} className="text-electric mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Лимитированная коллекция</h3>
              <p className="text-gray-600">Эксклюзивные модели от ведущих дизайнеров</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
              <Icon name="Zap" size={48} className="text-navy mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Получите свой заказ уже завтра с доставкой экспресс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-orange">FASHION</span> STORE
              </h3>
              <p className="text-gray-300">Молодежная мода для смелых и стильных</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Размерная сетка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange transition-colors">Мужская одежда</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Женская одежда</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-300 mb-2">8 800 123-45-67</p>
              <p className="text-gray-300 mb-4">info@fashionstore.ru</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Fashion Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;