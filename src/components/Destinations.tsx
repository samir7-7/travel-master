import React from 'react'
import Bangkok from "@/assets/bangkok.jpg"
import Karabi from "@/assets/karabi.avif"
import Phuket from "@/assets/Phuket.jpg"
import Pattaya from "@/assets/Pattaya.jpg"

function Destinations() {
  return (
    <section className='bg-[#f1f1f1]'>
      <div className="container mx-auto py-12 flex flex-col justify-center items-center gap-8">
        <div className='flex flex-col text-center gap-2'> <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center  font-sans">Popular Destinations in Thailand</h1>
        <p>Here are some of the most visited destinations by tourists in 2024.</p></div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-12 max-w-7xl mx-auto">
          {[
            {
              name: "Bangkok",
              image: Bangkok
            },
            {
              name: "Karabi",
              image: Karabi
            },
            {
              name: "Phuket",
              image: Phuket
            },
            {
              name: "Pattaya",
              image: Pattaya
            },
          ].map((destination) => (
            <div key={destination.name} className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center text-gray-50 p-4">
                <h3 className="text-2xl font-semibold">{destination.name}</h3>
                <p className='text-sm'>Thailand</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
