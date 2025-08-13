import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import destParis from "@/assets/dest-paris.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import destNyc from "@/assets/dest-nyc.jpg";

const destinations = [
  { name: "Paris, France", img: destParis, alt: "Paris with Eiffel Tower at golden hour", best: "Apr–Jun, Sep–Oct", daily: 95 },
  { name: "Bali, Indonesia", img: destBali, alt: "Bali rice terraces and ocean", best: "May–Sep", daily: 45 },
  { name: "Tokyo, Japan", img: destTokyo, alt: "Tokyo neon streets at dusk", best: "Mar–May, Oct–Nov", daily: 85 },
  { name: "New York, USA", img: destNyc, alt: "New York skyline with sunset", best: "Apr–Jun, Sep–Nov", daily: 110 },
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
        <h1 className="text-3xl font-bold mb-6">Destinations to Visit</h1>
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
