import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Weight Loss Success",
    content: "FitLife Hub transformed my life! I lost 30 pounds in 4 months with their personalized workout plans and nutrition guidance. The trainers are incredible!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Muscle Gain Journey",
    content: "The workout programs are scientifically designed and really effective. I've gained 15 pounds of muscle and feel stronger than ever. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Fitness Enthusiast",
    content: "Best decision I ever made! The community is supportive, the facilities are top-notch, and the results speak for themselves. Love FitLife Hub!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Marathon Runner",
    content: "Their cardio and endurance programs helped me complete my first marathon. The trainers understand individual goals and tailor workouts accordingly.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real people achieving real results
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
