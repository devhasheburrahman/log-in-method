import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const HandleGoogleSingIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message);
            })
        // console.log('google mama i am coming');
    }

    return (
        <div>
            <button onClick={HandleGoogleSingIn}> google Login</button>
        </div>
    );
};

export default Login;