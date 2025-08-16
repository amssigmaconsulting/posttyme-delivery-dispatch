import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get Started with
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                PosTym Today
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who trust PosTym for their delivery needs. 
              Start your journey in just a few simple steps.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">1. Create Account</h3>
                <p className="text-muted-foreground">
                  Sign up with your business details and get verified in minutes.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">2. Set Up Profile</h3>
                <p className="text-muted-foreground">
                  Complete your business profile and connect with our network.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">3. Start Delivering</h3>
                <p className="text-muted-foreground">
                  Begin processing orders and track deliveries in real-time.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose PosTym?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Reliable Network</h3>
                  <p className="text-muted-foreground">
                    Access to verified delivery partners with 98% on-time delivery rate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time Tracking</h3>
                  <p className="text-muted-foreground">
                    Monitor your deliveries every step of the way with live updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Transparent pricing with no hidden fees and bulk discounts available.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Get help whenever you need it with our dedicated support team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Delivery?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join over 2,000 businesses already using PosTym for their delivery needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="min-w-48">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="min-w-48">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;