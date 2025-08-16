import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Reliability",
      description: "We deliver on our promises with consistent, on-time performance that businesses can depend on.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with manufacturers and retailers through transparent communication.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous improvement in our services, technology, and customer satisfaction standards.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to streamline logistics and improve delivery efficiency.",
      color: "text-accent"
    }
  ];

  const stats = [
    { value: "500K+", label: "Successful Deliveries" },
    { value: "2K+", label: "Business Partners" },
    { value: "98%", label: "On-Time Delivery Rate" },
    { value: "50+", label: "Cities Covered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 text-primary">
                About PosTym
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Revolutionizing
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  B2B Logistics
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Founded with the vision to bridge the gap between manufacturers and retailers, 
                PosTym has grown into a trusted logistics partner across the nation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  PosTym was born from a simple observation: the supply chain between manufacturers 
                  and retailers was fragmented, inefficient, and costly. Small manufacturers struggled 
                  to reach retailers, while retailers faced challenges in sourcing products reliably.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We set out to create a platform that would seamlessly connect these two vital parts 
                  of the economy, providing not just delivery services, but a complete logistics ecosystem 
                  that empowers businesses to grow and thrive.
                </p>
                <Button variant="default" size="lg">
                  Join Our Network
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-subtle rounded-2xl shadow-feature" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at PosTym
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-feature transition-smooth border-border/50 hover:border-primary/20 bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent-light group-hover:scale-110 transition-bounce">
                        <value.icon className={`h-6 w-6 ${value.color}`} />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {value.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 bg-card border-border/50 shadow-feature">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower businesses by providing reliable, efficient, and innovative logistics 
                    solutions that connect manufacturers with retailers, fostering economic growth 
                    and creating opportunities for all stakeholders in the supply chain.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-card border-border/50 shadow-feature">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the leading B2B logistics platform that transforms how products move 
                    from manufacturers to retailers, creating a seamless, transparent, and efficient 
                    supply chain ecosystem across the globe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;