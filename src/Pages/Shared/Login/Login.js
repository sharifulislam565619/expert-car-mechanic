import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { user, signInWithGoogle } = useAuth()
    const history = useHistory([])
    const location = useLocation()
    const history_url = location?.state?.from || '/'
    const logInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(history_url)
            })
    }
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={logInWithGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;