import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Store, Shield, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const RetailerRegister = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join PosTym as a
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Retail Partner
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with verified manufacturers and distributors. Get reliable supply, 
              competitive pricing, and streamlined ordering for your retail business.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Retailers Choose PosTym</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center hover:shadow-elegant transition-shadow">
                <Store className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Stock Management</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time inventory tracking and automated reordering
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-elegant transition-shadow">
                <TrendingUp className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Direct pricing from manufacturers with volume discounts
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-elegant transition-shadow">
                <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Verified suppliers and quality control processes
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-elegant transition-shadow">
                <Clock className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Same-day and next-day delivery options available
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Create Your Retailer Account</CardTitle>
                <CardDescription>
                  Start connecting with manufacturers and distributors today
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your business email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input id="storeName" placeholder="Enter your store/business name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="storeType">Store Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your store type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grocery">Grocery Store</SelectItem>
                      <SelectItem value="convenience">Convenience Store</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="electronics">Electronics Store</SelectItem>
                      <SelectItem value="clothing">Clothing Store</SelectItem>
                      <SelectItem value="department">Department Store</SelectItem>
                      <SelectItem value="specialty">Specialty Store</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter your city" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="Enter your state" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Store Address</Label>
                  <Textarea id="address" placeholder="Enter your complete store address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyVolume">Monthly Order Volume</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your monthly order volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-4m">Under ₦4,000,000</SelectItem>
                      <SelectItem value="4m-20m">₦4,000,000 - ₦20,000,000</SelectItem>
                      <SelectItem value="20m-40m">₦20,000,000 - ₦40,000,000</SelectItem>
                      <SelectItem value="40m-200m">₦40,000,000 - ₦200,000,000</SelectItem>
                      <SelectItem value="over-200m">Over ₦200,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="products">Product Categories of Interest</Label>
                  <Textarea 
                    id="products" 
                    placeholder="List the main product categories you're interested in sourcing (e.g., electronics, food & beverages, clothing, etc.)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Create Password</Label>
                  <Input id="password" type="password" placeholder="Create a secure password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Create Retailer Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in here
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join 2,000+ Successful Retailers</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our retail partners have reduced procurement costs by 25% on average 
              while improving inventory turnover and customer satisfaction.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">On-time delivery rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <p className="text-muted-foreground">Average cost savings</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Customer support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RetailerRegister;