import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { Dumbbell, Apple, Users, Calculator } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Expert Workouts",
      description: "Access hundreds of professional workout plans designed by certified trainers for all fitness levels.",
    },
    {
      icon: Apple,
      title: "Nutrition Guidance",
      description: "Personalized meal plans and diet strategies to fuel your body and achieve your goals faster.",
    },
    {
      icon: Users,
      title: "Professional Trainers",
      description: "Work with experienced fitness professionals who are dedicated to your success and progress.",
    },
    {
      icon: Calculator,
      title: "Progress Tracking",
      description: "Monitor your journey with our BMI calculator and comprehensive fitness tracking tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              FitLife Hub provides comprehensive tools and resources to help you achieve your fitness goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
