import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'The handcrafted wall decor I ordered exceeded my expectations! The attention to detail and quality is amazing. It has become the centerpiece of my living room.',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Ordered a custom nameplate for our new home. The craftsmanship is exceptional and the personal touch made it extra special. Highly recommend!',
    },
    {
      name: 'Meera Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'Beautiful handmade gifts for my daughter\'s wedding. Each piece was unique and made with so much love. The guests were impressed!',
    },
    {
      name: 'Arjun Singh',
      location: 'Pune',
      rating: 5,
      text: 'Fast delivery and excellent packaging. The macrame wall hanging is gorgeous and adds such a warm touch to our bedroom. Will definitely order again!',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their experience with Shukrana Creations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;