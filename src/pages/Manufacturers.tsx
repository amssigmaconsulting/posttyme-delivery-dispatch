import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Globe, BarChart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ManufacturersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expand Your Reach with 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> PosTym</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect directly with retailers and distributors nationwide. 
            Scale your manufacturing business with our comprehensive distribution network.
          </p>
          <Button size="lg" className="mr-4" asChild>
            <Link to="/join-network">Join Our Network</Link>
          </Button>
          <Button variant="outline" size="lg">
            See Success Stories
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Manufacturers Partner with Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Market Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access new markets and reach retailers across the country through our platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed insights into your sales performance and market trends.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Factory className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Production Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Demand forecasting and inventory management to optimize production.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Guaranteed payments and financial protection for all transactions.
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
              <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Easy onboarding process with dedicated support team</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">API integration with your existing ERP and inventory systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Real-time order management and fulfillment tracking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Automated invoicing and payment processing</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to scale your business?</h3>
              <p className="text-muted-foreground mb-6">
                Join our network of successful manufacturers and grow your reach.
              </p>
              <Button>Apply to Join</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManufacturersPage;