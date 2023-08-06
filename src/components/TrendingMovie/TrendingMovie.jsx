import axios from "axios"
import { useEffect, useState } from "react"
import Home from "../../pages/Home"
import { Link } from "react-router-dom"
import "./TrendingMovie.css"

const TrendingMovie = () => {
       const [state, setState] = useState({
          isFetched: false,
          data: [],
          error: false,
         })
         useEffect(()=>{
            axios .get("https://api.themoviedb.org/3/trending/all/day?",{
                params:{
                    api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
                }
            })
            .then((res)=> res)
            .then((data)=>{
                console.log(data.data.results);
                setState({
                    isFetched:true,
                    data:data.data.results,
                    error:false
                })
                // console.log(data , "salom")

            })
            .catch((err)=>{
                useState({
                    isFetched:true,
                    data:[],
                    error:err
                })
            })
            
         },[])
        //  console.log(state.data); state.data.popularity
         return(
            <>
            <h1 className="ml-[100px] mb-12 text-4xl font-bold mt-2 animate-pulse text-[#f1410b] trending">Trending</h1>
             <div className="grid grid-cols-4 ml-[110px]" key={state.data.id} >
                 {
                  state?.data?.map((state)=>(
                     <Link to={`/single-movie/${state.id}`}>
                     <div key={state.id}>
                        <div>
                         <img  className=" rounded-tl-xl rounded-tr-xl"src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.backdrop_path}`} alt="" />
                         <div className="bg-red-700 w-[220px] h-[120px]  rounded-br-xl rounded-bl-xl mb-8 text-center">
                         <h2 className="">{state.title}</h2>
                         <h2 className="pt-2">{state.release_date}</h2>
                         <div className="bg-gray-300 rounded-full w-24 h-6 overflow-hidden relative ml-14 mt-2 trendinghover">
                            <div className="bg-yellow-400 h-full  " style={{width: `${state.vote_average*10}%`}}>
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
        
        
        {/* 
                                 <div className="bg-gray-300 rounded-full w-24 h-6 overflow-hidden relative">
                    <div className="bg-yellow-400 h-full " style={{ width: `${state.data.vote_average * 10}%` }}></div>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold ">
                      {Math.round(state.data.vote_average * 10)}%
                    </span>
                  </div> */}

export default TrendingMovie

// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Home } from "../../pages"

// const TrendingMovie = () => {
//    const [state, setState] = useState({
//   isFetched: false,
//   data: [],
//   error: false,
//  })
//  useEffect(()=> {
//   axios.get("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
//     params: {
//       api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
//     }
//   })
//   .then((res)=> res)
//   .then((data)=> {
//     console.log(data.data.results);
//     setState({
//       isFetched: true,
//       data: data.data.results,
//       error: false,
//     })
//   })
//   .catch((err)=>{
//     useState({
//       isFetched:true,
//       data:[],
//       error:true
//     })
//   })

//  }, [])
//      return(
//          <div>
//              {
//                  state?.data?.map((state)=>(
//                      <Home
//                      key={state.id}
//                      id={state.id}
//                      title
//                      />
//                  ))
//              }
//          </div>
//      )
// }

// export default TrendingMovie