import React, {useState} from "react";
// import { useEffect } from "react";
import Context from "./Context";

function ContextProiver({children}){
/// this is where we will add state that will be distribted though out the app. 
    const [newPost, setNewPost] = useState({})
    const [comments,setComments] = useState(null);
    const [commentPost, setCommentsPost] = useState(null);
    const [post, setPost] = useState(null);
    const [userInfo, setUserInfo] = useState("amir.123dfv")


    let context = {
        newPost,
        setNewPost,
        comments,
        setComments,
        commentPost,
        setCommentsPost,
        post,
        setPost,
        userInfo
    };


    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default ContextProiver