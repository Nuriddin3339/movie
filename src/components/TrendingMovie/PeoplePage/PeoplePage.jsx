import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./Peoplepage.css"

const singleMovie = () => {
  const {nmagap} = useParams()
    const [state, setState] = useState({
        isFetched: false,
        data:[],
        error:false,
     })
    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/person/${nmagap}`,{
            params: {
              api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
            },
          })
            .then((res)=>res)
            .then((data)=>
            // console.log(data),
             setState({
                 isFetched: true,
                 data:data.data,
                 error: false,
                }),
                )
                .catch((err) =>console.log(err))
            } ,[]);
            // console.log(state.data);
            // const peopleBg = {backgroundImage: `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${state.data.profile_path})`}  
     return (
         <div>
                {
                    state.isFetched ?
                     (
                     <div className="bg_img bg-no-repeat relative" >
                     <div className="" >
                        <div className="">
                        <img className=" rounded-xl mt-10 ml-6 peopleimg  " src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.profile_path}`} alt="" />
                        </div>
                        <div>
                        <h1 className="ml-[360px] peoplename absolute mt-[-460px] ">{state.data.name}</h1>
                        </div>
                     </div>
                        <div className="peoplebiography absolute">
                        <h1 className="bio absolute">Biography</h1>
                        <h1 className="biooo -mt-20 ">{state.data.biography}</h1>
                        </div>

                        <div className="ml-[22px] mt-[-60px]">
                            <h1 className="mt-[120px] text-xl uppercase mb-8 text-[#f1410b]">Personal information</h1>
                            <span className="text-xl text-[#f1410b]">Birthday</span>
                            <h1 className="mb-3  "> {state.data.birthday}</h1>
                            <span  className="text-xl text-[#f1410b]">Place of birth</span>
                            <h1 className="mb-3 "> {state.data.place_of_birth}</h1>
                            <span className="text-xl text-[#f1410b]">Popularity</span>
                            <h1 className=""> {state.data.popularity}</h1>
                        </div>
                     </div>
                     ) 
                     : (
                     <div className="center">
                        <div className="ring">
                     <h1 className="loading">Loading...</h1>
                        </div>
                     
                     </div>)
                    }
            </div>
         
         
         




















         // <div>
         //     {
         //         state?.data?.map((state=>{
         //             <h2>{state.data.name}</h2>
         //         }))
         //     }
         // </div>







         
         

 )




                































































 



//     <div className="container mx-auto p-4 grid grid-cols-4">
//   {state.isFetched ? (
//     <>
//       <div className="ml-4 rounded-xl w-64 overflow-hidden">
//         <img
//           className="rounded-xl transition-transform duration-300 transform hover:scale-105"
//           src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.backdrop_path}`}
//           alt=""
//         />
//       </div>
//       <div className="flex flex-col justify-center ml-4 bg-gray-100 rounded-xl p-4">
//         <h1 className="text-3xl font-bold text-gray-800 hover:shadow-md">{state.data.title}</h1>
//         <div className="flex items-center mt-2">
//           <h1 className="mr-2 text-gray-600 hover:shadow-sm">{state.data.release_date}</h1>
//           <div className="bg-gray-300 rounded-full w-24 h-6 overflow-hidden relative">
//             {/* <div className="bg-yellow-400 h-full" style={{ width: `${state.data.vote_average * 10}%` }}></div> */}
//             <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold">
//               {Math.round(state.data.vote_average * 10)}%
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   ) : (
      
//   <h1>Loading...</h1>
//   )}
// </div>
}

export default singleMovie