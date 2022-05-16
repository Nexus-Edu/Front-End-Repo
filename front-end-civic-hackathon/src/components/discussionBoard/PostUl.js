import Post from './Post'
import {Link} from "react-router-dom"


function PostUl(){
    const names = ["leo","ana","cc","mark","zo","jah"]
    return(
        <ul>{
            names.map((name, index) => <li  key={index}>
                <Link to={`/discussionBoard/${index}`}> 
                <Post name={name}/>
                </Link> 
                </li>)
        }</ul>
    )
}

export default PostUl