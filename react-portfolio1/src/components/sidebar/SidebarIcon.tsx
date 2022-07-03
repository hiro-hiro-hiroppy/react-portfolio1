import React from 'react'
import Icon from "../../images/userIcon.png"

const iconStyle = {
  "width": "160px"
};

const sidebarIconStyle = {
  "paddingTop": "20px",
  "paddingBottom": "15px",
  "text-align": "center",
};

const SidebarIcon = () => {
  return (
    <div style={sidebarIconStyle}>
      <img src={Icon} alt="" style={iconStyle} />
    </div>
  )
}

export default SidebarIcon