import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Shield, BarChart3, Users, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Same-Day Delivery",
      description: "Fast, reliable delivery service for urgent packages and documents within the city.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Scheduled Delivery",
      description: "Plan ahead with our scheduled delivery service for recurring or time-sensitive shipments.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "End-to-end tracking and insurance coverage for valuable and sensitive deliveries.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Business Solutions",
      description: "Customized delivery solutions for businesses with volume discounts and analytics.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "24/7 customer support to help you track packages and resolve any issues quickly.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Extensive delivery network covering all major areas with real-time GPS tracking.",
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive delivery solutions designed to meet all your shipping needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-feature transition-smooth border-border/50 hover:border-primary/20 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent-light group-hover:scale-110 transition-bounce">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;