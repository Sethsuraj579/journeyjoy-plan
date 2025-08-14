import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const trips = [
  {
    title: "Kerala Backwaters (5 days)",
    summary: "Houseboat stay, spice gardens, and temple visits.",
    cost: "₹15,000 + transport",
  },
  {
    title: "Rajasthan Heritage (7 days)",
    summary: "Forts, palaces, desert safari in Jaisalmer.",
    cost: "₹18,000 + transport",
  },
  {
    title: "Goa Beach Retreat (4 days)",
    summary: "Beaches, Portuguese churches, and seafood.",
    cost: "₹12,000 + transport",
  },
  {
    title: "Himachal Hills (6 days)",
    summary: "Manali valleys, Rohtang Pass, and mountain views.",
    cost: "₹16,000 + transport",
  },
  {
    title: "Golden Triangle (5 days)",
    summary: "Delhi, Agra Taj Mahal, and Jaipur Pink City.",
    cost: "₹14,000 + transport",
  },
  {
    title: "Spiritual Varanasi (3 days)",
    summary: "Ganges aarti, ancient temples, and boat rides.",
    cost: "₹8,000 + transport",
  },
];

const BudgetTrips = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Budget Trips — Goomantu</title>
        <meta name="description" content="Curated budget-friendly India travel itineraries with costs in Indian Rupees." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Budget India Travel Ideas</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
