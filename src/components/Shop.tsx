import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import wallDecorImage from '@/assets/wall-decor.jpg';
import giftsAccessoriesImage from '@/assets/gifts-accessories.jpg';
import customOrdersImage from '@/assets/custom-orders.jpg';

const Shop = () => {
  const categories = [
    {
      title: 'Wall Decor',
      description: 'Beautiful handcrafted pieces to transform your walls',
      image: wallDecorImage,
      items: ['Macrame Wall Hangings', 'Wooden Signs', 'Decorative Mirrors', 'Art Frames'],
    },
    {
      title: 'Gifts & Accessories',
      description: 'Thoughtful handmade gifts for your loved ones',
      image: giftsAccessoriesImage,
      items: ['Jewelry', 'Candles', 'Decorative Boxes', 'Keychains'],
    },
    {
      title: 'Custom Orders',
      description: 'Personalized creations made just for you',
      image: customOrdersImage,
      items: ['Name Plates', 'Wedding Decor', 'Anniversary Gifts', 'Baby Items'],
    },
  ];

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each piece is lovingly handcrafted using natural materials and traditional techniques, 
            bringing you unique items that tell a story.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={category.title} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8 py-6">
            Browse All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;