export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
  package: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    comment: 'Absolutely incredible experience! The Bangkok Cultural Adventure exceeded all our expectations. Our guide was knowledgeable and friendly, and every detail was perfectly planned.',
    package: 'Bangkok Cultural Adventure'
  },
  {
    id: '2',
    name: 'Marco Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    comment: 'The island hopping tour was a dream come true. Crystal clear waters, amazing snorkeling, and the most beautiful sunsets I\'ve ever seen. Travel Master Thailand made it unforgettable!',
    package: 'Tropical Island Hopping'
  },
  {
    id: '3',
    name: 'Emily Chen',
    location: 'Sydney, Australia',
    rating: 5,
    comment: 'The temple heritage tour was spiritually moving and culturally enriching. Learning about Thai history and traditions was fascinating. Highly recommend for culture enthusiasts!',
    package: 'Ancient Temples & Heritage'
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'London, UK',
    rating: 5,
    comment: 'Professional service from start to finish. The attention to detail and local expertise made our Thailand vacation seamless and memorable. Will definitely book again!',
    package: 'Northern Thailand Adventure'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    location: 'Toronto, Canada',
    rating: 5,
    comment: 'The cooking classes were the highlight of our trip! Learning to make authentic Thai dishes and exploring local markets was an amazing cultural experience.',
    package: 'Thai Culinary Journey'
  },
  {
    id: '6',
    name: 'Ahmed Hassan',
    location: 'Dubai, UAE',
    rating: 5,
    comment: 'Perfect beach getaway in Phuket. The resort was beautiful, activities were well-organized, and the sunset cruise was magical. Thank you for an amazing vacation!',
    package: 'Phuket Beach Paradise'
  }
];