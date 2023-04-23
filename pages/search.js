import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import { format } from 'date-fns';
import InfoCard from '@/components/InfoCard';
import Footer from '@/components/Footer';
function search({searchResults}) {

  const route = useRouter();
  console.log(route.query);
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = route.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}-${formattedEndDate}`;

  return (
      <div>
      <Header placeholder={`${location}|${range}|${noOfGuests} guests`} />
          <main className="flex">
              <section className="flex-grow pt-14 px-6">
          <p className="text-x5">300+ Stays -{range}- for {noOfGuests} guests</p>

                  <h1 className="text-3xl font-semibold mt-2 mb-6">Stays on {location}</h1>

                  <div className="grid grid-cols-2 gap-x-14 gap-y-5 lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button-shortcut">Cancellation Flexibility</p>
                    <p className="button-shortcut">Type of Place</p>
                    <p className="button-shortcut">Price</p>
                    <p className="button-shortcut">Rooms and Beds</p>
                    <p className="button-shortcut">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(item => (
            <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                description={item.description}
                title={item.title}
                star={item.star}
                price={item.price}
                total={item.total}
                lat={item.lat}
                long={item.long} />
          ))}
          </div>
          
          </section>
      </main> 
     
      
      <Footer/>
      </div>
  )
}

export default search
export async function getServerSideProps() {
  const searchResults = await fetch("https://api.jsonstorage.net/v1/json/d4582489-1a02-4ea6-9128-6814cd38dd8d/821bc5a8-6463-4796-90f9-cb8b362bdbb4")
    .then(
      (res) => res.json()
    );
  return {
    props: {
      searchResults,
    },
  };
}
  