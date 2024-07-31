import React, { useState } from 'react';
import './signin.css'

const Signin = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {}
  return (
    <section className='form'>
      <h1>Signup Page</h1>
     <form onSubmit={handleSubmit} className=' card shadow p-3 pt-4'>
                <div className="form-group" >
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {email}
           
            <br />
            {password}
            </section>
  )
}

export default Signin
