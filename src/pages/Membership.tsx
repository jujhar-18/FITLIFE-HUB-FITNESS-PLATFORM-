import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

const Membership = () => {
  const plans = [
    {
      title: "Basic",
      price: "$29",
      period: "month",
      features: [
        "Access to gym facilities",
        "Basic workout plans",
        "Mobile app access",
        "Monthly fitness assessment",
        "Community support",
      ],
    },
    {
      title: "Standard",
      price: "$59",
      period: "month",
      popular: true,
      features: [
        "Everything in Basic",
        "Personalized workout plans",
        "Nutrition guidance",
        "Bi-weekly trainer consultations",
        "Access to all group classes",
        "Progress tracking tools",
      ],
    },
    {
      title: "Premium",
      price: "$99",
      period: "month",
      features: [
        "Everything in Standard",
        "1-on-1 personal training (4 sessions/month)",
        "Custom meal planning",
        "Weekly check-ins with nutritionist",
        "Priority class booking",
        "Guest passes (2 per month)",
        "Recovery & wellness services",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choose Your Membership Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invest in yourself with a plan that fits your goals and lifestyle
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              All plans include a 7-day money-back guarantee. Cancel anytime, no questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                No long-term contracts
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Flexible payment options
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Student & military discounts available
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
