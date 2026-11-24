import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <img src="https://i.postimg.cc/7YbMQnbH/Error-404-con-gato-dormido.png" alt="Error 404 - Página no encontrada"
                style={{
                    width: "100%",
                    maxWidth: "900px",
                    height: "auto",
                    objectFit: "contain"
                }} />
            <Link to="/" style={{
                backgroundColor: "#8b8e70",
                color: "#faf8f4",
                textDecoration: "none",
                padding: "12px 30px",
                borderRadius: "30px",
                display: "inline-block",
                marginTop: "20px"
            }}>Volver al Inicio</Link>


        </div>
    )
}

export default Error