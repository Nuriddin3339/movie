import { Link } from "react-router-dom"
import "./MovieCard.css"

const MovieCard = ({id,title, date, rating, img}) => {
  return (
    <Link to={`/single-movie/${id}` }>
      <div className=" relative mb-6 w-48 ml-20 hover:shadow-2xl text-center rounded-xl movieCard"> 
             <img src={img} alt="photo" className=" rounded-xl w-[300px] pb-10"/>
             <div className="bg-red-700 mt-[-40px] h-40 rounded-b-xl text-center">
             <h2 className="items-center font-bold text-white hover:text-blue-500 pt-5 pb-2" >{title}</h2>
             <span className="text-white">{date}</span>  
             <div className="bg-gray-300 rounded-full w-24 h-6 overflow-hidden relative ml-14  mt-2 ">
              <div className="bg-yellow-400 h-full " style={{width: `${rating * 10}%`}}>
             <span>{Math.round(rating*10)}%</span>
              </div>
             </div>
              </div>  
        </div> 
    </Link>
  )
}

export default MovieCard