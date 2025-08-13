import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const trips = [
  {
    title: "Bangkok on $50/day (4 days)",
    summary: "Street food, temples, and river cruise.",
    cost: "$200 + flights",
  },
  {
    title: "Lisbon lite (3 days)",
    summary: "Trams, viewpoints, and pastel de nata crawl.",
    cost: "$180 + flights",
  },
  {
    title: "Bali chill (5 days)",
    summary: "Ubud rice terraces, beaches, and waterfall day.",
    cost: "$350 + flights",
  },
];

const BudgetTrips = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Budget Trips — VoyageWise</title>
        <meta name="description" content="Curated budget-friendly itineraries to inspire your next trip." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Budget Trip Ideas</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {trips.map((t) => (
            <Card key={t.title} className="hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle>{t.title}</CardTitle>
                <CardDescription>{t.summary}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Approx: {t.cost}</span>
                <div className="flex gap-2">
                  <Link to="/calculator"><Button variant="outline">Estimate</Button></Link>
                  <Link to="/planner"><Button variant="hero">Plan</Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default BudgetTrips;
