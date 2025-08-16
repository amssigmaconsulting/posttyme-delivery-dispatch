import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Network, Target, Zap } from "lucide-react";

const DistributorsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Optimize Your 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Distribution Network</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bridge manufacturers and retailers with intelligent distribution solutions. 
            Maximize efficiency and minimize costs with our advanced logistics platform.
          </p>
          <Button size="lg" className="mr-4">
            Partner With Us
          </Button>
          <Button variant="outline" size="lg">
            View Platform Demo
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Distributors Trust PosTym</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Network className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Network Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered route optimization and warehouse management for maximum efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Demand Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Smart algorithms to match supply with demand across your distribution network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Fleet Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time tracking and management of your delivery fleet and logistics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Instant Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time visibility into inventory levels, orders, and delivery status.
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
              <h2 className="text-3xl font-bold mb-6">Advanced Distribution Tools</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Multi-warehouse inventory management and allocation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Automated order processing and fulfillment workflows</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Performance analytics and KPI tracking dashboards</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Integration with existing WMS and ERP systems</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to streamline operations?</h3>
              <p className="text-muted-foreground mb-6">
                Transform your distribution business with our intelligent platform.
              </p>
              <Button>Request Demo</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DistributorsPage;