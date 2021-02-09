import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";


function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        //signIn
        auth
            .signInWithPopup(provider)
            .then((result) => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="" />
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                    Sign In
                </Button>
        </div>
    )
}

export default Login
