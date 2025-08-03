import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-primary-foreground/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Subscribe to our newsletter for updates on new collections, exclusive offers, and crafting tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary border-0"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold mb-4">
              Shukrana Creations
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Handcrafted with love, our unique artifacts bring warmth and character to your home. 
              Each piece tells a story of traditional craftsmanship and natural beauty.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About Us', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-lg">Categories</h4>
            <ul className="space-y-3">
              {['Wall Decor', 'Gifts & Accessories', 'Custom Orders', 'Macrame', 'Wooden Crafts'].map((category) => (
                <li key={category}>
                  <a href="#shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 mb-4 sm:mb-0">
            © 2024 Shukrana Creations. Made with{' '}
            <Heart className="inline h-4 w-4 fill-current mx-1" />
            in India
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;