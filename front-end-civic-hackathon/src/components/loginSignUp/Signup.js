import React from 'react'
import '../../LoginSignUp.css'
import Context from "../../context/Context"
import { useContext, useState, useEffect } from 'react'

export default function Signup() {
  const { currentUser, setCurrentUser } = useContext
// Holds the state of the sign up form
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  })

  const handleSubmit = (e) => {

    e.preventDefault()
    setState({
      username: e.target.UserName.value,
      password: e.target.Password.value,
      email: e.target.Email.value,
      first_name: e.target.FirstName.value,
      last_name: e.target.LastName.value
    })
  }
  // console.log(state)
  // console.log('Here is contenxt', currentUser)

  // const signUpInformation = createContext(state);
  // console.log(signUpInformation)

  
  useEffect(() => {
    const fetchNewUser = () => {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        })
        // console.log(state)
        // setCurrentState(state)
      }
      fetchNewUser()
    }, [state, setCurrentUser])
    
    


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

