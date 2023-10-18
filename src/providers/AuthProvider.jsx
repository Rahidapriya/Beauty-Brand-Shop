/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from '../components/firebase/firebase.config'
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    

    const [user, setUser] = useState(null);
    const [loading,setLoding]=useState(true)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


// const profileInfo=(name,photo)=>{
//     setLoding(true)
//    return updateProfile(auth.currentUser,

//      { 
//         displayName: name,
//          photoURL: photo ,
         
//         }
       
//         )
      
// }

const profileInfo = (name, photo) => {
    setLoding(true);
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
    .then(() => {
        // Update the user state with the new profile information
        setUser({
            ...user,
            displayName: name,
            photoURL: photo,
        });
        setLoding(false);
    })
    .catch((error) => {
        console.log("Error updating user profile:", error);
        setLoding(false);
    });
}












    // const createUser = (auth, email, password, name, photo) => {
    //     setLoding(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
    //       .then((user) => {
    //         // Update user profile with name and photo
    //         return updateProfile(user, { displayName: name, photoURL: photo })
    //           .then(() => {
    //             setUser(user);
    //             setLoding(false);
    //             return user;
    //           })
    //           .catch((error) => {
    //             console.error(error);
    //             // setLoding(false);
    //             throw error;
    //           });
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         // setLoding(false);
    //         throw error;
    //       });
    //   };
      
      
      console.log('current user',user);

const googleSignIn=(value)=>{
    setLoding(true)
    return signInWithPopup(auth,googleProvider);
}

    const signIn=(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    

    const logOut = () => {
        setLoding(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoding(false);


           


        });
        return () => {
            unSubscribe();
        }
    }, []);


   

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleSignIn,
        profileInfo,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
