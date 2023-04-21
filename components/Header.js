import React from 'react';
import Image from "next/legacy/image";
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
    UserIcon
} from '@heroicons/react/24/solid';

function Header() {
  return (
      <header className="matha sticky top-0 z-50 grid grid-cols-3
       bg-white shadow-md p-5 md:px-10">
          {/*left , using Image from next so img src not req*/}
          <div className="relative flex items-center 
          h-10 cursor-pointer my-auto">
              <Image
                  src="data:image/png;base64,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"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left" 
                  alt=""
              />
          </div>
          {/* middle-search  */}
          <div className="flex items-center border-2 searchbar">
              <input type="text" placeholder="   Start your search" className="input"/>
              <MagnifyingGlassIcon className="search-icon hidden md:inline-flex h-8 bg-red-400 text-white
               rounded-full p-2 cursor-pointer"/>
          </div>
          {/* right */}
          <div className="flex space-x-3 md:space-x-7 items-center justify-end text-gray-500">
             <div className="change flex space-x-1">
              <p className="hidden md:inline cursor-pointer text-lg">Become a host</p>
              <GlobeAltIcon className="globe h-7 cursor-pointer" />
             </div>     
              <div className="flex items-center space-x-1 border-2 p-2 rounded-full">
                  <Bars3Icon className="h-6" />
                  <UserIcon className="h-6"/>
              </div>
          </div>
        </header>
  )
}

export default Header;

