import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple } from "lucide-react";
import { Link } from "react-router-dom";

interface DietCardProps {
  id: string;
  title: string;
  description: string;
  calories: string;
  goal: string;
}

const DietCard = ({ id, title, description, calories, goal }: DietCardProps) => {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] bg-card">
      <CardHeader>
        <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
          <Apple className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Daily Calories:</span>
          <span className="font-semibold text-foreground">{calories}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Goal:</span>
          <span className="font-semibold text-primary">{goal}</span>
        </div>
        <Button asChild className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to={`/diet-plans/${id}`}>
            View Plan
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DietCard;
