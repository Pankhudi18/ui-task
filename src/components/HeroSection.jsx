import { Carousel } from 'flowbite-react'
import React from 'react'
import image from "../assets/image.png"

const HeroSection = () => {
  return (
    <div className='flex mt-10 justify-center mx-auto'>
    <div className="h-[300px] w-[90%] overflow-hidden">
      <Carousel slideInterval={3000} indicators = {false}>
        <div className="flex h-full items-center justify-center">
          <img src = {image}
               alt = "Slide 1"
               className='w-full h-full'
               />
        </div>

        <div className="flex flex-col h-full items-center justify-center bg-amber-200">
          <h1 className="text-4xl text-black font-bold">Welcome to slide 2</h1>
          <h2 className='text-2xl'>This is slide 2</h2>
        </div>

        <div className="relative flex h-full items-center justify-center">
          <img src = "https://static.vecteezy.com/system/resources/previews/000/701/690/non_2x/abstract-polygonal-banner-background-vector.jpg" alt = "Hero3" className='h-full w-full'/>
          <h2 className='absolute text-white text-5xl font-bold'>Slide 3</h2>
        </div>
      </Carousel>
      <style>
        {`
          [data-active='false'] {
            display: none !important;
          }
          [data-active='true'] {
            display: block !important;
          }
        `}
      </style>
    </div>
    </div>
  )
}

export default HeroSection

//link - https://media.istockphoto.com/id/1049768416/photo/content-trendy-cheerful-nice-cute-adorable-lovely-attractive-brunette-girl-with-wavy-hair-in.jpg?s=1024x1024&w=is&k=20&c=qZH8YGRQvqlRrBmFhi25TA6cFk5VwtYQznJXcCludVk=