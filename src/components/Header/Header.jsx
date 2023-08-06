import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div className="container mx-auto p-4 bg-[#032541] text-[#88CDA5] flex items-center"  >
        <Link to={"/"} className="uppercase text-[#88CDA5] ml-[150px] text-xl movieafter">Movie</Link>
        <ul className="flex space-x-10 ml-[900px] text-base line">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/movie"}>Movie</Link>
            </li>
            <li>
                <Link to={"/people"}>People</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header