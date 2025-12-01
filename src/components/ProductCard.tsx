import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isTrending?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isTrending,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image, quantity: 1, size: "M" });
    toast.success("Added to cart!");
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist!");
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Link
      to={`/product/${id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-glass p-4">
        {/* Image Container */}
        <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                NEW
              </span>
            )}
            {isTrending && (
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                TRENDING
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isWishlisted
                ? "bg-destructive text-destructive-foreground"
                : "glass hover:bg-destructive hover:text-destructive-foreground"
            }`}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
          </button>

          {/* Quick Actions */}
          <div
            className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-primary transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
            <button className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
          <h3 className="font-semibold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
