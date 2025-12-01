import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/shop/men" },
    { name: "Boys", path: "/shop/boys" },
    { name: "Kids", path: "/shop/kids" },
    { name: "New Arrivals", path: "/shop/new-arrivals" },
    { name: "Trending", path: "/shop/trending" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-display tracking-wider text-foreground">
              WIDE<span className="gradient-text">WOLF</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-xl hover:bg-muted transition-colors duration-300"
            >
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hidden sm:flex p-2 rounded-xl hover:bg-muted transition-colors duration-300"
            >
              <Heart className="w-5 h-5 text-muted-foreground" />
            </Link>

            {/* User */}
            <Link
              to="/dashboard"
              className="hidden sm:flex p-2 rounded-xl hover:bg-muted transition-colors duration-300"
            >
              <User className="w-5 h-5 text-muted-foreground" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-xl hover:bg-muted transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5 text-muted-foreground" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs flex items-center justify-center font-semibold">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-border/50 animate-slide-down">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-3 rounded-2xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass border-t border-border/50 animate-slide-down">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border/50" />
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                My Account
              </Link>
              <Link
                to="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
