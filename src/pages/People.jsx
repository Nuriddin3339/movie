// import { data } from "autoprefixer"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const People = ()=>{
  const [state,setState] = useState({
    isFetched:false,
    data:[],
    error:false,
  })
  useEffect(()=>{
    axios
    .get("https://api.themoviedb.org/3/person/popular",{
      params:{
        api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
      }
    })
    .then((res)=>(res))
    .then((data)=>{
      setState({
        isFetched:true,
        data:data.data.results,
        error:false
      })
    })
    .catch((err)=>{
      setState({
        isFetched:true,
        data:[],
        error:err
      })
    })
  },[])

// console.log(state.data);


return(
  <>
     <h1 className="ml-16 animate-pulse text-[#f1410b]  text-4xl font-bold">Popular people</h1>
    <div className="ml-[100px] mt-10  grid grid-cols-4">
      {
        state?.data?.map((state)=>(
          // console.log(state),
          <Link to={`/people-page/${state.id}`}>
            <div >
              <div className="mb-10" >
                    <img className="mb-10 rounded-t-xl" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.profile_path}`} alt="" />
                    <h1 className="bg-red-700 w-[220px] h-[60px] mt-[-40px] text-center pt-[16px] text-lg font-bold rounded-b-xl">{state.name}</h1>
              </div>
            </div>
          
          </Link>
        ))
      }
    </div>
  </>
)


}

// const People = () => {
//   const [state, setState] = useState({
//     isFetched:false,
//     data:[],
//     error:false,
//   })
//   useEffect(()=>{
//     axios
//     .get("https://api.themoviedb.org/3/trending/person/day?",{
//       params:{
//         api_key: "5fed4ae9c77793fe23d6323b699eb9eb"
//       }
//     })
//     .then((res)=> res)
//     .then((data)=>{
//       setState({
//         isFetched:true,
//         data:data.data.results,
//         error:false
//       })
//     })
//     .catch((err)=>{
//       setState({
//         isFetched:true,
//         data:[],
//         error:err
//       })
//     })
//   } ,[])
//   // console.log(state.data)

//   return(
//     <>

//     <h1  className="ml-[100px] mb-12 text-4xl font-bold mt-2">People</h1>
//      <div className="grid grid-cols-4 ml-[110px]" >
//          {
//           state?.data?.map((state)=>(
//               // console.log(state),
//              <Link to={`/people-page/${state.id}`}>
//              <div key={state.id}>
//                 <div>
//                  <img  className=" rounded-tl-xl rounded-tr-xl"src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.profile_path}`} alt="" />
//                  <h2>{state.name}</h2>
//                 </div>
//              </div>
//              {state?.known_for?.map((state) => (
//                <div>
//               {/* <h2>{console.log(state.title)}</h2> */}
//               </div>
//             // console.log(state.known_for , "salom title"),
//             // <span key={item}>{item.title}</span>
//             ))}
//              </Link>
//           )) 
//         }
//      </div>
//     </>
//  )
// }

export default People