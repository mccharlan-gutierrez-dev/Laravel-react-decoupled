import React, { useState } from 'react'

const Login = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("samplae@email.com");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          {/* <span className='text-red-400'>{email}</span> */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          {/* <span className='text-red-400'>{password}</span> */}
          <label className="label">Confirm Password</label>
          <input type="password" className="input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login