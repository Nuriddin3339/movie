import axios from "axios";
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";
import "./SingeMovie.css"

const singleMovie = () => {
  const {singleId} = useParams()
    const [state, setState] = useState({
        isFetched: false,
        data:[],
        error:false,
      })
      useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/movie/${singleId}`,{
          params: {
            api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
          },
        })
            .then((res)=>res)
            .then((data)=>
            setState({
              isFetched: true,
              data: data.data,
              error: false,
            }),
            )
            .catch((err) => console.log(err))
          } ,[]);
          const styleBg = {backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${state.data.backdrop_path})`}
          // https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${state.data.backdrop_path}
          return (
            <div className="container mx-auto p-4 grid grid-cols-4  bg-cover  bg-no-repeat bgimg">
              <div className="w-[1535px] ml-[-15px] mt-[-16px] h-[687px] opacity-20" style={styleBg}>
              
              </div>
  {state.isFetched ? (
    <div>
      <div className="ml-[100px] rounded-xl w-[100%]  mt-10 bgg">
        <img
          className="rounded-xl transition-transform duration-300 transform  imgbgg "
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.backdrop_path}`}
          alt=""
          />
        </div>
      <div className=" absolute ml-[30px]  justify-center  mt-[-300px]  rounded-xl p-4 ">
        <h1 className="text-3xl font-bold text-white">{state.data.title}</h1>
        <div className="flex items-center">
          <h1 className="mr-2 text-white">{state.data.release_date}</h1>
          <div className="bg-gray-300 rounded-full w-24 h-6 overflow-hidden relative">
            <div className="bg-yellow-400 h-full " style={{ width: `${state.data.vote_average * 10}%` }}></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold ">
              {Math.round(state.data.vote_average * 10)}%
            </span>
          </div>
        </div>
        <div className="text-white font-bold">
        <h1 className="text-3xl font-bold text-white">Overview</h1>
          <h1 className="w-[800px]">{state.data.overview}</h1>
        </div>
      </div>
    </div>
  ) : (
    <div className="center">
      <div className="ring">
      <h1 className="loading">Loading...</h1>
      </div>
    </div>
  )}
</div>







































  //   <div className="container mx-auto p-4 grid grid-cols-4">
  //   {state.isFetched ? (
  //     <>
  //       <div className="ml-4 rounded-xl w-64 ">
  //         <img
  //           className="rounded-xl transition-transform duration-300 transform hover:scale-105 w-[270px]"
  //           src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.backdrop_path}`}
  //           alt=""
  //         />
  //       </div>
  //       <div className="flex flex-col justify-center ml-4">
  //         <h1 className="text-3xl font-bold text-gray-800">{state.data.title}</h1>
  //         <div className="flex items-center mt-2">
  //           <h1 className="mr-2 text-gray-600">{state.data.release_date}</h1>
  //           <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
  //             <h1 className="text-white text-lg font-bold">{Math.round(state.data.vote_average*10)}%</h1>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   ) : (
  //     <h1>Yuklanmoqda...</h1>
  //   )}
  // </div>



































    // <div className="container mx-auto  p-4 grid grid-cols-4" >
    //    { state.isFetched ? (
    //     <>
    //       <img className="ml-[152px] rounded-xl w-[300px]" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.backdrop_path}`} alt="" />
    //       <div>
    //       <h1 className="ml-[100px] font-bold">{state.data.title}</h1>
    //       <div>
    //         <h1 className="ml-[100px] font-bold text-[gray]">{state.data.release_date}</h1>
    //         </div> 
    //       <div>
    //       <h1 className="ml-[100px] bg-[green] w-12 text-center rounded-2xl ">{state.data.vote_average}</h1>
    //       </div>
    //       </div>
    //     </>
    //    ) : (
    //     <>
    //       <h1>Loading...</h1>
    //     </>
    //    )
    //    }
    // </div>
  )
}

export default singleMovie