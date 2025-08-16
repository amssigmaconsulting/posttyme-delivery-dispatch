import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Shield, BarChart3, Users, MapPin, Package, Globe, CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const additionalServices = [
    {
      icon: Package,
      title: "Cold Chain Logistics",
      description: "Temperature-controlled delivery for pharmaceuticals, food products, and sensitive materials.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Cross-Border Delivery",
      description: "International shipping solutions with customs handling and documentation support.",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Product inspection and quality control services at pickup and delivery points.",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Complete B2B
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Logistics Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From manufacturers to retailers, we provide comprehensive delivery services 
              that keep your supply chain moving efficiently.
            </p>
            <Button variant="hero" size="lg" className="min-w-48">
              Request Quote
            </Button>
          </div>
        </section>

        {/* Main Services */}
        <Services />

        {/* Additional Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Specialized Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced logistics solutions for specialized industry requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;