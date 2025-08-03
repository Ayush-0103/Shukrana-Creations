import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Crafted with Love',
      description: 'Every piece is made with passion and attention to detail',
    },
    {
      icon: Leaf,
      title: 'Natural Materials',
      description: 'We use eco-friendly and sustainable materials',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Supporting local artisans and traditional crafts',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Each item meets our high standards of excellence',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About Shukrana Creations
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a passion for preserving traditional craftsmanship, Shukrana Creations 
              brings you authentic handmade artifacts that celebrate the beauty of natural materials 
              and time-honored techniques.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our founder's journey began with a simple belief: that handmade items carry a special 
              energy and story that mass-produced goods simply cannot replicate. Each piece in our 
              collection is thoughtfully designed and lovingly crafted to bring warmth and character 
              to your home.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We take pride in supporting local artisans and using sustainable materials, ensuring 
              that every purchase contributes to preserving traditional crafts while being mindful 
              of our environmental impact.
            </p>
            
            <Button size="lg" className="text-lg px-8 py-6">
              Learn More About Our Process
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="hover:shadow-soft transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;