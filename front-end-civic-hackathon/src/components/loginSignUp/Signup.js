import React from 'react'
import '../../LoginSignUp.css'
import Context from "../../context/Context"
import { useContext, useState } from 'react'

export default function Signup() {
// Holds the state of the sign up form
  const [state, setState] = useState({
    FirstNameInput: "",
    LastNameInput: "",
    EmailInput: "",
    UserNameInput: "",
    PasswordInput: ""
  })

  const handleSubmit = (e) => {

    e.preventDefault()
    setState({
      FirstNameInput: e.target.FirstName.value,
      LastNameInput: e.target.LastName.value,
      EmailInput: e.target.Email.value,
      UserNameInput: e.target.UserName.value,
      PasswordInput: e.target.Password.value
    })
  }
  console.log(state)


  return (
    <form onSubmit={handleSubmit}>

        {/* {console.log(state)} */}
      <div className="card">
        {/* Card Heading */}
        <h2>Sign Up:</h2>

        {/* First name */}
        <label for="FirstName">First Name</label>
        <input type="text" name="FirstName" placeholder="Enter First Name" className="card-input" />

        {/* Last name */}
        <label for="LastName">Last Name</label>
        <input type="text" name="LastName" placeholder="Enter Last Name" className="card-input" />

        {/* Email */}
        <label for="Email">Email</label>
        <input type="email" name="Email" placeholder="Enter email" className="card-input" />

        {/* Username */}
        <label for="Username">Username</label>
        <input type="text" name="UserName" placeholder="Enter Username" className="card-input" />

        {/* Password */}
        <label for="Password">Password</label>
        <input type="password" name="Password" placeholder="Enter Password" className="card-input" />


        {/* Sign Up Button */}
        <button className="card-input card-btn">Sign Up</button>
      </div>
    </form>

  )
}

