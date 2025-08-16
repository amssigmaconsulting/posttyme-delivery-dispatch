import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Factory, Network, TrendingUp, Handshake, CheckCircle } from "lucide-react";

const JoinNetworkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Manufacturing Network</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with thousands of retailers and distributors. Grow your business 
            through our trusted platform and expand your market reach.
          </p>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Network Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Network className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Instant Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with 10,000+ verified retailers and distributors nationwide.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Scale Faster</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manufacturers see 40% average growth in their first year on our platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Factory className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Smart Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered partner matching based on your products and target markets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Handshake className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Trusted Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure transactions with built-in payment protection and dispute resolution.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply to Join Our Network</h2>
            <p className="text-muted-foreground">
              Complete the application below. Our team will review and respond within 24 hours.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Manufacturer Registration</CardTitle>
              <CardDescription>
                Tell us about your manufacturing business and capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Company Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number</Label>
                    <Input id="registrationNumber" placeholder="Business registration number" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="foundedYear">Founded Year *</Label>
                    <Input id="foundedYear" type="number" placeholder="YYYY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-500">201-500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Company Address *</Label>
                  <Textarea id="address" placeholder="Enter complete address including city, state, zip" />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Primary Contact</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input id="contactName" placeholder="Contact person name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position/Title *</Label>
                    <Input id="position" placeholder="e.g., CEO, Sales Director" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="business@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              {/* Manufacturing Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Manufacturing Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Primary Industry *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                        <SelectItem value="textiles">Textiles & Apparel</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="chemicals">Chemicals</SelectItem>
                        <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                        <SelectItem value="home-garden">Home & Garden</SelectItem>
                        <SelectItem value="industrial">Industrial Equipment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Monthly Production Capacity</Label>
                    <Input id="capacity" placeholder="e.g., 10,000 units" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="products">Product Categories *</Label>
                  <Textarea 
                    id="products" 
                    placeholder="List your main product categories and key products"
                    className="min-h-24"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="certifications">Certifications</Label>
                  <Input id="certifications" placeholder="e.g., ISO 9001, FDA, CE, etc." />
                </div>
              </div>

              {/* Business Goals */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Network Goals</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="goals">What are your goals for joining our network? *</Label>
                  <Textarea 
                    id="goals" 
                    placeholder="Describe your business objectives and what you hope to achieve"
                    className="min-h-24"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetMarkets">Target Markets/Regions</Label>
                  <Input id="targetMarkets" placeholder="e.g., West Coast, Southeast, National" />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy *
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <label htmlFor="marketing" className="text-sm">
                    I would like to receive updates about new opportunities and platform features
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <Button size="lg" className="w-full">
                  Submit Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">
                Complete the form with your company details and manufacturing capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Review & Verification</h3>
              <p className="text-sm text-muted-foreground">
                Our team reviews your application and verifies company credentials within 24 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Welcome Call</h3>
              <p className="text-sm text-muted-foreground">
                Schedule an onboarding call to set up your profile and discuss strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Connecting</h3>
              <p className="text-sm text-muted-foreground">
                Begin connecting with retailers and distributors in your target markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinNetworkPage;