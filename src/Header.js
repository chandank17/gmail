import React from 'react';
import './css/header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';


function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        console.log('jooa')
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }

    return (
        <div className='header'>
            <div className="header_left">
                <IconButton onClick={() => {
                    // console.log(document.querySelectorAll('.sidebar_option'));
                }}>
                    <MenuIcon />
                </IconButton>
                <Link to="/"><img src='images/gmail_logo.png' alt="logo"></img></Link>

            </div>

            <div className="header_middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail"></input>
                <ArrowDropDownIcon className="header_inputCaret" />

            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <span>Developed by Chandan</span>

                <IconButton onClick={() => signOut()}>
                    <Avatar src={user?.photo} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
