import React, { useState, useEffect } from 'react'
import '../../LoginSignUp.css'

export default function Login() {

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {

        e.preventDefault()
        setState({
            username: e.target.UserName.value,
            password: e.target.Password.value
        })
    }
    // console.log(state)

    useEffect(() => {
        
        const fetchUser = () => {
            fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state)
            })
            .then(response => response.json())
            .then(data => console.log(data.data))
            console.log(state)
        }
        fetchUser()
    }, [state])

    return (
        <form onSubmit={handleSubmit}>

            <div className="card">
                {/* Card Heading */}
                <h2>Login:</h2>

                {/* Username */}
                <label for="UserName">Username</label>
                <input type="text" name="UserName" placeholder="Enter Username" className="card-input" />

                {/* Password */}
                <label for="Password">Password</label>
                <input type="password" name="Password" placeholder="Enter Password" className="card-input" />

                {/* Login Button */}
                <button className="card-input">Sign In</button>
            </div>
        </form>
    )
}
