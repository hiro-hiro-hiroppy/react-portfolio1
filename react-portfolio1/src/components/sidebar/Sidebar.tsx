import React from 'react'
import { SidebarData } from './SidebarData'
import SidebarIcon from './SidebarIcon';
import "./Sidebar.css";
import { WindowSharp } from '@mui/icons-material';

const sidebarIconClick = (url: string, isOutlink: boolean) => {    
    if(isOutlink) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }    
};

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <SidebarIcon />
        <ul className='SidebarList'>
            {SidebarData.map((value, key) => {
                return (
                    <li 
                    key={key} 
                    id={ window.location.pathname == value.link ? "active" : ""} 
                    className="row" 
                    onClick={() => sidebarIconClick(value.link, value.isOutlink)}>
                        <div id="icon">{value.icon}</div>
                        <div id="title">{value.title}</div>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default Sidebar