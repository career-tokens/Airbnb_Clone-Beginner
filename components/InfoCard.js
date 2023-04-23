import React from 'react'
import Image from 'next/legacy/image'
import {
    HeartIcon,
    StarIcon
} from '@heroicons/react/24/solid';


function InfoCard({key,img,location,description,title,star,price,total,lat,long}) {
    const handleMapClick = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${long}`, "_blank")
    }

    return (
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out
        first:border-t">
            <div className="relative h-28 w-44 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                className="rounded-2xl"/>
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </div>

                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div className="flex items-center">
                        <button onClick={handleMapClick} className="map  text-white font-semibold py-2 px-4 rounded ">
                            View location on Google Maps
                        </button>
                    </div>
                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard
