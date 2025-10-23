import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  name: string;
  price: string;
  images: string[];
  onBuyClick: () => void;
  buyText: string;
}

export const ProductCard = ({
  name,
  price,
  images,
  onBuyClick,
  buyText,
}: ProductCardProps) => {
  const { t, language } = useLanguage();

  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] bg-card">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image}
                  alt={`${name} - ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-muted/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Arrows removed */}
      </Carousel>

      <CardContent className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
        <p className="text-primary text-xl font-semibold">{price}</p>
        <p
          className={`font-medium mt-1 text-sm ${
            language === "ar"
              ? "text-green-600"
              : language === "fr"
              ? "text-green-600"
              : "text-green-600"
          }`}
        >
          🚚 {t("liv")}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={onBuyClick}
          className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold transition-all duration-300"
          size="lg"
        >
          {buyText}
        </Button>
      </CardFooter>
    </Card>
  );
};
