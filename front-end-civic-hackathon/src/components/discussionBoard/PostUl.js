import Post from './Post'
import {Link} from "react-router-dom"
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react"
import { Button } from "reactstrap"



function PostUl(props){
    const { array } = props
    const {userInfo} = useContext(Context)
    console.log(array)
    return(
        <ul>{
            array.map((post) => <li  key={post.id}>
                <Link to={`/discussionBoard/${post.id}`}> 
                <Post name={post.name} profilePic={post.profile_pic} message={post.message} hashtag={post.hashtag} date={post.date} username={post.username}/>
                </Link>
                {userInfo !== post.username ? <></>: <Button onClick={()=>{
                    
                }}>delete</Button>} 
                </li>)
        }</ul>
    )
}

export default PostUl