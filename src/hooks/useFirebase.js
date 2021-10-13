import { useEffect, useState } from 'react';

import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()






const googleProvider = new GoogleAuthProvider();



const useFirebase = () => {
    const [user, setUser] = useState()
    console.log(user)
    const auth = getAuth()
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                console.log(error);

            });
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
        });

        return () => unSubscribe;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        logOut,
        signInWithGoogle
    }
};

export default useFirebase;