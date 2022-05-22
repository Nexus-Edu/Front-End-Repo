import Context from "../../context/Context"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom";

export default function CommentsForm() {
    const { setComments, commentPost, userInfo } = useContext(Context)
    const { id } = useParams();

    const user = {
        user_id: userInfo.id
    }

    const [message, setMessage] = useState("")

    const handleChange = e => {
        setMessage(e.target.value)
    }

    async function sendNewComment() {
        const res = await fetch('http://localhost:5000/comments/makeComment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user_id": user.user_id,
                "post_id": commentPost.id,
                "comment": message
            })
        })

        const resTwo = await fetch(`http://localhost:5000/comments/${id}`)
        const data = await resTwo.json()
        setComments(data.data)
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setMessage("")
        }}>
            <label htmlFor="description">
                Description:
            </label>
            <textarea name="message" value={message} type="text" rows="4" cols="60" maxlength="150" placeholder="up to 150 char" onChange={handleChange}>
            </textarea>
            <br></br>
            <br></br>
            <div class="modal-footer">
                <button type="submit" class="btn btn-secondary" value="make a post" data-bs-dismiss="modal" onClick={sendNewComment}>make comment</button>

                <button type="sumbit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={e => {
                    setMessage("")
                }}>Cancel</button>
            </div>
        </form>
    )
}

