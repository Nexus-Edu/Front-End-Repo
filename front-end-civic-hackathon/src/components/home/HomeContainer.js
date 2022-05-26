import Mission from "./Mission"
import Context from "../../context/Context"
import { useContext } from "react"
import "../../App.css"

function HomeContainer() {
    const { userInfo } = useContext(Context)
    console.log(userInfo)
    return (
        <div>
            <Mission />
        </div>
    )
}

export default HomeContainer