import React from 'react'
import './topbar.css'
import { AiFillCalendar ,AiOutlineAppstore} from 'react-icons/ai'
import { IoMdNotifications } from "react-icons/io";
import { PiWindowsLogoBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";


const TopBar = () => {
  return (
    <nav className='topbar'>
      {/* leftside */}
      <div className="topbar-admin">Admin Portal </div>

      {/* right hand side */}
   <div className="topbar-content">
     <div className="topbar-date">
     <AiFillCalendar />
    <span>User: Bob</span>
     </div>
     <div className="topbar-icon">
    <AiOutlineAppstore/>
    <span>/</span>
    <IoMdNotifications/>
    <div className="topbar-image">
     <CgProfile/>
    </div>

   </div>
    </div>
   
    </nav>
  )
}

export default TopBar