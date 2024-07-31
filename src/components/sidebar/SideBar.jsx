import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './sidebar.css'
import { AiOutlineBank } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { LiaUserNurseSolid } from "react-icons/lia";
import { FaHospitalAlt } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    <section className='sidebar'>
  {/* // links */}
  <div className="sidebar-top">
       <div className="sidebar-brand">
        <AiOutlineBank />
        <span>MEDILAB</span>
        </div>   
        {/* sidebarlinks             */}
        <div className="sidebar-links">
          <ul>
        <li> <Link to="/"><IoIosAddCircleOutline/> Dashboard</Link></li>
        <li> <Link to="/profile"><CgProfile/>My Profile</Link></li>
        <li> <Link to="/addtests"> <MdOutlineLocalHospital/>Add Tests</Link></li>
        <li> <Link to="/viewtests"><FaHospitalAlt/> Lab Tests</Link></li>
        <li> <Link to="/mybooking"><FaBook/>My Booking</Link></li>
        <li> <Link to="/addnurse"><MdOutlinePersonAddAlt1/>Add Nurses</Link></li>
        <li> <Link to="/viewnurses"><LiaUserNurseSolid/> Nurses</Link></li>
    </ul>
        </div>
  </div>
  {/* got otdivision */}
  <div className="sidebar-bottom">
    <AiOutlineAppstore/>
    <span>GREAT UI. <button>Go Pro</button></span>
    <br />
    <span><strong>Upgrade Now</strong></span>

  </div>
  {/* logout division */}
 <div className="p-4 sidebar-logout">
      <button className="btn btn-dark btn-sm"><RiLogoutBoxLine/> Log Out</button>

 </div>
  </section>
  )
}

export default SideBar
