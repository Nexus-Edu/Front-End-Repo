import React, { useState } from 'react'
import '../../LoginSignUp.css'

export default function Login() {

    

  return (
    <div className="card">
        {/* Card Heading */}
        <h2>Login:</h2>

        {/* Username */}
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="Enter Username" className="card-input"/>

        {/* Password */}
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Enter Password" className="card-input"/>

        {/* Login Button */}
        <button className="card-input">Sign In</button>
    </div>
  )
}
