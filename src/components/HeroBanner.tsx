import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">New Collection 2024</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display leading-none mb-6 animate-slide-up">
              WIDE
              <span className="gradient-text">WOLF</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Fearless Fashion for <span className="text-foreground font-semibold">Men</span>, <span className="text-foreground font-semibold">Boys</span> & <span className="text-foreground font-semibold">Kids</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/shop/new-arrivals" className="btn-premium inline-flex items-center justify-center gap-2 group">
                Shop New Arrivals
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/shop/trending" 
                className="px-8 py-4 rounded-2xl font-semibold border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Explore Trending
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div>
                <div className="text-3xl sm:text-4xl font-display gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80" 
                    alt="WideWolf Premium Streetwear"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-xl">🔥</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Best Seller</div>
                    <div className="text-xs text-muted-foreground">Oversized Tee</div>
                  </div>
                </div>
              </div>
              
              {/* Price Tag */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-xs text-muted-foreground">Starting at</div>
                <div className="text-xl font-bold gradient-text">₹999</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-border/50 rounded-full -z-10 animate-spin" style={{ animationDuration: "30s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
