import React from 'react'
import Girl from "@/assets/girl.png"

function Connect() {
  return (
//     <section className='bg-gradient-to-t from-blue-500 to-blue-700 h-[45vh]   flex items-center w-[100vw] justify-center relative'>
//       <img src="https://www.pngkit.com/png/full/325-3253264_pattern.png" alt="" className='invert opacity-5 w-full h-full object-cover absolute'/>
//       <div className='w-[90%]'><div className='flex flex-col gap-3 w-[100%] justify-between'>
//         <h1 className='font-alan font-bold text-xl text-gray-100'>We Make <br />World Travel Easy</h1>
//       <p className='text-white text-[10px] w-[62%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut, enim eaque delectus nemo nisi eos nam suscipit est earum ea doloribus illum tempora deserunt expedita magni, incidunt molestiae dolore corrupti inventore voluptate. Cupiditate, totam iste deleniti quisquam et quidem dignissimos! Voluptates, repudiandae eveniet. Sapiente?</p>
//       <button className='bg-gray-50 text-blue-500 px-2 py-1 w-[30%] rounded-lg text-sm'>Explore Now</button></div>
//       <div className='absolute bottom-0 w-fit -right-10'>
//       <img src={Girl} className='w-[190px]'  alt="Image of a girl with a bagpack" />
//       </div></div>
      
//     </section>



// // {/* <section className='bg-gradient-to-t from-blue-500 to-blue-700 h-96  flex items-center w-[100vw] justify-center relative'>
// //       <img src="https://www.pngkit.com/png/full/325-3253264_pattern.png" alt="" className='invert opacity-5 w-full h-full object-cover absolute'/>
// //       <div className='w-[60%]'><div className='flex flex-col gap-5 w-[60%] justify-center' >
// //         <h1 className='font-alan font-bold text-3xl text-gray-100'>We Make <br />World Travel Easy</h1>
// //       <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut, enim eaque delectus nemo nisi eos nam suscipit est earum ea doloribus illum tempora deserunt expedita magni, incidunt molestiae dolore corrupti inventore voluptate. Cupiditate, totam iste deleniti quisquam et quidem dignissimos! Voluptates, repudiandae eveniet. Sapiente?</p>
// //       <button className='bg-gray-50 text-blue-500 px-5 py-3 w-[30%] rounded-lg'>Explore Now</button></div>
// //       <div className='absolute bottom-0 right-20'>
// //       <img src={Girl} className='w-[400px]'  alt="Image of a girl with a bagpack" />
// //       </div></div>
      
// //     </section> */}
<section className="bg-gradient-to-t from-blue-500 to-blue-700 h-[45vh] md:h-96 flex items-center w-full justify-center relative ">

  {/* Background Pattern */}
  <img
    src="https://www.pngkit.com/png/full/325-3253264_pattern.png"
    alt=""
    className="invert opacity-5 w-full h-full object-cover absolute"
  />

  <div className="w-[90%] md:w-[60%]">

    {/* MOBILE LAYOUT */}
    <div className="flex flex-col gap-3 w-full justify-between md:hidden">
      <h1 className="font-alan font-bold text-xl text-gray-100">
        We Make <br />World Travel Easy
      </h1>
      <p className="text-white text-[10px] w-[62%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut, enim eaque delectus nemo nisi eos nam suscipit est earum ea doloribus illum tempora deserunt expedita magni, incidunt molestiae dolore corrupti inventore voluptate. Cupiditate, totam iste deleniti quisquam et quidem dignissimos! Voluptates, repudiandae eveniet. Sapiente?
      </p>
      <button className="bg-gray-50 text-blue-500 px-2 py-2 w-[30%] rounded-lg text-sm">
        Explore Now
      </button>
      <div className="absolute bottom-0 w-fit -right-10">
        <img src={Girl} className="w-[190px]" alt="Image of a girl with a bagpack" />
      </div>
    </div>

    {/* LAPTOP LAYOUT (UNCHANGED) */}
    <div className="hidden md:flex flex-col gap-5 w-[60%] justify-center">
      <h1 className="font-alan font-bold text-3xl text-gray-100">
        We Make <br />World Travel Easy
      </h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut, enim eaque delectus nemo nisi eos nam suscipit est earum ea doloribus illum tempora deserunt expedita magni, incidunt molestiae dolore corrupti inventore voluptate. Cupiditate, totam iste deleniti quisquam et quidem dignissimos! Voluptates, repudiandae eveniet. Sapiente?
      </p>
      <button className="bg-gray-50 text-blue-500 px-5 py-3 w-[30%] rounded-lg">
        Explore Now
      </button>
      <div className="absolute bottom-0 right-20">
        <img src={Girl} className="w-[400px]" alt="Image of a girl with a bagpack" />
      </div>
    </div>

  </div>
</section>


  )
}

export default Connect
