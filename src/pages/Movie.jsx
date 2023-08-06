import axios from "axios";
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard/MovieCard";

const Movie = () => {
    const [state, setState] = useState({
        isFatched: false,
        data:[],
        error:false
     })
    useEffect(()=>{
        axios
        .get("https://api.themoviedb.org/3/movie/popular", {
            params: {
              api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
            }
          })
            .then((res)=>res)
            .then((data)=>{
                setState({
                    isFatched:true,
                    data:data.data.results,
                    error:false
                }).catch(err =>{
                    setState({
                        isFatched:true,
                        data:[],
                        error:err
                  })
                })  
            }) 
          } ,[])  
  return (
    <div className="container mx-auto  p-4 grid grid-cols-4" >
        {
            state?.data?.map((movie) =>(   
              <MovieCard 
              key={movie.id} 
              id={movie.id}
              title={movie.title}
              rating = {movie.vote_average} 
              date={movie.release_date} img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} /> 
            ))}
    </div>
  )
}

export default Movie