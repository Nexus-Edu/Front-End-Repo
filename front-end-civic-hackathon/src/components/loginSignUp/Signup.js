import React from 'react';
import '../../LoginSignUp.css';
import Context from "../../context/Context";
import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

export default function Signup() {

  const { setUserInfo } = useContext(Context);


  // Holds the state of the sign up form
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = (e) => {

  //   e.preventDefault()
  //   setState({
  //     username: e.target.UserName.value,
  //     password: e.target.Password.value,
  //     email: e.target.Email.value,
  //     first_name: e.target.FirstName.value,
  //     last_name: e.target.LastName.value
  //   })
  // }
  // console.log(state)

  // const signUpInformation = createContext(state);
  // console.log(signUpInformation)


  // useEffect(() => {
  //   const fetchNewUser = () => {
  //     fetch('http://localhost:5000/signup', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(state)
  //     })
  //     console.log(state)
  //   }
  //   fetchNewUser()
  // }, [state])

  async function createAccount(){
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    })

    const data = await res.json()
    setUserInfo(data.data[0])
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
    }}>

      {/* {console.log(state)} */}
      <div className="card">
        {/* Card Heading */}
        <h2>Sign Up:</h2>

        {/* First name */}
        <label for="first_name">First Name</label>
        <input type="text" name="first_name" value={state.first_name} placeholder="Enter First Name" className="card-input" onChange={handleChange} />

        {/* Last name */}
        <label for="last_name">Last Name</label>
        <input type="text" name="last_name" value={state.last_name} placeholder="Enter Last Name" className="card-input" onChange={handleChange}/>

        {/* Email */}
        <label for="email">Email</label>
        <input type="email" name="email" value={state.email} placeholder="Enter email" className="card-input" onChange={handleChange}/>

        {/* Username */}
        <label for="username">Username</label>
        <input type="text" name="username" value={state.username} placeholder="Enter Username" className="card-input" onChange={handleChange}/>

        {/* Password */}
        <label for="password">Password</label>
        <input type="password" name="password" value={state.password} placeholder="Enter Password" className="card-input" onChange={handleChange}/>

        {/* Sign Up Button */}
        <Link to='/'>
          <button className="card-input card-btn" onClick={() => {
            createAccount()
            setState({
              first_name: "",
              last_name: "",
              email: "",
              username: "",
              password: ""
            })
          }
          }>Sign Up</button>
        </Link>
      </div>
    </form>
  )
}

