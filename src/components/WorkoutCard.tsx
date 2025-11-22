import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkoutCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
}

const WorkoutCard = ({ id, title, description, duration, difficulty, image }: WorkoutCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-500";
      case "Intermediate":
        return "text-yellow-500";
      case "Advanced":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] bg-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${title} workout`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-4 text-sm text-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            {duration}
          </span>
          <span className={`flex items-center gap-1 ${getDifficultyColor()}`}>
            <TrendingUp className="h-4 w-4" />
            {difficulty}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to={`/workouts/${id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
