import Post from "../discussionBoard/Post"
import CommentCard from "./CommentCard"
import MakeCommentModel from "./MakeCommentModel"

/// a few things that need to get built out
/*
- a add comment button 
- render out the comments of that post in a ul 
     -render each comment as li -> comment card commonent
- need to build out a back to comments button
*/


/*
logic need for this page -> 
-a way to render a spesific post -> the one from the params id.
-render all the comments associated with that post using the card componet
-a button to add a comment
-> way to show that post that comment on to the page. 
*/
function Comments(){


    return(
        <div>
            <Post/>
            <MakeCommentModel/>
            {/* this compnet will take in info about the post and render it at the top of the page*/}
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            comments page 
        </div>
    )
}

export default Comments