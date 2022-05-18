import Login from "./Login"
import Signup from "./Signup"

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