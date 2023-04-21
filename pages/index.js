import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";


export default function Home({exploreData,cardData}) {
  return (
    <>
    <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            <div className="explore">Explore Nearby</div>
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">
           <div className="live">Live Anywhere</div> 
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">{cardData?.map((item) => (
            <MediumCard
              key={item.img}
              img={item.img}
              title={item.title} />
          ))}
          </div>
        </section>
        <LargeCard
          img="/Fotor_AI (1).jpg"
          title="Adventure awaits"
          description="Discover your dream destinations with Airbnb wishlists"
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then(res => res.json());

  const cardData = await fetch("https://api.jsonstorage.net/v1/json/d4582489-1a02-4ea6-9128-6814cd38dd8d/2e67cd08-7796-4d7b-9adf-c0323ac34320")
    .then(res => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
