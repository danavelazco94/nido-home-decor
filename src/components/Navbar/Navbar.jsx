import { useContext } from "react";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log("Error al cerrar sesión:", error);
        }
    };

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

            <div className="navbar-auth">
                {user ? (
                    <>
                        <span>{user.email}</span>
                        <button onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Iniciar sesión</Link>
                        <Link to="/register">Crear cuenta</Link>
                    </>
                )}
            </div>

            <CartWidget />
        </nav>
    );
};

export default Navbar;