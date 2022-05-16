import Post from './Post'
import MakeAPost from './MakeAPost'
import Context from "../../context/Context"
import FilterButton from './FilterButton'
import { useContext, useState } from "react"
import PostUl from './PostUl'

function DiscussionBoard(){
    const { setPostDescription, postDescription, hashTags} = useContext(Context)
    console.log(postDescription, "----", hashTags)
    // console.log)
    // 
    return(
        <>
        {/* <h1>{postDescription}</h1> */}
        <MakeAPost/>
        <FilterButton/>
        <br>
        </br>
        <br>
        </br>
        <PostUl/>
        {/* <ul>
            <Post/>
        </ul> */}
        </>
    )
}

export default DiscussionBoard