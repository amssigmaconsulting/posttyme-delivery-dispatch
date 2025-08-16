import { Badge } from "@/components/ui/badge";
import { Package, MapPin, Truck, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Package,
      step: "01",
      title: "Manufacturer Lists Products",
      description: "Producers upload product inventory with pricing and delivery requirements to our platform.",
      color: "bg-primary text-primary-foreground"
    },
    {
      icon: MapPin,
      step: "02", 
      title: "Retailer Places Order",
      description: "Retailers browse products and place bulk orders with specified delivery locations.",
      color: "bg-accent text-accent-foreground"
    },
    {
      icon: Truck,
      step: "03",
      title: "Logistics Coordination",
      description: "Our system matches orders with optimal delivery routes and trusted logistics partners.",
      color: "bg-primary text-primary-foreground"
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Delivery & Confirmation",
      description: "Goods delivered to retailer with digital confirmation and inventory update notifications.",
      color: "bg-accent text-accent-foreground"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple. Fast. Reliable.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting manufacturers with retailers through our efficient B2B logistics platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-border z-0 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                </div>
              )}
              
              <div className="relative z-10 bg-card rounded-2xl p-8 shadow-feature hover:shadow-elevated transition-smooth border border-border/50 group-hover:border-primary/20">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted text-foreground font-bold text-lg mb-4">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-6 group-hover:scale-110 transition-bounce`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;