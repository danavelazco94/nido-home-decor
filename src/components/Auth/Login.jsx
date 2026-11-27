import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./Auth.css";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(email, password);

            const from = location.state?.from?.pathname || "/";

            navigate(from, { replace: true });
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/invalid-credential") {
                setError("El correo o la contraseña son incorrectos.");
            } else if (error.code === "auth/user-not-found") {
                setError("No existe una cuenta con ese correo electrónico.");
            } else if (error.code === "auth/wrong-password") {
                setError("La contraseña es incorrecta.");
            } else if (error.code === "auth/invalid-email") {
                setError("El correo electrónico no es válido.");
            } else {
                setError("No se pudo iniciar sesión. Intentá nuevamente.");
            }
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-container">
            <h2>Iniciar sesión</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="username"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                />

                {error && <p>{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Ingresando..." : "Iniciar sesión"}
                </button>
            </form>
        </section>
    );
};

export default Login;