import React, {useState} from "react";
// import { useEffect } from "react";
import Context from "./Context";

function ContextProiver({children}){
/// this is where we will add state that will be distribted though out the app. 
    const [newPost, setNewPost] = useState({})
    const [comments,setComments] = useState([]);
    const [commentPost, setCommentsPost] = useState({});
    const [post, setPost] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    

    let context = {
        newPost,
        setNewPost,
        comments,
        setComments,
        commentPost,
        setCommentsPost,
        post,
        setPost,
        userInfo,
        setUserInfo
    };


    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default ContextProiver