import logo from '../assets/react.svg'
import {Link} from "react-router-dom"

const Home = () => {

    return (
        <Link to="/inicio">
        <img src={logo} alt="logo" width="100" />
        </Link>
    )
}

export default Home