import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Store, Shield, TrendingUp, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const RetailerRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    storeName: "",
    storeType: "",
    city: "",
    state: "",
    address: "",
    monthlyVolume: "",
    productCategories: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.storeName || 
        !formData.storeType || !formData.city || !formData.state || !formData.address || 
        !formData.monthlyVolume || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            user_type: 'retailer',
            first_name: formData.firstName,
            last_name: formData.lastName
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Check if we have an authenticated session (email may require verification)
        const { data: sessionData } = await supabase.auth.getSession();
        const hasSession = Boolean(sessionData?.session);

        if (!hasSession) {
          // Defer profile creation until after email verification and first sign-in
          const pendingProfile = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            store_name: formData.storeName,
            store_type: formData.storeType,
            city: formData.city,
            state: formData.state,
            address: formData.address,
            monthly_volume: formData.monthlyVolume,
            product_categories: formData.productCategories,
          };
          try { localStorage.setItem('pendingRetailerProfile', JSON.stringify(pendingProfile)); } catch {}

          // Send custom verification welcome email
          try {
            await supabase.functions.invoke('send-verification-email', {
              body: {
                email: formData.email,
                name: `${formData.firstName} ${formData.lastName}`,
                userType: 'retailer'
              }
            });
          } catch (error) {
            console.error('Failed to send verification email:', error);
          }

          toast({
            title: '📧 Check your email',
            description: 'We\'ve sent a verification link to your email address. Please click the link to verify your account, then sign in to complete your retailer profile setup.',
          });
          navigate('/login');
          return;
        }

        // We have a session, so we can create the profile now
        const { error: profileError } = await supabase
          .from('retailer_profiles')
          .insert({
            user_id: authData.user.id,
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            store_name: formData.storeName,
            store_type: formData.storeType,
            city: formData.city,
            state: formData.state,
            address: formData.address,
            monthly_volume: formData.monthlyVolume,
            product_categories: formData.productCategories,
          });

        if (profileError) {
          console.error('Profile creation error:', profileError);
          throw profileError;
        }

        toast({
          title: 'Success!',
          description: 'Your retailer account has been created successfully.',
        });

        navigate('/');
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your business email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input 
                      id="storeName" 
                      placeholder="Enter your store/business name"
                      value={formData.storeName}
                      onChange={(e) => handleInputChange('storeName', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storeType">Store Type</Label>
                    <Select value={formData.storeType} onValueChange={(value) => handleInputChange('storeType', value)}>
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
                      <Input 
                        id="city" 
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state" 
                        placeholder="Enter your state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Store Address</Label>
                    <Textarea 
                      id="address" 
                      placeholder="Enter your complete store address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyVolume">Monthly Order Volume</Label>
                    <Select value={formData.monthlyVolume} onValueChange={(value) => handleInputChange('monthlyVolume', value)}>
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
                      value={formData.productCategories}
                      onChange={(e) => handleInputChange('productCategories', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Create Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Create a secure password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Retailer Account"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

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