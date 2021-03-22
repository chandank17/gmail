import React from 'react'
import './css/emailrow.css';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { IconButton, Checkbox } from '@material-ui/core';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import {useHistory} from 'react-router-dom'
import {selectMail} from './features/mailSlice';
import {useDispatch} from 'react-redux';


export default function EmailRow({id, title, subject, description, time}) {
    const history = useHistory();

    const dispatch = useDispatch();

    const openMail = ()=>{
        dispatch(
            selectMail(
                {
                    id,
                    title,
                    subject,
                    description,
                    time
                }
            )
        )

        history.push('/mail')
    }
    return (
        <div onClick={()=>openMail()} className="emailRow">
            <div className="emailRow_options">
                <Checkbox/>
                <IconButton>
                    <StarOutlineIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <div className="emailRow_title">
                {title}
            </div>
            <div className="emailRow_message">
                <h4>{subject} <span className="emailRow_description"> - {description}</span></h4>
            </div>
            <p className="emailRow_time">
                {time}
            </p>
        </div>
    )
}
