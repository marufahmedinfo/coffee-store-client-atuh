import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const[users, setUsers] = useState(null)
    const[loading, setLoading] = useState(true)

    const RegisterUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    
    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {
        users, 
        loading,
        RegisterUser,
        SignInUser


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;