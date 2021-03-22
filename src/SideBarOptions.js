import React from 'react'
import './css/sidebaroption.css';


function SideBarOptions({Icon, title, number, selected}) {
    return (
        <div className={`sidebar_option ${selected && "sidebar-option-active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SideBarOptions
