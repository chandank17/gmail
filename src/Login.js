import { Button } from '@material-ui/core';
import React from 'react'
import './css/login.css';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(login({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }));
        }).catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""></img>
                <Button variant="contained" color="primary" onClick={() => signIn()}>Login</Button>
            </div>
        </div>
    )
}

export default Login
