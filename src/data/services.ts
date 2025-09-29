export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'custom-tours',
    title: 'Custom Tour Packages',
    description: 'Personalized itineraries tailored to your interests, budget, and travel style.',
    icon: 'MapPin',
    features: ['Flexible Scheduling', 'Personal Preferences', 'Budget-Friendly Options']
  },
  {
    id: 'local-guides',
    title: 'Expert Local Guides',
    description: 'Knowledgeable local guides who speak your language and share authentic Thai culture.',
    icon: 'Users',
    features: ['Multilingual Guides', 'Cultural Insights', 'Insider Knowledge']
  },
  {
    id: 'transport',
    title: 'Transportation Services',
    description: 'Comfortable and reliable transport options from airport transfers to luxury coaches.',
    icon: 'Car',
    features: ['Airport Pickup', 'Luxury Vehicles', '24/7 Support']
  },
  {
    id: 'accommodation',
    title: 'Hotel & Resort Booking',
    description: 'Carefully selected accommodations from boutique hotels to luxury beach resorts.',
    icon: 'Building2',
    features: ['Verified Hotels', 'Best Rates', 'Location Optimization']
  },
  {
    id: 'activities',
    title: 'Adventure Activities',
    description: 'Exciting outdoor adventures including water sports, trekking, and cultural experiences.',
    icon: 'Compass',
    features: ['Water Sports', 'Jungle Trekking', 'Cultural Workshops']
  },
  {
    id: 'support',
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance to ensure your Thailand experience is smooth and worry-free.',
    icon: 'Phone',
    features: ['Emergency Support', 'Travel Assistance', 'Multilingual Staff']
  }
];