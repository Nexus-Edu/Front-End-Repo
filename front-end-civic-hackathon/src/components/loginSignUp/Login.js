import React, { useState, useEffect, useContext } from 'react'

import '../../LoginSignUp.css'
import Context from "../../context/Context"
import {Link} from "react-router-dom"
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


    async function logUserIn(){
        console.log(state)
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
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>


            <div className="card">
                {/* Card Heading */}
                <h2>Login:</h2>

                {/* Username */}
                <label for="UserName">Username</label>

                <input type="text" value={state.username} name="username" placeholder="Enter Username" className="card-input" onChange={handleChange}/>

                {/* Password */}
                <label for="password">Password</label>

                <input type="password" name="password" value={state.password} placeholder="Enter Password" className="card-input" onChange={handleChange}/>

                {/* Login Button */}

                <Link to="/user">
                <button onClick={()=>{
                    logUserIn()
                    setState({
                        username: "",
                        password: ""
                    })
                } 
                }className="card-input">Sign In</button>
                </Link>

            </div>
        </form>
    )
}
