import { Link, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
// import context from "react-bootstrap/esm/AccordionContext";

function CommentsUL(props){
    const {array} = props
    return(
       <ul>{
            array.data.map(comment => {
                return <li>
                    <CommentCard name={comment.first_name} username={comment.username} comment={comment.comment} posted={comment.created_at}/>
                </li>
            })
        }</ul>
    )
}

export default CommentsUL