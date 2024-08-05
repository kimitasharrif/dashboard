import React from 'react'
import './topbar.css'
import { AiFillCalendar ,AiOutlineAppstore} from 'react-icons/ai'
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import CheckSession from '../../helpers/CheckSession';
import { IoMdRefresh } from "react-icons/io";


const TopBar = () => {
    const { lab_name, lab_id, access_token } = CheckSession();

  // get lab name from local storage 
  const labName = localStorage.getItem("lab_name")
  return (
    <nav className='topbar'>
      {/* leftside */}
      <div className="topbar-admin">Admin Portal </div>

      {/* right hand side */}
   <div className="topbar-content">
    
    <div className="p-4 sidebar-refresh">
      <button className="btn btn-light btn-sm" ><IoMdRefresh/></button>
      {/* onClick={refresh} */}
      </div>
     <div className="topbar-date">
     <AiFillCalendar />
    <span>User: {labName}</span>
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
