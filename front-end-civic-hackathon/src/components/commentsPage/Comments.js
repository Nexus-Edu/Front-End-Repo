import Post from "../discussionBoard/Post"
import CommentCard from "./CommentCard"
import MakeCommentModel from "./MakeCommentModel"
import CommentsUL from "./CommentsUL"
import { useParams } from "react-router-dom";
import {useState, useEffect, useContext} from "react"
import Context from "../../context/Context";

function Comments(){
    const { id } = useParams();

    const {setComments, commentPost, setCommentsPost, userInfo} = useContext(Context)
    const [loading, setLoading] = useState(true);
    console.log(userInfo)

    useEffect(()=>{
        async function getComments(){
            const res = await fetch(`http://localhost:5000/comments/${id}`)
            const data = await res.json()
            setComments(data.data)
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
    },[])

    return(
        <div>
            { loading ? <>loading...</> : <Post name={commentPost.name} profilePic={commentPost.profile_pic} message={commentPost.message} hashtag={commentPost.hashtag} date={commentPost.date} username={commentPost.username} id={commentPost.id}/>}
            {!userInfo.username ? <></> : <MakeCommentModel/>}
            <CommentsUL/>
        </div>
    )
}

export default Comments