import React, {useState, useEffect} from 'react'
import './css/emaillist.css';
import { IconButton, Checkbox } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import Section from './Section';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';


export default function EmailList() {
    const [emails, setEmails]= useState([]);

    useEffect(() => {
    
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(snapShot => setEmails(snapShot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        }))));
        
        console.log(emails)
       
    }, []);



    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                    <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>

                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />

            </div>

            <div className="emailList_list">
                {
                    emails.map(({data, id})=>(
                        <EmailRow key={id} id={id} title={data.to} subject={data.subject} description={data.message} time={new Date(data.timestamp?.seconds*1000).toUTCString()}/>
                    ))                    
                }
            
            </div>

        </div>
    )
}
