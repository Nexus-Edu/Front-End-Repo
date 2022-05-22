import Login from "./Login"
import Signup from "./Signup"
import Context from "../../context/Context"
import React, { useState, useEffect, useContext } from 'react'

function loginSignUp(){
    return(
        <div className="container">
            <Login />
            <hr />
            <Signup />
        </div>
    )
}

export default loginSignUp