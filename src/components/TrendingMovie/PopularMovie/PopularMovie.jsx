import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const PopularMovie = () => {
    const [state, setState] = useState({
        isFatched: false,
        data:[],
        error:false
     })
    useEffect(()=>{
        axios
        .get("https://api.themoviedb.org/3/tv/popular", {
            params: {
              api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
            }
          })
            .then((res)=>res)
            .then((data)=>{
                console.log(data.data.results);
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
        //   console.log(data);
          return(
            <>
           <h1 className="ml-[100px] mb-12 text-4xl font-bold mt-2 animate-pulse text-[#f1410b]">Popular</h1>
             <div className="grid grid-cols-4 ml-[110px]" key={state.data.id} >
                 {
                  state?.data?.map((state)=>(
                     <Link to={`/single-movie/${state.id}`}>
                     <div key={state.id}>
                        {/* console.log(data); */}
                        <div>
                         <img  className=" rounded-tl-xl rounded-tr-xl"src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.backdrop_path}`} alt="" />
                         <div className="bg-red-700 w-[220px] h-[120px] rounded-br-xl rounded-bl-xl mb-8 text-center">
                         <h2>{state.name}</h2>
                         <h2>{state.first_air_date}</h2>
                         <div className="bg-gray-300 rounded-full w-24 h-6 overflow-hidden relative ml-14  mt-2">
                            <div className="bg-yellow-400 h-full " style={{width: `${state.vote_average*10}%`}}>
                                 <span>{Math.round(state.vote_average*10)}%</span>
                            </div>
                         </div>
                         </div>
                        </div>
                     </div>
                     </Link>
                  )) 
                 }
             </div>
            </>
          )
}


export default PopularMovie