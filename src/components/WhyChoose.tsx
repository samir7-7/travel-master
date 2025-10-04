// import React from "react";

// const WhyChooseUs = () => {
//   return (
//     <div className="w-full">
//       <section className="px-4 py-12 max-w-7xl mx-auto flex flex-col gap-9 items-center">
//         <div className="text-center mb-8">
//           <h2
//             id="services-heading"
//             className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans"
//           >
//             Why choose us?
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive travel services designed to make your Thailand
//             experience seamless, authentic, and unforgettable.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* Left Block */}
//           <div className="bg-red-800 flex items-center justify-center text-white text-2xl font-semibold p-8">
//             <p className="text-center">Expertise and Personalized Service</p>
//           </div>

//           {/* Middle Image */}
//           <div className="relative">
//             <img
//               src="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg"
//               alt="Exclusive Perks"
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
//               <p className="text-white text-2xl font-semibold text-center">
//                 Access to Exclusive Perks & Discounts
//               </p>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="grid grid-rows-2 gap-4 h-full">
//             {/* Top Image */}
//             <div className="relative">
//               <img
//                 src="https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg"
//                 alt="Time Saving"
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
//                 <p className="text-white text-2xl font-semibold text-center">
//                   Time Saving
//                 </p>
//               </div>
//             </div>

//             {/* Bottom Solid Block */}
//             <div className="bg-orange-500 flex items-center justify-center text-white text-2xl font-semibold p-6">
//               <p className="text-center">Best Guest Support</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-full">
      <section className="px-4 py-12 max-w-7xl mx-auto flex flex-col gap-9 items-center">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans"
          >
            Why choose us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel services designed to make your Thailand
            experience seamless, authentic, and unforgettable.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Left Block (with your Unsplash image) */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60"
              alt="Expertise and Personalized Service"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
              <p className="text-white text-2xl font-semibold text-center">
                Expertise and Personalized Service
              </p>
            </div>
          </div>

          {/* Middle Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
              alt="Exclusive Perks"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
              <p className="text-white text-2xl font-semibold text-center">
                Access to Exclusive Perks & Discounts
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-4 h-full">
            {/* Top Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Time Saving"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                <p className="text-white text-2xl font-semibold text-center">
                  Time Saving
                </p>
              </div>
            </div>

            {/* Bottom Right (with your Pinterest image) */}
            <div className="relative">
              <img
                src="https://i.pinimg.com/originals/71/83/bd/7183bde5c6d22464b6fcb3c9cc3067b4.jpg"
                alt="Best Guest Support"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <p className="text-white text-2xl font-semibold text-center">
                  Best Guest Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
