import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Logo de NIDO" className="navbar-logo" />
            </Link>

            <ul className="navbar-categories">
                <li><NavLink to="/category/ceramica">Cerámica</NavLink></li>
                <li><NavLink to="/category/textiles">Textiles</NavLink></li>
                <li><NavLink to="/category/aromas">Aromas</NavLink></li>
                <li><NavLink to="/category/decoracion">Decoración</NavLink></li>
            </ul>

            <CartWidget />
        </nav>
    );
};

export default Navbar;
