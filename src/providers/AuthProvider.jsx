import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
        
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }


    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                // console.log('last sign in user',currentUser);
                setUser(currentUser)
                // setLoading(false)
            }
            else{
                // console.log('no user log in');
                setUser(null)
            }
            setLoading(false);
        })

        return () =>{
            unsubscribe();
        }
    },[])
    

    const authInfo = {
        createUser,
        user,
        logOutUser,
        logInUser,
        loading,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;