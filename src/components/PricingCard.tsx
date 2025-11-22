import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, period, features, popular }: PricingCardProps) => {
  return (
    <Card
      className={`relative hover:border-primary/50 transition-all duration-300 bg-card ${
        popular ? "border-primary shadow-[0_0_30px_rgba(0,255,0,0.2)]" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-5xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground ml-2">/{period}</span>
        </div>
        <CardDescription className="mt-2 text-muted-foreground">
          Perfect for {title.toLowerCase()} fitness enthusiasts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className={`w-full ${
            popular
              ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          <Link to="/contact">Contact for Signup</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
