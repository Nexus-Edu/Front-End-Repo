import { Link, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import Context from "../../context/Context"
import { useContext, useState, useEffect } from "react"
// import context from "react-bootstrap/esm/AccordionContext";

function CommentsUL(){
    const {comments} = useContext(Context)
    console.log(comments)
    return(
       <ul>{
        comments.map(comment => {
                return <li>
                    <CommentCard name={comment.first_name} username={comment.username} comment={comment.comment} posted={comment.created_at} commentid={comment.id}/>
                </li>
            })
        }</ul>
    )
}

export default CommentsUL