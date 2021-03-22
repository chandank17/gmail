import { Button } from '@material-ui/core'
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './css/sidebar.css';
import SideBarOptions from './SideBarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {  Link } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { openSendMessage } from './features/mailSlice'



function SideBar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} className="sidebar_compose" onClick={()=>dispatch(openSendMessage())}>Compose</Button>
            <Link to="/"><SideBarOptions title="Inbox" Icon={InboxIcon} selected={true} number={58}/></Link>
            <SideBarOptions title="Stared" Icon={StarIcon} number={58} selected={false}/>
            <SideBarOptions title="Snoozed" Icon={AccessTimeIcon} number={10} selected={false}/>
            <SideBarOptions title="Send" Icon={NearMeIcon} number={10} selected={false}/>
            <SideBarOptions title="Draft" Icon={NoteIcon} number={2} selected={false}/>
            <SideBarOptions title="More" Icon={ExpandMoreIcon}  selected={false}/>

            <div className="sidebar_footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>

                    
                </div>
            </div>
        </div>

        
    )
}

export default SideBar
