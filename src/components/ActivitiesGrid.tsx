import { Card, CardContent } from "@/components/ui/card";

// Import optimized images
import floatingMarket from "@/assets/floating-market.jpg";
import tigerPark from "@/assets/tiger-park.jpg";
import underwaterWorld from "@/assets/underwater-world.jpg";
import nongnoochGarden from "@/assets/nongnooch-garden.jpg";
import sanctuaryTruth from "@/assets/sanctuary-truth.jpg";
import waterPark from "@/assets/water-park.jpg";
import cabaretShow from "@/assets/cabaret-show.jpg";
import snorkeling from "@/assets/snorkeling.jpg";
import jetski from "@/assets/jetski.jpg";

interface Activity {
  id: number;
  title: string;
  image: string;
  description: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Floating Market",
    image: floatingMarket,
    description:
      "Experience traditional Thai culture at vibrant floating markets",
  },
  {
    id: 2,
    title: "Tiger Park",
    image: tigerPark,
    description: "Get up close with majestic tigers in a safe environment",
  },
  {
    id: 3,
    title: "Underwater World",
    image: underwaterWorld,
    description: "Walk through amazing aquarium tunnels with marine life",
  },
  {
    id: 4,
    title: "Nongnooch Garden",
    image: nongnoochGarden,
    description: "Explore stunning tropical gardens and cultural shows",
  },
  {
    id: 5,
    title: "Sanctuary of Truth",
    image: sanctuaryTruth,
    description: "Marvel at this magnificent all-wood architectural wonder",
  },
  {
    id: 6,
    title: "Water Park",
    image: waterPark,
    description: "Enjoy thrilling water slides and pools for all ages",
  },
  {
    id: 7,
    title: "Cabaret Show",
    image: cabaretShow,
    description: "Watch spectacular performances with dazzling costumes",
  },
  {
    id: 8,
    title: "Snorkeling",
    image: snorkeling,
    description: "Discover colorful coral reefs and tropical fish",
  },
  {
    id: 9,
    title: "Jet Ski",
    image: jetski,
    description: "Experience thrilling water sports on crystal clear waters",
  },
];

const ActivitiesGrid = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Discover Thailand Adventures
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore unforgettable experiences and activities that make your
            Thailand holiday truly special
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <article className="relative">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={activity.image}
                      alt={`${activity.title} - Thailand travel activity`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="640"
                      height="512"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </article>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesGrid;
