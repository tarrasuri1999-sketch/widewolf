export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isTrending?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Oversized Wolf Tee",
    price: 1299,
    originalPrice: 1699,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    ],
    category: "Men",
    subcategory: "Oversized T-shirts",
    description: "Premium cotton oversized tee with bold wolf graphic print. Perfect for streetwear enthusiasts.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    isNew: true,
    isTrending: true,
    rating: 4.8,
    reviews: 234,
  },
  {
    id: "2",
    name: "Urban Street Hoodie",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    ],
    category: "Men",
    subcategory: "Hoodies",
    description: "Comfortable fleece hoodie with minimalist design. Essential for every wardrobe.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey"],
    isTrending: true,
    rating: 4.9,
    reviews: 189,
  },
  {
    id: "3",
    name: "Junior Wolf Pack Tee",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    ],
    category: "Boys",
    subcategory: "T-shirts",
    description: "Cool and comfortable tee designed for active boys who love style.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Blue"],
    isNew: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Kids Adventure Shorts",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    ],
    category: "Kids",
    subcategory: "Shorts",
    description: "Durable and comfortable shorts perfect for playtime adventures.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Navy", "Khaki", "Black"],
    rating: 4.6,
    reviews: 98,
  },
  {
    id: "5",
    name: "Premium Cargo Shorts",
    price: 1499,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&q=80",
    ],
    category: "Men",
    subcategory: "Shorts",
    description: "Functional cargo shorts with multiple pockets. Street style essential.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Beige"],
    isTrending: true,
    rating: 4.8,
    reviews: 167,
  },
  {
    id: "6",
    name: "Teen Street Joggers",
    price: 1799,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    ],
    category: "Boys",
    subcategory: "Joggers",
    description: "Trendy joggers for the fashion-forward teen. Comfort meets style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"],
    isNew: true,
    rating: 4.7,
    reviews: 134,
  },
  {
    id: "7",
    name: "Graphic Print Hoodie",
    price: 2299,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80",
    ],
    category: "Men",
    subcategory: "Hoodies",
    description: "Bold graphic hoodie that makes a statement. Stand out from the crowd.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    isNew: true,
    isTrending: true,
    rating: 4.9,
    reviews: 212,
  },
  {
    id: "8",
    name: "Kids Colorful Tee Set",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
    ],
    category: "Kids",
    subcategory: "T-shirts",
    description: "Pack of 3 colorful tees. Fun designs that kids love.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Multi"],
    rating: 4.8,
    reviews: 245,
  },
];

export const categories = [
  {
    id: "men",
    title: "Men",
    description: "Bold streetwear for the modern man",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    itemCount: 150,
  },
  {
    id: "boys",
    title: "Boys",
    description: "Trendy styles for young fashionistas",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80",
    itemCount: 80,
  },
  {
    id: "kids",
    title: "Kids",
    description: "Comfortable & playful designs",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
    itemCount: 60,
  },
];
