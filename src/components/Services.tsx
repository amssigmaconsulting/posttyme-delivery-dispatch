import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Shield, BarChart3, Users, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Bulk B2B Delivery",
      description: "Efficient transportation of goods from manufacturers to retailers with specialized handling for bulk orders.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Scheduled Restocking",
      description: "Regular delivery schedules to keep retail inventory stocked with automated reorder systems.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Secure Chain",
      description: "End-to-end supply chain security with insurance coverage and real-time tracking for valuable merchandise.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights for manufacturers and retailers with delivery analytics and inventory management.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Partner Network",
      description: "Dedicated support connecting verified manufacturers with trusted retailers across our network.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "National Coverage",
      description: "Extensive delivery network covering manufacturing hubs to retail locations nationwide.",
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
            Complete B2B logistics solutions connecting manufacturers with retailers efficiently
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