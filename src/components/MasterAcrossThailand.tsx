// import { Card, CardContent } from "@/components/ui/card";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// const destinations = [
//   {
//     id: 'bangkok-pattaya',
//     number: '01',
//     title: 'Bangkok & Pattaya',
//     description: 'Experience the vibrant capital city and the coastal paradise of Pattaya with our expertly crafted tours.'
//   },
//   {
//     id: 'phuket-krabi',
//     number: '02',
//     title: 'Phuket & Krabi',
//     description: 'Discover stunning beaches, crystal-clear waters, and breathtaking limestone cliffs in southern Thailand.'
//   },
//   {
//     id: 'chiang-mai-rai',
//     number: '03',
//     title: 'Chiang Mai and Rai',
//     description: 'Explore ancient temples, rich culture, and mountainous landscapes in northern Thailand.'
//   },
//   {
//     id: 'koh-samui',
//     number: '04',
//     title: 'Koh Samui',
//     description: 'Relax on pristine beaches and enjoy tropical paradise with luxury resorts and spa treatments.'
//   },
//   {
//     id: 'hua-hin',
//     number: '05',
//     title: 'Hua Hin',
//     description: 'Experience the royal beach resort town with its unique blend of traditional charm and modern luxury.'
//   }
// ];

// const MasterAcrossThailand = () => {
//   const { elementRef, shouldAnimate } = useIntersectionObserver();

//   return (
//     <section
//       ref={elementRef}
//       id="master-across-thailand"
//       className="py-24 bg-background"
//       aria-labelledby="master-thailand-heading"
//     >
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className={`text-center mb-16 ${shouldAnimate ? 'animate-slide-up' : 'opacity-0'}`}>
//           <h2 id="master-thailand-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             Master Across Thailand
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
//             Our Thailand company is headquartered in Pattaya, and we strive to provide our guests with exceptional service.
//             To ensure their comfort, we have our own hotel, banquet hall, and club. Moreover, we offer a variety of transportation
//             options on land and water throughout Thailand to make our guests' travel more convenient.
//           </p>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Here are some of the destinations within our network in Thailand:
//           </p>
//         </div>

//         {/* Destinations Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinations.map((destination, index) => (
//             <Card
//               key={destination.id}
//               className={`group hover:shadow-strong transition-all duration-500 hover:-translate-y-1 border-0 shadow-medium bg-card ${
//                 shouldAnimate ? 'animate-scale-in' : 'opacity-0'
//               }`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardContent className="p-8">
//                 {/* Number */}
//                 <div className="text-6xl font-bold text-primary/20 mb-4 leading-none">
//                   {destination.number}
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
//                   {destination.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {destination.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className={`mt-16 text-center ${shouldAnimate ? 'animate-fade-in' : 'opacity-0'}`}>
//           <div className="bg-gradient-primary rounded-2xl p-12">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Ready to Explore Thailand?
//             </h3>
//             <p className="text-white/90 mb-8 max-w-2xl mx-auto">
//               Let us create the perfect itinerary for your Thai adventure with our extensive network and local expertise.
//             </p>
//             <button
//               onClick={() => window.open('https://wa.me/REPLACE_WITH_WHATSAPP_NUMBER', '_blank')}
//               className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
//             >
//               Plan Your Journey
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MasterAcrossThailand;

// import React from "react";

// const ThailandDestinations: React.FC = () => {
//   return (
//     <section className="bg-[#d8edfc] px-6 sm:px-10 md:px-12 py-12 md:py-16 flex flex-col justify-center items-center h-fit w-full gap-12 md:gap-16">
//       {/* Section Title */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
//         Master Across Thailand
//       </h1>

//       {/* Content Wrapper */}
//       <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-6xl">
//         {/* Left text */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
//             Our Thailand company is headquartered in Pattaya, and we strive to
//             provide our guests with exceptional service. To ensure their comfort,
//             we have our own hotel, banquet hall, and club. Moreover, we offer a
//             variety of transportation options on land and water throughout
//             Thailand to make our guests’ travel more convenient.
//           </p>

//           <p className="text-gray-700 text-sm sm:text-base md:text-lg">
//             Here are some of the destinations within our network in Thailand:
//           </p>

//           <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-xl sm:text-2xl md:text-3xl font-semibold">
//             <li>
//               <span className="text-red-600 block text-sm font-normal">01</span>
//               Bangkok & Pattaya
//             </li>
//             <li>
//               <span className="text-red-600 block text-sm font-normal">02</span>
//               Phuket & Krabi
//             </li>
//             <li>
//               <span className="text-red-600 block text-sm font-normal">03</span>
//               Chiang Mai and Rai
//             </li>
//             <li>
//               <span className="text-red-600 block text-sm font-normal">04</span>
//               Koh Samui
//             </li>
//             <li>
//               <span className="text-red-600 block text-sm font-normal">05</span>
//               Hua Hin
//             </li>
//           </ul>
//         </div>

//         {/* Right images */}
//         <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-center">
//           {/* Base Image */}
//           <img
//             src="https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg"
//             alt="Bangkok City"
//             className="rounded-md shadow-lg w-full sm:w-[80%] md:w-[400px] h-auto"
//           />
//           {/* Overlapping Image */}
//           <img
//             src="https://images.pexels.com/photos/208444/pexels-photo-208444.jpeg"
//             alt="Thailand Temple"
//             className="absolute -top-6 sm:-top-10 md:top-16 left-6 sm:left-10 md:left-[150px] rounded-md shadow-lg w-[150px] sm:w-[220px] md:w-[300px] h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThailandDestinations;

import React from "react";

const ThailandDestinations: React.FC = () => {
  return (
    <section className="bg-[#fff8ed] px-6 sm:px-10 md:px-12 py-12 md:py-16 flex flex-col justify-center items-center h-fit w-full gap-12 md:gap-16">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center font-sans">
        Master Across Thailand
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-6xl">
        {/* Left text */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-[14px]">
            Our Thailand company is headquartered in Pattaya, and we strive to
            provide our guests with exceptional service. To ensure their
            comfort, we have our own hotel, banquet hall, and club. Moreover, we
            offer a variety of transportation options on land and water
            throughout Thailand to make our guests’ travel more convenient.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-[14px]">
            Here are some of the destinations within our network in Thailand:
          </p>

          <ul className="space-y-4 sm:space-y-5 md:space-y-8 text-lg sm:text-2xl md:text-4xl font-jakarta font-light">
            <li>
              <span className="text-red-600 block text-lg font-light">01</span>
              Bangkok
            </li>
            <li>
              <span className="text-red-600 block text-lg font-light">02</span>
              Phuket
            </li>
            <li>
              <span className="text-red-600 block text-lg font-light">03</span>
              Pattaya
            </li>
            <li>
              <span className="text-red-600 block text-lg font-light">04</span>
              Krabi
            </li>
            <li>
              <span className="text-red-600 block text-lg font-light">05</span>
              Hua Hin
            </li>
          </ul>
        </div>

        {/* Right images */}
        <div className="w-full md:w-1/2 relative flex flex-col md:flex-row justify-center md:justify-end items-center">
          {/* Base Image */}
          <img
            src="https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
            alt="Bangkok City"
            className=" shadow-lg w-full sm:w-[80%] md:w-[400px] h-auto"
          />
          {/* Overlapping Image */}
          <img
            src="https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
            alt="Thailand Temple"
            className="
              shadow-lg w-[80%] sm:w-[220px] md:w-[300px] h-auto mt-6
              md:mt-0 md:absolute md:top-16 md:left-[100px]
            "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ThailandDestinations;
