import Context from "../../context/Context"
import { useContext, useState, useEffect } from "react"
import { Button } from "reactstrap"
import {Link, useLocation} from "react-router-dom"
import "../../post.css"

function Post(props) {
    let {name, profilePic, message, hashtag, date, username, id} = props
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

        // Modifying Date
        date = date.split('');
        // console.log(date)
        date = date.slice(0, 10)
        date = date.join('')
        // date = Date(date)
        // date = date.getTime()
        console.log(date)
        // index 10 and above


    return (
        // class="card"
        <div class="center">
            <Link to={`/discussionBoard/${id}`}> 
            {/* <div class="card-body">
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
            </div> */}

            <div className="post-container">
                {/* Post User's Image */}
                <div>
                    <img src={profilePic} alt="user_image" className="user-img" />
                </div>
                {/* Post Body */}
                <div className="post-body">
                    <h3>{username} <em>{date}</em></h3>
                    <span>&#64;</span>
                    <em>{userInfo.first_name} {userInfo.last_name}</em>
<hr />
                    <blockquote>{message}</blockquote>

                    <p>{hashtag}</p>
                    {/* <em>posted: {date}</em> */}
                </div>
            </div>
            </Link>
                
                
                {/* {userInfo.username === username && currUrl.pathname === "/discussionBoard" ? <Button onClick={()=>{
                     console.log(id)
                     deletePost(id)
                }}>delete</Button>: <></>}

                {userInfo.username === username && currUrl.pathname === `/discussionBoard/${id}` ? <Link to="/discussionBoard">
                <Button onClick={()=>{
                     console.log(id)
                     deletePost(id)
                }}>delete</Button>
                </Link> : <></>}     */}


            </div>
    )
}

export default Post