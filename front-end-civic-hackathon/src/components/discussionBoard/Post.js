import Context from "../../context/Context"
import { useContext, useState, useEffect } from "react"
import { Button } from "reactstrap"
import {Link} from "react-router-dom"

function Post(props) {
    const {name, profilePic, message, hashtag, date, username, id} = props
    const { userInfo, setPost } = useContext(Context)

        async function deletePost(id){

            const res = await fetch(`http://localhost:5000/board/post/${id}`, {
                method: "DELETE"
            })

            const resTwo = await fetch('http://localhost:5000/board')
            const data = await resTwo.json()
            setPost(data)
        }


    return (
        <div class="card">
            <Link to={`/discussionBoard/${id}`}> 
            <div class="card-body">
                <div className="flex-row">
                    <div>
                        <div>
                            <img src={profilePic} width="50" />
                        </div>
                        <h6 class="card-subtitle mb-2">{name} @ {username}</h6>
                    </div>

                    <div>
                        <p class="card-text">{message}</p>
                    </div>
                </div>
                <br></br>
                <div class="text-left">
                    {hashtag}
                </div>
            </div>
            </Link>
            <div class="footer text-muted card flex-row">
                <div>
                    posted: {date}
                </div>
                {userInfo.username !== username ? <></>: <Button onClick={()=>{
                     console.log(id)
                     deletePost(id)
                }}>delete</Button>} 
            </div>
        </div>
    )
}

export default Post