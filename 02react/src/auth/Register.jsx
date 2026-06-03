import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword ] = useState("");
  const navigate = useNavigate();

  function register(){
    navigate("/login");
  }


  return (
<form action={register} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <fieldset>
    <label htmlFor="">Register</label>
  </fieldset>
  <fieldset className="fieldset">
    <label className="label">Email</label>
    <input type="email" className="input validator" placeholder="Email" required
    value={email} onChange={(e) => setEmail(e.target.value)} />
    {/* <span className='text-red-400'> {email} </span> */}
    <p className="validator-hint hidden">Required</p>
  </fieldset>

  <label className="fieldset">
    <span className="label">Password</span>
    <input type="password" className="input validator" placeholder="Password" required
    value={password} onChange={(e) => setPassword(e.target.value)} />
    <span className="validator-hint hidden">Required</span>
    {/* <span className='text-red-400'> {password} </span> */}
  </label>

  <label className="fieldset">
    <span className='label'>Confirm Password</span>
    <input type="confirmPassword" className='input validator' placeholder='confirmPassword' required
    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } />

  </label>

  <button type = "submit" className="btn btn-neutral mt-4" type="submit">Register</button>
 
</form>
  )
}

export default Register