import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              Crafted with{' '}
              <span className="text-primary inline-flex items-center">
                Love <Heart className="h-8 w-8 ml-2 fill-current" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-6 leading-relaxed">
              by Shukrana Creations
            </p>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed max-w-lg">
              Discover unique handmade artifacts, elegant home decor, and personalized crafts that bring warmth and character to your space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="text-lg px-8 py-6">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Custom Orders
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center space-x-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>100% Handmade</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Natural Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Personalized</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Beautiful handmade crafts and home decor"
                className="w-full h-[600px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;