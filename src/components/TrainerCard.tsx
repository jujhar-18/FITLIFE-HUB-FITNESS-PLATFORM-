import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface TrainerCardProps {
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
}

const TrainerCard = ({ name, specialization, experience, bio, image }: TrainerCardProps) => {
  return (
    <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] bg-card">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${specialization} trainer`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-primary">{specialization}</CardDescription>
        <p className="text-sm text-muted-foreground">{experience} years experience</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{bio}</p>
        <div className="flex gap-3">
          <a
            href="#"
            className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`${name}'s Facebook`}
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`${name}'s Instagram`}
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`${name}'s Twitter`}
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainerCard;
