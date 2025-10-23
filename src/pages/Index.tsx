import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { OrderModal } from "@/components/OrderModal";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GallerySection } from "@/components/GallerySection";
import { useLanguage } from "@/contexts/LanguageContext";
import keffiyehWhite from "@/assets/keffiyeh-white.jpg";
import keffiyehBlack from "@/assets/keffiyeh-black.jpg";
import keffiyehRed from "@/assets/keffiyeh-red.jpg";

const Index = () => {
  const { t, language } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const products = [
    {
      id: "white",
      name: t("whiteKeffiyeh"),
      price: "149 درهم / MAD",
      images: [keffiyehWhite,],
    },
    {
      id: "black",
      name: t("blackKeffiyeh"),
      price: "149 درهم / MAD",
      images: [keffiyehBlack, ],
    },
    {
      id: "red",
      name: t("redKeffiyeh"),
      price: "149 درهم / MAD",
      images: [keffiyehRed,],
    },
  ];

  const handleBuyClick = (productName: string) => {
    setSelectedProduct(productName);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      <LanguageSwitcher />
      
      <HeroSection />
      
      <section id="products" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-up">
            {t("productsTitle")}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  
                  images={product.images}
                  onBuyClick={() => handleBuyClick(product.name)}
                  buyText={t("buyNow")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <GallerySection />
      
      <ContactSection />
      
      <Footer />
      
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default Index;
