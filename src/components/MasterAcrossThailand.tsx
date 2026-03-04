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
            <li>
              <span className="text-red-600 block text-lg font-light">06</span>
              Chiang Mai
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
