import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RefreshCw, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { products, categories } from "@/data/products";

const Index = () => {
  const featuredProducts = products.filter((p) => p.isTrending).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders above ₹999",
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "100% original products",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "7-day return policy",
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description: "50K+ happy customers",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <HeroBanner />

      {/* Features Strip */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {feature.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
              Shop by Category
            </span>
            <h2 className="text-4xl sm:text-5xl font-display mb-4">
              EXPLORE THE <span className="gradient-text">COLLECTION</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Premium streetwear for every generation. Find your perfect style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  link={`/shop/${category.id}`}
                  itemCount={category.itemCount}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
                🔥 Trending Now
              </span>
              <h2 className="text-4xl sm:text-5xl font-display">
                BEST <span className="gradient-text">SELLERS</span>
              </h2>
            </div>
            <Link
              to="/shop/trending"
              className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  category={product.category}
                  isNew={product.isNew}
                  isTrending={product.isTrending}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
                ✨ Just Dropped
              </span>
              <h2 className="text-4xl sm:text-5xl font-display">
                NEW <span className="gradient-text">ARRIVALS</span>
              </h2>
            </div>
            <Link
              to="/shop/new-arrivals"
              className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  category={product.category}
                  isNew={product.isNew}
                  isTrending={product.isTrending}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WideWolf */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background)/0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-display mb-4">
              THE WIDEWOLF <span className="text-accent">DIFFERENCE</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're not just another clothing brand. We're a movement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧵",
                title: "Premium Fabric",
                description: "100% organic cotton that feels like a cloud",
              },
              {
                icon: "✂️",
                title: "Modern Fits",
                description: "Oversized & relaxed fits for ultimate comfort",
              },
              {
                icon: "🎨",
                title: "Bold Prints",
                description: "Durable printing that never fades",
              },
              {
                icon: "🌟",
                title: "Street Style",
                description: "Trendy designs that turn heads",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl border border-muted-foreground/20 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-shimmer" />
            
            <div className="relative z-10 py-16 px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-display text-primary-foreground mb-4">
                JOIN THE PACK
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Get 15% off your first order and exclusive access to new drops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                />
                <button className="px-8 py-4 rounded-2xl bg-foreground text-background font-semibold hover:bg-background hover:text-foreground transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
