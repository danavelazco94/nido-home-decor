import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await register(email, password);
            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Este correo ya está registrado. Iniciá sesión.");
            } else if (error.code === "auth/weak-password") {
                setError("La contraseña debe tener al menos 6 caracteres.");
            } else if (error.code === "auth/invalid-email") {
                setError("El correo electrónico no es válido.");
            } else {
                setError("No se pudo crear la cuenta. Intentá nuevamente.");
            }
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-container">
            <h2>Crear cuenta</h2>

            <form onSubmit={handleRegister}>
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
                    placeholder="Contraseña (mínimo 6 caracteres)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="new-password"
                />

                {error && <p>{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Creando cuenta..." : "Registrarme"}
                </button>
            </form>
        </section>
    );
};

export default Register;