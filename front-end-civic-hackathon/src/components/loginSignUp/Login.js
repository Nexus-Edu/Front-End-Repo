import React, { useState } from 'react'
import '../../LoginSignUp.css'

export default function Login() {

  const [state, setState] = useState({
    UserNameInput: "",
    PasswordInput: ""
  })

  const handleSubmit = (e) => {

    e.preventDefault()
    setState({
      UserNameInput: e.target.UserName.value,
      PasswordInput: e.target.Password.value
    })
  }
  console.log(state)
    

  return (
<form onSubmit={handleSubmit}>

    <div className="card">
        {/* Card Heading */}
        <h2>Login:</h2>

        {/* Username */}
        <label for="UserName">Username</label>
        <input type="text" name="UserName" placeholder="Enter Username" className="card-input"/>

        {/* Password */}
        <label for="Password">Password</label>
        <input type="password" name="Password" placeholder="Enter Password" className="card-input"/>

        {/* Login Button */}
        <button className="card-input">Sign In</button>
    </div>
    </form>
  )
}
