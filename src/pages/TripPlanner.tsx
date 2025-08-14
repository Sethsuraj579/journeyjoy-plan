import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { useState } from "react";

const openProvider = (url: string) => {
  window.open(url, "_blank");
};

const TripPlanner = () => {
  const [from, setFrom] = useState("NYC");
  const [to, setTo] = useState("Paris");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const notifyOpen = (name: string) => toast(`Opening ${name} in a new tab…`);

  return (
    <SiteLayout>
      <Helmet>
        <title>Trip Planner — Goomantu</title>
        <meta name="description" content="Plan and book hotels, flights, trains, and buses with quick links to top providers." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Trip Planner</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>Enter basic info to speed up searches</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="from">From</Label>
              <Input id="from" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="City or airport" />
            </div>
            <div>
              <Label htmlFor="to">To</Label>
              <Input id="to" value={to} onChange={(e) => setTo(e.target.value)} placeholder="City or destination" />
            </div>
            <div>
              <Label htmlFor="start">Start</Label>
              <Input id="start" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="end">End</Label>
              <Input id="end" type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Hotels</CardTitle>
              <CardDescription>Search Booking.com</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="hero"
                onClick={() => {
                  notifyOpen("Booking.com");
                  const q = encodeURIComponent(`${to} ${start}`);
                  openProvider(`https://www.booking.com/searchresults.html?ss=${q}`);
                }}
              >
                Find Hotels
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flights</CardTitle>
              <CardDescription>Search Skyscanner</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => {
                  notifyOpen("Skyscanner");
                  openProvider(`https://www.skyscanner.com/transport/flights/${from.slice(0,3).toLowerCase()}/${to.slice(0,3).toLowerCase()}/${(start || '').split('-').join('')}/${(end || '').split('-').join('')}`);
                }}
              >
                Search Flights
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trains</CardTitle>
              <CardDescription>Search Trainline (Europe)</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => {
                  notifyOpen("Trainline");
                  openProvider(`https://www.thetrainline.com/`);
                }}
              >
                Search Trains
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Buses</CardTitle>
              <CardDescription>Search Busbud</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => {
                  notifyOpen("Busbud");
                  openProvider(`https://www.busbud.com/`);
                }}
              >
                Search Buses
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
};

export default TripPlanner;
