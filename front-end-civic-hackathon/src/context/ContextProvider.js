import React, { useState } from "react";
import { useEffect } from "react";
import Context from "./Context";

function ContextProiver({ children }) {
    /// this is where we will add state that will be distribted though out the app. 
    const [currUser, setCurruser] = useState("")
    const [postDescription, setPostDescription] = useState("");
    const [hashTags, setHashTags] = useState("empty")

    useEffect(() => {
        async function getUser() {
            const res = await fetch(`http://localhost:5000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: "eli12",
                    password: "example"
                })

            })
            console.log("hello?")
            const data = await res.json()
            setCurruser(data)
        }

        if(currUser === ""){
            getUser()
        }

    }, [currUser])

    let context = {
        postDescription,
        setPostDescription,
        hashTags,
        setHashTags
    };


    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default ContextProiver