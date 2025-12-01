import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  itemCount: number;
}

const CategoryCard = ({ title, description, image, link, itemCount }: CategoryCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden card-glass p-0">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium mb-3">
              {itemCount}+ Items
            </span>
            <h3 className="text-3xl font-display text-background mb-2">{title}</h3>
            <p className="text-background/70 text-sm mb-4">{description}</p>
            <div className="flex items-center gap-2 text-accent font-medium">
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
