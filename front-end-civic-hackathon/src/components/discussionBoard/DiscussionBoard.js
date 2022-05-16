import Post from './Post'
import MakeAPost from './MakeAPost'
import Context from "../../context/Context"
import { useContext, useState } from "react"

function DiscussionBoard(){
    const { setPostDescription, postDescription, hashTags} = useContext(Context)
    console.log(postDescription, "----", hashTags)
    // console.log)
    return(
        <>
        {/* <h1>{postDescription}</h1> */}
        <MakeAPost/>
        <br>
        </br>
        <br>
        </br>
        <ul>
            <Post/>
        </ul>
        </>
    )
}

export default DiscussionBoard