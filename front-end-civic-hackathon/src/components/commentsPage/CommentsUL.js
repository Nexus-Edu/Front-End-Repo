import {useState, useEffect, useContext} from "react"
import { Link, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import Context from "../../context/Context";
// import context from "react-bootstrap/esm/AccordionContext";

function CommentsUL(){
    const {currUser} = useContext(Context)

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        async function getComments(){
            const res = await fetch(`http://localhost:5000/comments/1`)
            const data = await res.json()
            console.log(data)
            // setComments(data)
            console.log(comments)
            return data
        }

        getComments().then(data => {
            setComments(data)
            console.log("sdcsdc",comments)
        })
    },[currUser])

    return(
        <ul>{
            // comments.map()
        }</ul>
    )
}

export default CommentsUL