import Mission from "./Mission"
import Context from "../../context/Context" 
import { useContext } from "react"

function HomeContainer(){
    const {userInfo} = useContext(Context)
    console.log(userInfo)
    return(
        <div>
            {!userInfo ? <></> : <h1>welcome : {userInfo.username}</h1>}
            <Mission/>
        </div>
    )
}

export default HomeContainer