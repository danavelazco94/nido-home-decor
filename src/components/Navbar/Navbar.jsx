import logo from "../../assets/logo.png"
import CartWidget from "../Cartwidget/Cartwidget"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo de NIDO" className="navbar-logo" />

            <ul className="navbar-categories">
                <li><a href="#">Cerámica</a></li>
                <li><a href="#">Textiles</a></li>
                <li><a href="#">Aromas</a></li>
                <li><a href="#">Decoración</a></li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default Navbar