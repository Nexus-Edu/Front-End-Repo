import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react"

/*
what needs to happen -> 
what is happening ? i am getting the new post but only once and thats it, figure out why 
*/

export default function PostForm() {
    const { newPost, setNewPost, post, setPost } = useContext(Context)

    const user = {
        user_id: 10
    }


    const [state, setState] = useState({
        message: "",
        hashtag: "",
    })


    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }


    async function sendPost() {
        const body = Object.assign(user, state);
        
        console.log(body)
        const res = await fetch('http://localhost:5000/board/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        const resTwo = await fetch('http://localhost:5000/board')
        const data = await resTwo.json()
        setPost(data)
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setState({
                message: "",
                hashtag: "",
            })
        }}>
            <label htmlFor="description">
                Description:
            </label>
            <textarea name="message" value={state.message} type="text" rows="4" cols="60" maxlength="150" placeholder="up to 150 char" onChange={handleChange}>
            </textarea>

            <label>
                Hashtags:
            </label>

            <input type="text" value={state.hashtag} name="hashtag" placeholder="ex: #Tech #Manhattan" onChange={handleChange} />

            <br></br>
            <br></br>
            <div class="modal-footer">
                <button type="submit" class="btn btn-secondary" value="make a post" data-bs-dismiss="modal" onClick={sendPost}>make a post</button>
                <button type="sumbit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={e => {
                    setState({
                        message: "",
                        hashtag: "",
                    })
                }}>Cancel</button>
            </div>
        </form>
    )
}