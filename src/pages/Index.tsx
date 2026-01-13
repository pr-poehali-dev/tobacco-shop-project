import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { CartProvider, useCart, Product } from '@/context/CartContext';

const IndexContent = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const { cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    if (verified === 'true') {
      setIsAgeVerified(true);
      setShowModal(false);
    }
  }, []);

  const handleAgeConfirm = () => {
    localStorage.setItem('age-verified', 'true');
    setIsAgeVerified(true);
    setShowModal(false);
  };

  const handleAgeDecline = () => {
    window.location.href = 'https://google.com';
  };

  const products: Product[] = [
    {
      id: 1,
      name: 'Кальян Premium LED',
      category: 'Кальяны',
      price: 15990,
      image: 'https://cdn.poehali.dev/projects/bc8aa667-03e8-4fad-a6cd-decd97d316b3/files/d61dabd8-bcd6-4dfb-bc45-4696082339ff.jpg',
      description: 'Премиум кальян с LED-подсветкой и стеклянной колбой'
    },
    {
      id: 2,
      name: 'Табак Vibrant Mix',
      category: 'Табак',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/bc8aa667-03e8-4fad-a6cd-decd97d316b3/files/74e25061-2fd0-48c8-a0f6-8f7a772557ea.jpg',
      description: 'Ароматная смесь премиум табака, 50г'
    },
    {
      id: 3,
      name: 'Набор аксессуаров',
      category: 'Аксессуары',
      price: 2490,
      image: 'https://cdn.poehali.dev/projects/bc8aa667-03e8-4fad-a6cd-decd97d316b3/files/821429e2-5f80-4729-a3f9-20cc2a85bbc0.jpg',
      description: 'Комплект: уголь, мундштуки, щипцы'
    },
    {
      id: 4,
      name: 'Кальян Glass Pro',
      category: 'Кальяны',
      price: 12490,
      image: 'https://cdn.poehali.dev/projects/bc8aa667-03e8-4fad-a6cd-decd97d316b3/files/d61dabd8-bcd6-4dfb-bc45-4696082339ff.jpg',
      description: 'Стильный стеклянный кальян для профи'
    },
    {
      id: 5,
      name: 'Табак Sunset',
      category: 'Табак',
      price: 790,
      image: 'https://cdn.poehali.dev/projects/bc8aa667-03e8-4fad-a6cd-decd97d316b3/files/74e25061-2fd0-48c8-a0f6-8f7a772557ea.jpg',
      description: 'Фруктовый микс с нотками цитруса, 50г'
    },
    {
      id: 6,
      name: 'Уголь кокосовый',
      category: 'Аксессуары',
      price: 590,
      image: 'https://cdn.poehali.dev/projects/bc8aa667-03e8-4fad-a6cd-decd97d316b3/files/821429e2-5f80-4729-a3f9-20cc2a85bbc0.jpg',
      description: 'Натуральный кокосовый уголь, 1кг'
    }
  ];

  const categories = ['Все', 'Кальяны', 'Табак', 'Аксессуары'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (!isAgeVerified) {
    return (
      <Dialog open={showModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md" hideCloseButton>
          <DialogHeader>
            <div className="mx-auto mb-4 text-6xl">🔞</div>
            <DialogTitle className="text-center text-2xl">Подтверждение возраста</DialogTitle>
            <DialogDescription className="text-center text-base pt-4">
              Вам уже есть 18 лет?
              <br />
              <span className="text-xs text-muted-foreground mt-2 block">
                Данный сайт содержит информацию о табачной продукции
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3 sm:gap-3">
            <Button 
              onClick={handleAgeConfirm} 
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              size="lg"
            >
              Да, мне есть 18
            </Button>
            <Button 
              onClick={handleAgeDecline} 
              variant="outline" 
              className="flex-1"
              size="lg"
            >
              Нет
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">💨</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SmokeShop
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О магазине
            </a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 relative">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Корзина
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-accent">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
                <SheetDescription>
                  {totalItems === 0 ? 'Ваша корзина пуста' : `Товаров в корзине: ${totalItems}`}
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col gap-4 py-6 h-[calc(100vh-200px)] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Icon name="ShoppingBag" size={64} className="mb-4 opacity-50" />
                    <p>Добавьте товары в корзину</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <Card key={item.id} className="border-2">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                            <p className="text-lg font-bold text-primary mt-1">
                              {item.price.toLocaleString('ru-RU')} ₽
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                          <span className="ml-auto font-semibold">
                            {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <SheetFooter className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
                  <div className="w-full space-y-4">
                    <Separator />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Итого:</span>
                      <span className="text-2xl text-primary">
                        {totalPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оформить заказ
                    </Button>
                  </div>
                </SheetFooter>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Кальяны и табак премиум качества
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Широкий ассортимент кальянов, табачной продукции и аксессуаров с доставкой по России
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-8">
            Каталог товаров
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category 
                  ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                  : 'hover:border-primary'
                }
                size="lg"
              >
                <Icon 
                  name={
                    category === 'Все' ? 'Grid3x3' :
                    category === 'Кальяны' ? 'Wine' :
                    category === 'Табак' ? 'Leaf' :
                    'Wrench'
                  } 
                  size={18} 
                  className="mr-2" 
                />
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <Icon name="ShoppingBag" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">О магазине</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 text-5xl">
                  <Icon name="Award" size={48} className="mx-auto text-primary" />
                </div>
                <CardTitle>Премиум качество</CardTitle>
                <CardDescription>
                  Только сертифицированная продукция от проверенных брендов
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 text-5xl">
                  <Icon name="Truck" size={48} className="mx-auto text-secondary" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
                <CardDescription>
                  Доставка по России в течение 1-3 дней
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 text-5xl">
                  <Icon name="HeadphonesIcon" size={48} className="mx-auto text-accent" />
                </div>
                <CardTitle>Поддержка 24/7</CardTitle>
                <CardDescription>
                  Всегда готовы помочь с выбором и ответить на вопросы
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Свяжитесь с нами</CardTitle>
              <CardDescription>Мы всегда рады вашим вопросам и предложениям</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-secondary" />
                <span>info@smokeshop.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-accent" />
                <span>Москва, ул. Примерная, д. 123</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-primary" />
                <span>Ежедневно с 10:00 до 22:00</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2024 SmokeShop. Все права защищены.</p>
          <p className="text-xs">
            ⚠️ Продажа табачной продукции лицам младше 18 лет запрещена
          </p>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <CartProvider>
      <IndexContent />
    </CartProvider>
  );
};

export default Index;
