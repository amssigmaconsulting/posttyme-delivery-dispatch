import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Users, Truck, BarChart3, Shield, CheckCircle } from "lucide-react";

const HowItWorksPage = () => {
  const benefits = [
    {
      icon: Package,
      title: "Streamlined Operations",
      description: "Automate your logistics with our intelligent platform that handles everything from order processing to delivery confirmation.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get dedicated account managers and 24/7 support to ensure your logistics operations run smoothly.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "All shipments are fully insured and tracked with our advanced security protocols protecting your valuable goods.",
      color: "text-primary"
    }
  ];

  const features = [
    {
      title: "Real-Time Tracking",
      description: "Monitor every shipment with live GPS tracking and automated status updates."
    },
    {
      title: "Flexible Scheduling",
      description: "Schedule deliveries according to your business needs with our flexible timing options."
    },
    {
      title: "Bulk Ordering",
      description: "Handle large volume orders efficiently with our bulk processing capabilities."
    },
    {
      title: "Analytics Dashboard",
      description: "Access detailed insights about your delivery patterns and optimize your logistics."
    },
    {
      title: "Quality Control",
      description: "Ensure product quality with our inspection services at pickup and delivery."
    },
    {
      title: "Multi-Modal Transport",
      description: "Utilize various transportation methods for optimal cost and time efficiency."
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
              How It Works
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Simple Process,
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Powerful Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our streamlined B2B logistics platform connects manufacturers with retailers 
              through an efficient, transparent, and reliable delivery process.
            </p>
            <Button variant="hero" size="lg" className="min-w-48">
              Start Your Journey
            </Button>
          </div>
        </section>

        {/* Main Process */}
        <HowItWorks />

        {/* Key Benefits */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose PosTym?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the advantages of modern B2B logistics technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-feature transition-smooth border-border/50 hover:border-primary/20 bg-card text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-accent-light group-hover:scale-110 transition-bounce">
                      <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools designed for modern B2B logistics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-feature transition-smooth border-border/50 hover:border-primary/20 bg-card">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of manufacturers and retailers who trust PosTym 
              for their logistics needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-card border-border/50 text-center">
                <div className="text-2xl font-bold text-primary mb-2">1</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Sign Up
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create your account and tell us about your business needs
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border/50 text-center">
                <div className="text-2xl font-bold text-accent mb-2">2</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Setup
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our team helps you configure your logistics preferences
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border/50 text-center">
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Launch
                </h3>
                <p className="text-muted-foreground text-sm">
                  Start processing orders and tracking deliveries immediately
                </p>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="min-w-48">
                Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="min-w-48">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;