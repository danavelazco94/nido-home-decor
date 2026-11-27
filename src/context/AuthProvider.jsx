import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        return await signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
            setUser(userFirebase);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};