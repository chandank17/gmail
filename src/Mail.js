import React from 'react'
import './css/mail.css';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory} from 'react-router-dom'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useSelector} from 'react-redux'
import { selectOpenMail } from './features/mailSlice'


function Mail() {
    const history = useHistory();
    const maildetails = useSelector(selectOpenMail);

    // console.log(maildetails);
 

    return (
        <div className="mail">
            <div className="mail_tools">
               <div className="mail_toolsLeft">
               <IconButton onClick={()=>history.push('/')}>
                    <ArrowBackOutlinedIcon/>
                </IconButton>
                
                <IconButton>
                    <ErrorIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <EmailIcon/>
                </IconButton>
                <IconButton>
                    <WatchLaterIcon/>
                </IconButton>
                <IconButton>
                    <CheckCircleIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>

               </div>
               <div className="mail_toolsRight">
               <IconButton>
                    <UnfoldMoreIcon/>
                </IconButton>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <ExitToAppIcon/>
                </IconButton>
               </div>
            </div>
            <div className="mail_body">
                <div className="mail_bodyHeader">
                    <h2>{maildetails.subject}</h2>
                    <LabelImportantIcon className="label_important"/>
                    <p>{maildetails.title}</p>
                    <p className="mail_time">{maildetails.time}</p>
                </div>

                <div className="mail_message">
                    {maildetails.description}
                </div>
            </div>
        </div>
    )
}

export default Mail
