import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      description: "123 Business District, Industrial Avenue, Lagos, Nigeria",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+234 123 456 7890",
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      description: "hello@postym.com",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday - Friday: 8:00 AM - 6:00 PM",
      color: "text-accent"
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
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ready to streamline your logistics? Contact our team to discuss how 
              PosTym can transform your supply chain operations.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 shadow-feature border-border/50">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">
                    Send us a message
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+234 123 456 7890" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your logistics needs..." 
                        className="mt-1 min-h-32"
                      />
                    </div>
                    
                    <Button variant="default" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We're here to help you streamline your logistics operations. 
                    Reach out through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 hover:shadow-feature transition-smooth border-border/50 hover:border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-accent-light">
                          <info.icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Contact us directly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How do I get started?
                </h3>
                <p className="text-muted-foreground">
                  Simply contact us through this form or call our team. We'll assess your 
                  logistics needs and create a customized solution for your business.
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What areas do you cover?
                </h3>
                <p className="text-muted-foreground">
                  We cover major cities and industrial areas across Nigeria, with plans 
                  to expand to other African countries in 2024.
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What's your pricing model?
                </h3>
                <p className="text-muted-foreground">
                  Our pricing is based on distance, package size, and delivery urgency. 
                  We offer competitive rates with volume discounts for regular customers.
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you provide tracking?
                </h3>
                <p className="text-muted-foreground">
                  Yes! All deliveries include real-time GPS tracking and regular updates 
                  throughout the delivery process.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;