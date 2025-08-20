import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";

const currency = (n: number) => new Intl.NumberFormat('en-IN',{
     style:'currency',
     currency:'INR',
     minimumFractionDigits: 0,
}).format(n);

const BudgetCalculator = () => {
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [flight, setFlight] = useState(450);
  const [accom, setAccom] = useState(90);
  const [daily, setDaily] = useState(60);
  const [cont, setCont] = useState(10);

  const { total, perPerson, breakdown } = useMemo(() => {
    const flightTotal = flight * travelers;
    const accomTotal = accom * days;
    const dailyTotal = daily * travelers * days;
    const subtotal = flightTotal + accomTotal + dailyTotal;
    const contingency = (subtotal * cont) / 100;
    const total = subtotal + contingency;
    return {
      total,
      perPerson: total / travelers,
      breakdown: { flightTotal, accomTotal, dailyTotal, contingency },
    };
  }, [days, travelers, flight, accom, daily, cont]);

  return (
    <SiteLayout>
      <Helmet>
        <title>Travel Budget Calculator — Goomantu</title>
        <meta name="description" content="Estimate total trip costs including flights, accommodation, daily spend and contingency." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="container mx-auto py-12 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold mb-4">Budget Calculator</h1>
          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Adjust the sliders or values to estimate your trip.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="days">Days</Label>
                  <Input id="days" type="number" min={1} value={days} onChange={(e) => setDays(Number(e.target.value))} />
                </div>
                <div>
                  <Label htmlFor="trav">Travelers</Label>
                  <Input id="trav" type="number" min={1} value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="flight">Flight (per person)</Label>
                  <Input id="flight" type="number" min={0} value={flight} onChange={(e) => setFlight(Number(e.target.value))} />
                </div>
                <div>
                  <Label htmlFor="accom">Accommodation (per night)</Label>
                  <Input id="accom" type="number" min={0} value={accom} onChange={(e) => setAccom(Number(e.target.value))} />
                </div>
              </div>
              <div>
                <Label htmlFor="daily">Daily spend (per person)</Label>
                <Input id="daily" type="number" min={0} value={daily} onChange={(e) => setDaily(Number(e.target.value))} />
              </div>
              <div>
                <Label>Contingency: {cont}%</Label>
                <Slider value={[cont]} onValueChange={(v) => setCont(v[0])} min={0} max={30} step={1} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Estimated Total</CardTitle>
              <CardDescription className="text-primary-foreground/80">Per-person and overall costs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{currency(total)}</div>
              <div className="text-sm mt-1 opacity-90">≈ {currency(perPerson)} per person</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breakdown</CardTitle>
              <CardDescription>Where your money goes</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              <div>Flights: <strong>{currency(breakdown.flightTotal)}</strong></div>
              <div>Accommodation: <strong>{currency(breakdown.accomTotal)}</strong></div>
              <div>Daily spend: <strong>{currency(breakdown.dailyTotal)}</strong></div>
              <div>Contingency: <strong>{currency(breakdown.contingency)}</strong></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
};

export default BudgetCalculator;
