import Post from "../discussionBoard/Post"
import CommentCard from "./CommentCard"
import MakeCommentModel from "./MakeCommentModel"
import CommentsUL from "./CommentsUL"
import { useParams } from "react-router-dom";
import {useState, useEffect, useContext} from "react"
import Context from "../../context/Context";

/// a few things that need to get built out
/*
- a add comment button 
- render out the comments of that post in a ul 
     -render each comment as li -> comment card commonent
- need to build out a back to comments button
*/

function Comments(){
    const { id } = useParams();

    const {currUser, comments,setComments, commentPost, setCommentsPost} = useContext(Context)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getComments(){
            const res = await fetch(`http://localhost:5000/comments/${id}`)
            const data = await res.json()
            setComments(data)
            setLoading(false)
        }
        async function getCommentPost(){
            const res = await fetch(`http://localhost:5000/board`)
            const data = await res.json()
            const currPost = data.find(cupost => cupost.id === Number(id))
            setCommentsPost(currPost);
        }
        getCommentPost()
        getComments()
    },[loading])

    return(
        <div>
            { loading ? <></> : <Post name={commentPost.name} profilePic={commentPost.profile_pic} message={commentPost.message} hashtag={commentPost.hashtag} date={commentPost.date} username={commentPost.username}/>}
            <MakeCommentModel/>
            {loading ? <></> : <CommentsUL array={comments}/>} 
        </div>
    )
}

export default Comments