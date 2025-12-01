import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  User, Package, Heart, MapPin, Settings, LogOut, 
  ChevronRight, Clock, CheckCircle, Truck 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const tabs = [
    { id: "orders", label: "My Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const orders = [
    {
      id: "WW-2024-001",
      date: "Dec 15, 2024",
      status: "delivered",
      total: 2499,
      items: [
        { name: "Classic Oversized Wolf Tee", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80", quantity: 2 },
      ],
    },
    {
      id: "WW-2024-002",
      date: "Dec 10, 2024",
      status: "shipped",
      total: 1799,
      items: [
        { name: "Urban Street Hoodie", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80", quantity: 1 },
      ],
    },
    {
      id: "WW-2024-003",
      date: "Dec 5, 2024",
      status: "processing",
      total: 899,
      items: [
        { name: "Junior Wolf Pack Tee", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&q=80", quantity: 1 },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-accent" />;
      case "shipped":
        return <Truck className="w-5 h-5 text-primary" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "shipped":
        return "Shipped";
      default:
        return "Processing";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="card-glass p-6 sticky top-28">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-all duration-300">
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === "orders" && (
                <div>
                  <h1 className="text-3xl font-display mb-8">
                    MY <span className="gradient-text">ORDERS</span>
                  </h1>

                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="card-glass p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <span className="text-sm text-muted-foreground">
                              Order #{order.id}
                            </span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Placed on {order.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(order.status)}
                            <span className="font-medium">{getStatusLabel(order.status)}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 py-4 border-t border-border">
                          <div className="flex -space-x-2">
                            {order.items.map((item, index) => (
                              <img
                                key={index}
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-lg object-cover border-2 border-background"
                              />
                            ))}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">
                              {order.items.map((i) => i.name).join(", ")}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {order.items.reduce((sum, i) => sum + i.quantity, 0)} items
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">₹{order.total}</p>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-border">
                          <button className="text-sm text-primary font-medium hover:underline">
                            View Details
                          </button>
                          {order.status === "delivered" && (
                            <button className="text-sm text-primary font-medium hover:underline">
                              Reorder
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "wishlist" && (
                <div>
                  <h1 className="text-3xl font-display mb-8">
                    MY <span className="gradient-text">WISHLIST</span>
                  </h1>
                  <div className="text-center py-16">
                    <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
                    <Link to="/shop/trending" className="btn-premium inline-block">
                      Explore Products
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === "addresses" && (
                <div>
                  <h1 className="text-3xl font-display mb-8">
                    SAVED <span className="gradient-text">ADDRESSES</span>
                  </h1>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="card-glass p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                          Default
                        </span>
                        <button className="text-sm text-primary hover:underline">Edit</button>
                      </div>
                      <h3 className="font-semibold mb-2">John Doe</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Fashion Street<br />
                        Style City, SC 12345<br />
                        India
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Phone: +91 98765 43210
                      </p>
                    </div>
                    <button className="card-glass p-6 border-2 border-dashed border-border hover:border-primary transition-colors flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground">
                      <MapPin className="w-8 h-8" />
                      <span className="font-medium">Add New Address</span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div>
                  <h1 className="text-3xl font-display mb-8">
                    MY <span className="gradient-text">PROFILE</span>
                  </h1>
                  <div className="card-glass p-6 max-w-xl">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <button className="btn-premium">Save Changes</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div>
                  <h1 className="text-3xl font-display mb-8">
                    <span className="gradient-text">SETTINGS</span>
                  </h1>
                  <div className="card-glass p-6 max-w-xl space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground">Receive order updates via email</p>
                      </div>
                      <button className="w-12 h-6 rounded-full bg-primary relative">
                        <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-primary-foreground" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-muted-foreground">Receive order updates via SMS</p>
                      </div>
                      <button className="w-12 h-6 rounded-full bg-muted relative">
                        <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-muted-foreground" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Newsletter</h3>
                        <p className="text-sm text-muted-foreground">Get updates on new arrivals and offers</p>
                      </div>
                      <button className="w-12 h-6 rounded-full bg-primary relative">
                        <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-primary-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
