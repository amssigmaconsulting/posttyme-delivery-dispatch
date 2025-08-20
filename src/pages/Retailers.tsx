import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, TrendingUp, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const RetailersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reliable Supply for 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Retailers</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get consistent, timely deliveries from manufacturers and distributors. 
            Keep your shelves stocked with our efficient supply chain solutions.
          </p>
          <Button size="lg" className="mr-4" asChild>
            <Link to="/retailer-register">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Retailers Choose PosTym</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Store className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Stock Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time inventory tracking and automated reordering to prevent stockouts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Cost Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Competitive pricing and volume discounts directly from manufacturers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Package className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Verified suppliers and quality control at every step of the supply chain.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Same-day and next-day delivery options to keep your business running.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Streamlined Ordering Process</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Browse our extensive catalog of products from verified manufacturers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Place orders with just a few clicks through our intuitive platform</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Track shipments in real-time and get delivery notifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Manage invoices and payments through our integrated system</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to optimize your supply chain?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of retailers who trust PosTym for their supply needs.
              </p>
              <Button asChild>
                <Link to="/retailer-register">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailersPage;