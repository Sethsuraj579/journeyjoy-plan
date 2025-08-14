import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import destGoa from "@/assets/dest-goa.jpg";
import destAgra from "@/assets/dest-agra.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destJaipur from "@/assets/dest-jaipur.jpg";
import destManali from "@/assets/dest-manali.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";
import destUdaipur from "@/assets/dest-udaipur.jpg";
import destHampi from "@/assets/dest-hampi.jpg";
import destRishikesh from "@/assets/dest-rishikesh.jpg";
import destDarjeeling from "@/assets/dest-darjeeling.jpg";

const destinations = [
  { name: "Goa, India", img: destGoa, alt: "Beautiful Goa beaches with palm trees at sunset", best: "Nov–Mar", daily: 2900 },
  { name: "Agra, India", img: destAgra, alt: "Majestic Taj Mahal at golden hour", best: "Oct–Mar", daily: 2500 },
  { name: "Kerala, India", img: destKerala, alt: "Serene Kerala backwaters with traditional houseboat", best: "Oct–Mar", daily: 3300 },
  { name: "Jaipur, India", img: destJaipur, alt: "Vibrant pink city streets with traditional architecture", best: "Oct–Mar", daily: 2100 },
  { name: "Manali, India", img: destManali, alt: "Snow-capped mountains with pine forests in Himachal Pradesh", best: "May–Oct", daily: 2800 },
  { name: "Varanasi, India", img: destVaranasi, alt: "Sacred Ganges river with ancient ghats at sunrise", best: "Oct–Mar", daily: 1800 },
  { name: "Udaipur, India", img: destUdaipur, alt: "Majestic City Palace with Lake Pichola reflection", best: "Oct–Mar", daily: 2600 },
  { name: "Hampi, India", img: destHampi, alt: "Ancient ruins with massive boulders and Vijayanagara temples", best: "Oct–Mar", daily: 1500 },
  { name: "Rishikesh, India", img: destRishikesh, alt: "Peaceful Ganges with yoga ashrams and Himalayan foothills", best: "Oct–Apr", daily: 2000 },
  { name: "Darjeeling, India", img: destDarjeeling, alt: "Tea gardens with rolling hills and Kanchenjunga mountain", best: "Mar–May, Oct–Nov", daily: 2200 },
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {destinations.map((d) => (
            <Card key={d.name} className="overflow-hidden hover:shadow-elegant transition-shadow">
              <img src={d.img} alt={d.alt} className="h-44 w-full object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <CardDescription>Best time: {d.best} • From ₹{d.daily}/day</CardDescription>
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
