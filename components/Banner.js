import React from 'react'
import Image from "next/legacy/image";

const Banner = () => {
  return (
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
          src="https://media.cntraveler.com/photos/61a7ee6ece146197e4b4781d/16:9/w_2560%2Cc_limit/Moskito%2520Island_The%2520Oasis%2520Estate%2520Exterior.jpg"
          layout="fill"
          objectFit="cover"
          />
          <div className="absolute top-2/5 w-full ">
              <div className="wanna">
              <p className="go ">Like the scenery.......?  Amazing !!</p>
              <button className="help">Lets go there !!</button>
              </div> 
          </div>
      </div>
  )
}

export default Banner;