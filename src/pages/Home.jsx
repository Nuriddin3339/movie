import Banner from "../components/Banner/Banner"
import PopularMovie from "../components/TrendingMovie/PopularMovie/PopularMovie"
import TrendingMovie from "../components/TrendingMovie/TrendingMovie"

const Home = () => {
  return (

    
    <div className="container mx-auto p-4">
      <Banner />
      <TrendingMovie  />
      <PopularMovie />
    </div>



    )
}

export default Home