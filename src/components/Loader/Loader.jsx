import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = ({ message = "Cargando..." }) => {
    return (
        <div className="loading-container">
            <Spinner animation="border" />
            <p>{message}</p>
        </div>
    );
};

export default Loader;
