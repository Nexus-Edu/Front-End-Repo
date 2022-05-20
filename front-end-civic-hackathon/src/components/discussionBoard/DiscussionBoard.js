import Post from './Post'
import MakeAPost from './MakeAPost'
import Context from "../../context/Context"
import FilterButton from './FilterButton'
import { useContext, useState, useEffect } from "react"
import PostUl from './PostUl'

function DiscussionBoard(){
    const { post, setPost} = useContext(Context)
    const [loading, setLoading] = useState(true)
    // const []

    useEffect(()=> {
        async function getPost(){
            const res = await fetch('http://localhost:5000/board')
            const data = await res.json()
            setPost(data)
            setLoading(false)
        }
        getPost()
    },[loading])

    return(
        <>
        {/* <h1>{"hello?"}</h1> */}
        <MakeAPost/>
        <FilterButton/>
        {loading ? <>loading...</> : <PostUl array={post}/>}
        </>
    )
}

export default DiscussionBoard