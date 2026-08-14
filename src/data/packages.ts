export interface ItineraryDay {
  day: string;
  text: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  highlights: string[];
  included: string[];
  excluded?: string[];
  itinerary?: ItineraryDay[];
  badgeText?: string;
  price?: string;
}

export const travelPackages: TravelPackage[] = [
  {
    id: "outbound-thailand-nepal",
    title: "Our Outbound Package - Thailand to Nepal",
    description: "An unforgettable 8-day journey covering 3 major cities: Kathmandu, Lumbini, and Pokhara. Includes round-trip Thailand-Nepal flights, domestic flights, visa, private transfers, and 3-star accommodations.",
    image: "package-nepal",
    duration: "8 Days / 7 Nights",
    category: "outbound",
    badgeText: "Outbound Special",
    highlights: [
      "3 Cities in 1 Package: Kathmandu, Lumbini & Pokhara",
      "Round-trip Thailand - Nepal flights with 20kg baggage",
      "Domestic flight ticket (KTM to BWA) & 15-Day Visa",
      "3-Star Hotel accommodation with daily breakfast",
      "Airport pick-ups & drops with private car transfers",
      "Full city tours of Kathmandu, Pokhara & Lumbini"
    ],
    included: [
      "Thailand round-trip flight ticket with 20 kg baggage",
      "Domestic flight ticket (Kathmandu to Bhairahawa)",
      "15-day Tourist Visa for Nepal",
      "Airport pick-up & drop-off by private car",
      "Full city tours of Kathmandu, Pokhara, and Lumbini",
      "3-Star hotel accommodation with breakfast"
    ],
    excluded: [
      "Own / personal expenses",
      "Lunch and dinner meals",
      "Re-entry stamp",
      "Tips for drivers & guides"
    ],
    itinerary: [
      {
        day: "Day 1",
        text: "Pick up from Bangkok home/apartment → Drop to airport → Fly for Nepal. Pickup from Nepal airport → Transfer to hotel by private car."
      },
      {
        day: "Day 2",
        text: "Check out Kathmandu hotel → Transfer to airport → Fly for Bhairahawa (Domestic flight). Pickup from Bhairahawa airport → Transfer to hotel."
      },
      {
        day: "Day 3",
        text: "Full day Lumbini tour exploring world heritage sacred sites."
      },
      {
        day: "Day 4",
        text: "Check out Bhairahawa → Transfer to Pokhara by road. Evening explore Phewa Lake."
      },
      {
        day: "Day 5",
        text: "Full day Pokhara city tour (sightseeing, lakes, viewpoints)."
      },
      {
        day: "Day 6",
        text: "Check out Pokhara hotel → Transfer back to Kathmandu by road."
      },
      {
        day: "Day 7",
        text: "Leisure day in Kathmandu for shopping and local exploration."
      },
      {
        day: "Day 8",
        text: "Check out Kathmandu hotel → Transfer to airport → Fly back to Thailand."
      }
    ]
  },
  {
    id: "bangkok-adventure-1",
    title: "Best Recommended Package",
    description: "Discover the vibrant capital of Thailand with guided tours of ancient temples, bustling markets, and modern attractions.",
    image: "package-bangkok",
    duration: "5 Days / 4 Nights",
    category: "recommended",
    highlights: [
      "Pick up from Airport",
      "3 star hotel with breakfast",
      "Coral island tour by speed boat with lunch sic",
      "Private Car"
    ],
    included: ["Accommodation", "Meals", "Transport", "Guide"]
  },
  {
    id: "bangkok-adventure",
    title: "Bangkok Cultural Adventure",
    description: "Discover the vibrant capital of Thailand with guided tours of ancient temples, bustling markets, and modern attractions.",
    image: "package-bangkok",
    duration: "3 Days / 2 Nights",
    category: "cultural",
    highlights: [
      "Grand Palace & Wat Pho Temple",
      "Floating Market Experience",
      "Street Food Tour",
      "Tuk-tuk City Exploration"
    ],
    included: ["Accommodation", "Meals", "Transport", "Guide"]
  },
  {
    id: "island-hopping",
    title: "Tropical Island Hopping",
    description: "Experience the pristine beaches and crystal-clear waters of Thailand's most beautiful islands.",
    image: "package-islands",
    duration: "5 Days / 4 Nights",
    category: "beach",
    highlights: [
      "Phi Phi Islands",
      "James Bond Island",
      "Snorkeling & Diving",
      "Beach BBQ Dinner"
    ],
    included: ["Speedboat Tours", "Snorkeling Gear", "Lunch", "Hotel Pickup"]
  },
  {
    id: "temple-heritage",
    title: "Ancient Temples & Heritage",
    description: "Journey through Thailand's rich spiritual heritage with visits to the most sacred temples and historical sites.",
    image: "package-temple",
    duration: "4 Days / 3 Nights",
    category: "cultural",
    highlights: [
      "Ayutthaya Historical Park",
      "Sukhothai Ancient City",
      "Dawn Temple Ceremony",
      "Local Village Visit"
    ],
    included: ["Private Guide", "Entrance Fees", "Traditional Meals", "Transport"]
  },
  {
    id: "phuket-beach",
    title: "Pattaya Beach",
    description: "Relax on pristine beaches and enjoy water sports in Thailand's most famous beach destination.",
    image: "package-islands",
    duration: "4 Days / 3 Nights",
    category: "beach",
    highlights: [
      "Patong & Kata Beaches",
      "Sunset Cruise",
      "Water Sports",
      "Beach Massage"
    ],
    included: ["Beachfront Resort", "Breakfast", "Airport Transfer", "Beach Activities"]
  },
  {
    id: "culinary-journey",
    title: "Thai Culinary Journey",
    description: "Discover authentic Thai flavors with cooking classes, market tours, and restaurant experiences.",
    image: "package-temple",
    duration: "3 Days / 2 Nights",
    category: "cultural",
    highlights: [
      "Cooking Classes",
      "Market Tours",
      "Street Food Adventure",
      "Farm-to-Table Experience"
    ],
    included: ["All Meals", "Cooking Supplies", "Recipe Book", "Market Guide"]
  }
];

export const packageCategories = [
  { id: "all", name: "All Packages", icon: "Globe" },
  { id: "outbound", name: "Outbound (Nepal)", icon: "Plane" },
  { id: "cultural", name: "Cultural", icon: "Building2" },
  { id: "beach", name: "Beach & Islands", icon: "Waves" },
  { id: "adventure", name: "Adventure", icon: "Mountain" }
];