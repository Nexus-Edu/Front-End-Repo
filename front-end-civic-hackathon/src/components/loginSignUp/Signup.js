import React from 'react'
import '../../LoginSignUp.css'
import Context from "../../context/Context"
import { useContext, useState } from 'react'

export default function Signup() {
  // const { setUserName, UserName, setPassword, Password, setEmail, Email } = useContext(Context)

  // const { setFirstName, FirstName, setLastName, LastName, setEmail, Email, setUserName, UserName, setPassword, Password } = useContext(Context);
  const [UserName, setUserName] = useState("")
  const [Password, setPassword] =  useState("")
  const [Email, setEmail] = useState("")
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")

  // const [state, setState] = useState({
  //   UserNameInput: "",
  //   PasswordInput: "",
  //   EmailInput: "",
  // })

  const [state, setState] = useState({
    FirstNameInput: "",
    LastNameInput: "",
    EmailInput: "",
    UserNameInput: "",
    PasswordInput: ""
  })

  // const handleSubmit = (e) => {

  //   e.preventDefault()
  //   setUserName(e.target.UserName.value)
  //   setPassword(e.target.Password.value)
  //   setEmail(e.target.Email.value)
  //   setState({
  //     UserNameInput: UserName,
  //     PasswordInput: Password,
  //     EmailInput: Email
  //   })
  //   console.log(state)
  // }

  const handleSubmit = (e) => {

    e.preventDefault()
    setFirstName(e.target.FirstName.value)
    setLastName(e.target.LastName.value)
    setEmail(e.target.Email.value)
    setUserName(e.target.UserName.value)
    setPassword(e.target.Password.value)
    setState({
      FirstNameInput: FirstName,
      LastNameInput: LastName,
      EmailInput: Email,
      UserNameInput: UserName,
      PasswordInput: Password
    })
    console.log(state)
  }


  return (
    <form onSubmit={handleSubmit}>

      <div className="card">
        {/* {console.log(state)} */}
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

