import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confic";


const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
}

export default initializeAuthentication;