import React from 'react'

function Footer() {
  return (
      <div className="footer grid grid-cols-1 md:grid-cols-4 gap-y-10 ">
          <div className="space-y-4 text-x5 text-gray-500">
              <h5 className="font-bold">ABOUT</h5>
              <p>How Airbnb works</p>
              <p>Newsroom</p>
              <p>Investors</p>
              <p>Airbnb Plus</p>
              <p>Airbnb Luxe</p>
          </div>
          <div className="space-y-4 text-x5 text-gray-500">
              <h5 className="font-bold">COMMUNITY</h5>
              <p>Accessibility</p>
              <p>This is not a real site</p>
              <p>Its an awesome clone</p>
              <p>Cant give referrals , yet to get a job</p>
          </div>
          <div className="space-y-4 text-x5 text-gray-500">
              <h5 className="font-bold">HOST</h5>
              <p>Aspiring react developer</p>
              <p>Presents</p>
              <p>Airbnb</p>
              <p>Clone</p>
          </div>
          <div className="space-y-4 text-x5 text-gray-500">
              <h5 className="font-bold">SUPPORT</h5>
              <p>Help Centre</p>
              <p>Trust and safety</p>
              <p>Say hi on LinkedIn</p>
          </div>
    </div>
  )
}

export default Footer