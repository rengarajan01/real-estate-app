import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
}

export const PropertyCard = ({
  image,
  title,
  price,
  location,
  beds,
  baths,
  area,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-display text-xl mb-2">{title}</h3>
        <p className="text-2xl font-semibold text-primary mb-2">{price}</p>
        <p className="text-muted-foreground mb-4">{location}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{area}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};