export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  highlights: string[];
  included: string[];
}

export const travelPackages: TravelPackage[] = [{
    id: 'bangkok-adventure-1',
    title: 'Best Recommended Package',
    description: 'Discover the vibrant capital of Thailand with guided tours of ancient temples, bustling markets, and modern attractions.',
    image: 'package-bangkok',
    duration: '5 Days / 4 Nights',
    category: 'recommended',
    highlights: [
      'Pick up from Airport ',
      '3 star hotel with breakfast ',
      'Coral island tour by speed boat with lunch sic ',
      'Private Car'
    ],
    included: ['Accommodation', 'Meals', 'Transport', 'Guide']
  },
  {
    id: 'bangkok-adventure',
    title: 'Bangkok Cultural Adventure',
    description: 'Discover the vibrant capital of Thailand with guided tours of ancient temples, bustling markets, and modern attractions.',
    image: 'package-bangkok',
    duration: '3 Days / 2 Nights',
    category: 'cultural',
    highlights: [
      'Grand Palace & Wat Pho Temple',
      'Floating Market Experience',
      'Street Food Tour',
      'Tuk-tuk City Exploration'
    ],
    included: ['Accommodation', 'Meals', 'Transport', 'Guide']
  },
  {
    id: 'island-hopping',
    title: 'Tropical Island Hopping',
    description: 'Experience the pristine beaches and crystal-clear waters of Thailand\'s most beautiful islands.',
    image: 'package-islands',
    duration: '5 Days / 4 Nights',
    category: 'beach',
    highlights: [
      'Phi Phi Islands',
      'James Bond Island',
      'Snorkeling & Diving',
      'Beach BBQ Dinner'
    ],
    included: ['Speedboat Tours', 'Snorkeling Gear', 'Lunch', 'Hotel Pickup']
  },
  {
    id: 'temple-heritage',
    title: 'Ancient Temples & Heritage',
    description: 'Journey through Thailand\'s rich spiritual heritage with visits to the most sacred temples and historical sites.',
    image: 'package-temple',
    duration: '4 Days / 3 Nights',
    category: 'cultural',
    highlights: [
      'Ayutthaya Historical Park',
      'Sukhothai Ancient City',
      'Dawn Temple Ceremony',
      'Local Village Visit'
    ],
    included: ['Private Guide', 'Entrance Fees', 'Traditional Meals', 'Transport']
  },
  {
    id: 'phuket-beach',
    title: 'Pattaya Beach',
    description: 'Relax on pristine beaches and enjoy water sports in Thailand\'s most famous beach destination.',
    image: 'package-islands',
    duration: '4 Days / 3 Nights',
    category: 'beach',
    highlights: [
      'Patong & Kata Beaches',
      'Sunset Cruise',
      'Water Sports',
      'Beach Massage'
    ],
    included: ['Beachfront Resort', 'Breakfast', 'Airport Transfer', 'Beach Activities']
  },
  {
    id: 'culinary-journey',
    title: 'Thai Culinary Journey',
    description: 'Discover authentic Thai flavors with cooking classes, market tours, and restaurant experiences.',
    image: 'package-temple',
    duration: '3 Days / 2 Nights',
    category: 'cultural',
    highlights: [
      'Cooking Classes',
      'Market Tours',
      'Street Food Adventure',
      'Farm-to-Table Experience'
    ],
    included: ['All Meals', 'Cooking Supplies', 'Recipe Book', 'Market Guide']
  }
];

export const packageCategories = [
  { id: 'all', name: 'All Packages', icon: 'Globe' },
  { id: 'cultural', name: 'Cultural', icon: 'Building2' },
  { id: 'beach', name: 'Beach & Islands', icon: 'Waves' },
  { id: 'adventure', name: 'Adventure', icon: 'Mountain' }
];