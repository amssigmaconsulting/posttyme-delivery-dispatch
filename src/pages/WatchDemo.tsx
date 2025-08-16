import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, ArrowRight, Monitor, Smartphone, Users } from "lucide-react";

const WatchDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              See PosTym 
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                In Action
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch how PosTym streamlines B2B logistics and transforms delivery 
              operations for businesses like yours.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-background/50 backdrop-blur-sm">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-20" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 hover:bg-primary/30 transition-colors cursor-pointer">
                    <Play className="h-10 w-10 text-primary ml-1" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Platform Overview Demo
                  </h3>
                  <p className="text-muted-foreground">
                    5 minute walkthrough of key features
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">What You'll See:</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <Monitor className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Dashboard Overview</h4>
                      <p className="text-sm text-muted-foreground">Real-time analytics and controls</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Mobile Experience</h4>
                      <p className="text-sm text-muted-foreground">On-the-go delivery management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Partner Network</h4>
                      <p className="text-sm text-muted-foreground">Connect with verified partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features Demo</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Real-Time Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  See live order tracking, delivery status, and analytics at a glance.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Feature
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Partner Management</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with verified delivery partners and manage relationships.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Feature
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Mobile App</h3>
                <p className="text-muted-foreground mb-4">
                  Manage deliveries on-the-go with our mobile application.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Feature
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
            
            <Card className="p-8">
              <blockquote className="text-xl text-muted-foreground mb-6 italic">
                "PosTym transformed our delivery operations. The platform is intuitive, 
                reliable, and has significantly improved our customer satisfaction rates."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Operations Manager, FastGoods Inc.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the platform yourself with a free trial or schedule a personalized demo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="min-w-48">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
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

export default WatchDemo;