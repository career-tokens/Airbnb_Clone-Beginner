import React from 'react'
import Image from 'next/legacy/image'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-purple-500 bg-opacity-50 w-full md:w-1/3"></div>
          <div className="absolute top-0 left-0 p-8 text-white w-full md:w-1/3">
            <h3 className="text-3xl font-bold mb-2">{title}</h3>
            <p className="text-lg mb-4">{description}</p>
            <button className="bg-white text-purple-500 py-2 px-4 rounded-lg">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LargeCard
