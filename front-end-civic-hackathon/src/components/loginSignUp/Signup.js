import React from 'react';
import '../../LoginSignUp.css';
import Context from "../../context/Context";
import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { Box, Form, FormField, TextInput } from 'grommet';
import { RoutedButton as GrommetRoutedButton, Text } from 'grommet';


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
    <div className='signupdiv'>
      {/* Card Heading */}
      
      {/* {console.log(state)} */}
      <Box className='form-box'>
        <Form>
      
         
          <Box border gap="medium" pad="large" width="medium" background="white b v  ">
          <h2 className='signup-title'>Sign Up</h2>
           {/* First name */}
          <FormField htmlFor="User-id" name="enabled" label="FirstName">
            <TextInput type="text" name="first_name" value={state.first_name} placeholder="Enter First Name" className="card-input" onChange={handleChange} />
          </FormField>

        {/* Last name */}
        <FormField htmlFor='lastName-id'  name='enabled' label='LastName'>
        <TextInput type="text" name="last_name" value={state.last_name} placeholder="Enter Last Name" className="card-input" onChange={handleChange}/>
        </FormField>

        {/* Email */}
        <FormField htmlFor='email' name='enabled' label="Email">
        <TextInput type="email" name="email" value={state.email} placeholder="Enter email" className="card-input" onChange={handleChange}/>
        </FormField>

        {/* Username */}
        <FormField htmlFor='UserName' name='enabled' label="UserName">
        <TextInput type="text" name="username" value={state.username} placeholder="Enter Username" className="card-input" onChange={handleChange}/>
        </FormField>

        {/* Password */}
        <FormField htmlFor="password" name='enabled' label= "Password">
        <TextInput type="password" name="password" value={state.password} placeholder="Enter Password" className="card-input" onChange={handleChange}/>
        </FormField>


        {/* sign in  */}
        <Box align="center" pad="large">
          <GrommetRoutedButton label="Sign Up" path="/Login" onClick={() => {
            createAccount()
            setState({
              first_name: "",
              last_name: "",
              email: "",
              username: "",
              password: ""
            })
          }
          } />
        </Box>


        {/* log in link*/}
        <Link to="/Login" variant = "body2">
          Already have an account ? Log In 
        </Link>

        
        
        
        

        {/* <Link to='/'>
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
        </Link> */}
          </Box>
        </Form>
      </Box>
    </div>
  )
}

