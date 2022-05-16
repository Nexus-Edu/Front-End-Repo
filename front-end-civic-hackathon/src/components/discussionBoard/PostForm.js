import Context from "../../context/Context"
import { useContext, useState } from "react"


export default function PostForm() {
    const { setPostDescription, postDescription, setHashTags, hashTags } = useContext(Context)
    ///can proobly clean up by making form data into an object. 

    const [state, setState] = useState({
        descriptionInput: "",
        hashTagInput: "",
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setPostDescription(state.descriptionInput)
            setHashTags(state.hashTagInput)
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
                   setState({
                    descriptionInput: "",
                    hashTagInput: "",
                })
              }}>Cancel</button>
            </div>
        </form>
    )
}