import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Movie, SingleMovie, SingleTv, Tv } from "./pages"
import Header from "./components/Header"
import Banner from "./components/Banner/Banner"
import People from "./pages/People"
import './App.css'
import PeoplePage from "./components/TrendingMovie/PeoplePage/PeoplePage"


function App() {
  return (
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/"  element={<Home/>}/>
            <Route exact path="/movie" element={<Movie/>}/>
            <Route exact path="/people" element={<People/>}/>
            <Route exact path="/single-movie/:singleId" element={<SingleMovie/>}/>
            <Route exact path="/tv/:id" element={<SingleTv/>}/>
            <Route exacr path="/people-page/:nmagap" element={<PeoplePage/>}/>
        </Routes>
      </Router>
  )
}

export default App
