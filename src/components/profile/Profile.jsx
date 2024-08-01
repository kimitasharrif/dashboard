import React from 'react'
import './profile.css'
import Layout from '../layout/Layout'
import Doctor from '../../images/Doctor.jpeg';

const Profile = () => {
  //get lab details from local storage
  const permit_id = localStorage.getItem("permit_id")
    const lab_id = localStorage.getItem("lab_id")
    const email= localStorage.getItem("email")
    const lab_name = localStorage.getItem("lab_name")
    const regdate = localStorage.getItem("reg_date")

  return (
    
<>
<Layout/>

 

<h1>User Profile</h1>
<div className='profile-card'>

 
<div className='profile-header'>
<div className='profile-picture'>
{/* Replace with user's actual picture */}
<img src={Doctor} alt='Profile' />
</div>
<h2 className='profile-title'>{lab_name}</h2>
</div>
<div className='profile-content'>
<div className='profile-detail'>
<strong>ID:</strong> <span>{lab_id}</span>
</div>
<div className='profile-detail'>
<strong>Permit:</strong> <span>user.permit</span>
</div>
<div className='profile-detail'>
<strong>Email:</strong> <span>{email}</span>
</div>
<div className='profile-detail'>
<strong>Phone:</strong> <span>user.phone</span>
</div>
<div className='profile-detail'>
<strong>Registration Date:</strong> <span>{regdate}</span>
</div>
</div>
</div>
</>
    
   
  )
}

export default Profile
