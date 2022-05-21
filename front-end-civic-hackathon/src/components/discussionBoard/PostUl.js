import Post from './Post'
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react"
import { Button } from "reactstrap"


function PostUl(props){
    // const { array } = props
    const { post } = useContext(Context)
    return(
        <ul>{
            post.map((post) => <li  key={post.id}>
                <Post name={post.name} profilePic={post.profile_pic} message={post.message} hashtag={post.hashtag} date={post.date} username={post.username} id={post.id}/>
                </li>)
        }</ul>
    )
}

export default PostUl