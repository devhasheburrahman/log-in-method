import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHUbProvider = new GithubAuthProvider();

    const HandleGoogleSingIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            }).catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogIn = () => {
        signInWithPopup(auth, gitHUbProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
            }).catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            {user ? <button onClick={handleSingOut}>Sing Out</button> :
                <div>
                    <button onClick={HandleGoogleSingIn}> google Login</button>
                    <button onClick={handleGithubLogIn}> GitHub LogIn</button>
                </div>
            }

            {user && <div>
                <h3>user:{user.displayName} </h3>
                <h3> email:{user.email} </h3>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;