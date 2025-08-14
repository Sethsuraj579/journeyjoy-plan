import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import destGoa from "@/assets/dest-goa.jpg";
import destAgra from "@/assets/dest-agra.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destJaipur from "@/assets/dest-jaipur.jpg";

const destinations = [
  { name: "Goa, India", img: destGoa, alt: "Beautiful Goa beaches with palm trees at sunset", best: "Nov–Mar", daily: 35 },
  { name: "Agra, India", img: destAgra, alt: "Majestic Taj Mahal at golden hour", best: "Oct–Mar", daily: 30 },
  { name: "Kerala, India", img: destKerala, alt: "Serene Kerala backwaters with traditional houseboat", best: "Oct–Mar", daily: 40 },
  { name: "Jaipur, India", img: destJaipur, alt: "Vibrant pink city streets with traditional architecture", best: "Oct–Mar", daily: 25 },
];

const Destinations = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Top Destinations — VoyageWise</title>
        <meta name="description" content="Discover top travel destinations with best seasons, average daily budgets, and tips." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Incredible India Destinations</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((d) => (
            <Card key={d.name} className="overflow-hidden hover:shadow-elegant transition-shadow">
              <img src={d.img} alt={d.alt} className="h-44 w-full object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <CardDescription>Best time: {d.best} • From ${d.daily}/day</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Perfect for food lovers, culture, and scenic walks. Use our planner to craft your route.
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Destinations;
