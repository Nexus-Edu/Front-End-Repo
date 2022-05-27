import React, { useState, useEffect, useContext } from 'react'
import { Box, Form, FormField, TextInput } from 'grommet';
import '../../LoginSignUp.css'
import Context from "../../context/Context"
import { Link } from "react-router-dom"
import { RoutedButton as GrommetRoutedButton, Text } from 'grommet';


/// will need to import set user here 

export default function Login() {

    const { setUserInfo } = useContext(Context)

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }



    // console.log(state)


    async function logUserIn() {
        console.log("log in", state)
        // debugger
        const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        })
        const data = await res.json()
        console.log(data.data[0])
        setUserInfo(data.data[0])
    }

    // useEffect(() => {    
    //     const fetchUser = () => {
    //         fetch('http://localhost:5000/login', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(state)
    //         })
    //         .then(response => response.json())
    //         .then(data => console.log(data.data))
    //         console.log(state)
    //     }
    //     fetchUser()
    // }, [state])
    // console.log(state)

    return (
        <form onSubmit={(e) => {

            console.log('fhueoaf')
            e.preventDefault()
        }}>
            {/* Card Heading */}

            <Box align='center' pad='large'>
                <Form>
                    <Box border gap='medium' pad="large" width="medium">
                        <h2 className="login-form-heading">Login</h2>

                        {/* Username */}
                        <FormField htmlFor="Username" name='enabled' label='UserName'>
                            <TextInput type="text" value={state.username} name="username" placeholder="Enter Username" className="card-input" onChange={handleChange} />
                        </FormField>

                        {/* Password */}
                        <FormField htmlFor="password" name='enabled' label='Password'>
                            <TextInput type="password" name="password" value={state.password} placeholder="Enter Password" className="card-input" onChange={handleChange} />
                        </FormField>

                        {/* Login Button */}

                        <Box align="center" pad="large">
                            <GrommetRoutedButton label="Log In" path="/discussionBoard" onClick={(event) => {
                                event.preventDefault();
                                console.log(state, "state")
                                logUserIn()
                                setState({
                                    username: state.username,
                                    password: state.password
                                })
                            }
                            } />
                        </Box>
                    </Box>
                </Form>
            </Box>
        </form>







    )
}
