import Signup from "./Signup"
import Login from "./Login"
import Context from "../../context/Context"
import React, { useState, useEffect, useContext } from 'react'

function loginSignUp(){
    return(
        <div className="container">
            <Signup />
        </div>
    )
}

export default loginSignUp