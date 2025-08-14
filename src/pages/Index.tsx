import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import heroImg from "@/assets/hero-travel.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import destAgra from "@/assets/dest-agra.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destJaipur from "@/assets/dest-jaipur.jpg";
import { Link } from "react-router-dom";
import { Calculator, Map, PiggyBank, BookOpenText } from "lucide-react";

const Index = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Goomantu — Smart Travel Planner & Budget Trips</title>
        <meta name="description" content="Plan smarter trips with budget tools, destination guides, and a friendly travel community." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" aria-hidden />
        <img src={heroImg} alt="Scenic coastal travel view at golden hour" className="w-full h-[60vh] object-cover" loading="eager" />
        <div className="absolute inset-0 bg-background/30" />
        <div className="container mx-auto absolute inset-0 flex items-center">
          <div className="max-w-2xl p-6 rounded-lg bg-background/70 backdrop-blur shadow-elegant">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Plan unforgettable trips without breaking the bank</h1>
            <p className="mt-3 text-muted-foreground text-lg">Discover destinations, craft budget-friendly itineraries, and tap into community tips—everything in one place.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/planner"><Button variant="hero"><Map /> Start Planning</Button></Link>
              <Link to="/calculator"><Button variant="outline"><Calculator /> Budget Calculator</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 grid gap-6 md:grid-cols-4">
        {[
          { title: "Trip Planner", description: "Hotels, flights, trains, and buses in one flow.", icon: <Map /> },
          { title: "Budget Trips", description: "Curated low-cost itineraries to inspire.", icon: <PiggyBank /> },
          { title: "Calculator", description: "Estimate total trip costs in minutes.", icon: <Calculator /> },
          { title: "Community", description: "Stories, blogs, and practical travel tips.", icon: <BookOpenText /> },
        ].map((f) => (
          <Card key={f.title} className="hover:shadow-elegant transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">{f.icon} {f.title}</CardTitle>
              <CardDescription>{f.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to={`/${f.title.toLowerCase().replace(" ", "-")}`}>
                <Button variant="outline">Explore</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container mx-auto pb-20">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Destinations</h2>
          <Link to="/destinations" className="text-sm underline">See all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { name: "Goa, India", img: destGoa, alt: "Beautiful Goa beaches with palm trees at sunset" },
            { name: "Agra, India", img: destAgra, alt: "Majestic Taj Mahal at golden hour" },
            { name: "Kerala, India", img: destKerala, alt: "Serene Kerala backwaters with traditional houseboat" },
            { name: "Jaipur, India", img: destJaipur, alt: "Vibrant pink city streets with traditional architecture" },
          ].map((d) => (
            <Card key={d.name} className="overflow-hidden group">
              <img src={d.img} alt={d.alt} className="h-40 w-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
              <CardHeader>
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <CardDescription>Guide • Budget tips • Best time to go</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
