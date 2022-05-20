import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react"

/*
what needs to happen -> 
what is happening ? i am getting the new post but only once and thats it, figure out why 
*/

export default function PostForm() {
    const { newPost, setNewPost, post, setPost} = useContext(Context)
    const [sent, setSent] = useState(1);
    const [newP , setNewP] = useState([]); 


    const user = {
        user_id: 10
    }

    
    const [state, setState] = useState({
        descriptionInput: "",
        hashTagInput: "",
    })
    
    const body = Object.assign(user, newPost);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(()=>{
            async function sendPost(){
               const res = await fetch('http://localhost:5000/board/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            const data = await res.json()
            console.log(data.message)
            // if(data.message !== "Please enter a message or hashtag"){
            setNewP(data)    
        }
            sendPost()
            console.log(newP)
    }, [sent])

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setNewPost({
                message: state.descriptionInput,
                hashtag: state.hashTagInput
            })
            setSent(true)
            setState({
                descriptionInput: "",
                hashTagInput: "",
            })

        }}>
            <label htmlFor="description">
                Description:
            </label>
            <textarea name="descriptionInput" value={state.descriptionInput} type="text" rows="4" cols="60" maxlength="150" placeholder="up to 150 char" onChange={handleChange}>
            </textarea>

            <label>
                Hashtags:
            </label>

            <input type="text" value={state.hashTagInput} name="hashTagInput" placeholder="ex: #Tech #Manhattan" onChange={handleChange} />

            <br></br>
            <br></br>
            <div class="modal-footer">
              <button type="submit" class="btn btn-secondary" value="make a post" data-bs-dismiss="modal">make a post</button>
              <button type="sumbit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={ e =>{
                   setSent(1)
              }}>Cancel</button>
            </div>
        </form>
    )
}