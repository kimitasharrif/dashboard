import React, { useState } from 'react';
import './signup.css'
import axiosInstance from '../../helpers/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
    const [permit, setPermit] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // add states to see whether its loading,success or failure 
    const [message, setMessage] = useState('');
    const [ loading, setLoading] = useState(false)
    const [failure, setFailure] = useState(null)
    const [success, setSuccess]= useState(null)


    const handleSignup = async (e) => {
        // alert("Yoou clicked submit" + name + " " + email)
        // this action will be triggerd when user clicks submit button 
        e.preventDefault();
        setLoading(true)
        // use axois instanse to post data to our api 
        axiosInstance.post('/labsignup', {
            lab_name: name,
            permit_id: permit,
            email: email,
            phone: phone,
            password: password,

            })

            .then((rensponse)=>{
                setSuccess(rensponse?.data?.message)
                // console.log(rensponse)
                setLoading(false)


            })
            .catch((error)=>{
                setLoading(false)
                setFailure(error.message)
            })

        

        
    };
    // loading page 
    if (loading){
        return <p>Loading...... please wait.</p>
    }

  return (
    <section className='form'>
        {/* return rensponse for success  */}
        {success && <div className='success'>{success}</div>}
        {/* return rensponse for failure  */}
        {failure && <div className='failure'>{failure}</div>}
     <form onSubmit={handleSignup} className=' card shadow p-3 pt-4'>
        <h1>Register Lab</h1>
                <div className="form-group">
                    {/* <label htmlFor="labName">Lab Name</label> */}
                    <input
                        type="text"
                        id="labName"
                        placeholder='Enter Lab Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="permitId">Permit ID</label> */}
                    <input
                        type="text"
                        id="permitId"
                        placeholder='Enter Permit Id'
                        value={permit}
                        onChange={(e) => setPermit(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter Lab email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="phone">Phone</label> */}
                    <input
                        type="text"
                        id="phone"
                        placeholder='Enter Lab Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                        type="password"
                        id="password"
                        placeholder='Enter Lab password '
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                <Link to="/signin">Already have an Account, Login</Link>
            </form>
            {name}
            <br />
            {permit}
            <br />
            {email}
            <br />
            {phone}
            <br />
            {password}
      
    
    </section>
  )
}

export default Signup
