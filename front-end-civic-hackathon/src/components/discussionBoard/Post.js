import Context from "../../context/Context"
import { useContext, useState, useEffect } from "react"
import { Button } from "reactstrap"
import {Link, useLocation} from "react-router-dom"

function Post(props) {
    const {name, profilePic, message, hashtag, date, username, id} = props
    const { userInfo, setPost } = useContext(Context)
    const currUrl = useLocation();
    // console.log(currUrl.pathname)

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
                {/* { ()=> {
                    console.log("hello")
                    if( userInfo.username !== username ){
                        if( currUrl.pathname === "/discussionBoard"){
                            return <Button onClick={()=>{
                                console.log(id)
                                deletePost(id)
                           }}>delete</Button>
                        } else {
                            return <Link to="/discussionBoard">
                            {console.log("hello")}
                            <Button onClick={()=>{
                                console.log(id)
                                deletePost(id)
                           }}>delete</Button>
                            </Link>
                        }
                    }else {
                        return <></>
                    }
                    // currUrl === "/discussionBoard" ? 
                }
                } */}
                
                {userInfo.username === username && currUrl.pathname === "/discussionBoard" ? <Button onClick={()=>{
                     console.log(id)
                     deletePost(id)
                }}>delete</Button>: <></>}

                {userInfo.username === username && currUrl.pathname === `/discussionBoard/${id}` ? <Link to="/discussionBoard">
                <Button onClick={()=>{
                     console.log(id)
                     deletePost(id)
                }}>delete</Button>
                </Link> : <></>}    


            </div>
        </div>
    )
}

export default Post