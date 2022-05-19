import {useState, useEffect, useContext} from "react"
import { Link, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import Context from "../../context/Context";
// import context from "react-bootstrap/esm/AccordionContext";

function CommentsUL(){
    // const {currUser} = useContext(Context)
    const [loading, setLoading] = useState(true);
    // const [currentUser, setCurrentUser] = useState(null);
    const [comments,setComments] = useState(null);

    useEffect(()=>{
        async function getComments(){
            const res = await fetch(`http://localhost:5000/comments/1`)
            const data = await res.json()
            console.log(data)
            setComments(data)
            setLoading(false)
            console.log(comments)
            return data
        }
        getComments()
    },[loading])

    console.log(comments)

    return(
        <>{console.log(comments)}
        { loading ? <div>loading...</div> : <ul>{
            comments.data.map(comment => {
                return <li>
                    <CommentCard name={comment.first_name} username={comment.username} comment={comment.comment} posted={comment.created_at}/>
                </li>
                
            })
        }</ul>}
        </>
    )
}

export default CommentsUL