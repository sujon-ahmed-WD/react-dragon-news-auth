import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

 
export const AuthContext=createContext(null) 
const AuthProvider = ({children}) => {

    const [User,SetUser]=useState(null);
    const[loading,setloading]=useState(true);

    const createUser=(email,password)=>{
        setloading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
  
    const Signin=(email,password)=>{
        setloading
        return signInWithEmailAndPassword(auth,email,password)
    }

    const SignOut=()=>{
        signOut(auth)
    }

    useEffect(()=>{
       const clear= onAuthStateChanged(auth,currentuser=>{
            SetUser(currentuser);
            setloading(false);
        })
        return ()=>{
            clear();
        }
    },[])
    
    const authInfo={
        User,
        loading,
        createUser,
        Signin,
        SignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;