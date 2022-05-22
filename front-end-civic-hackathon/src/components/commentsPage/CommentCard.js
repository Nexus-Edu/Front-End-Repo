import { Button } from "reactstrap"
import Context from "../../context/Context"
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom";

// display: flex;
// align-items: self-end;
//this is the style that is needed for the image and the name to render side by side. 

function CommentCard(props) {
    const {userInfo, setComments} = useContext(Context)
    const {name, username, comment, posted, commentid} = props
    const { id } = useParams();

    async function deleteComment(id){
        await fetch(`http://localhost:5000/comments/delete/${commentid}`, {
            method: "DELETE"
        })
        const res = await fetch(`http://localhost:5000/comments/${id}`)
        const data = await res.json()
        console.log(data)
        setComments(data.data)
    }


    return (
        <>
            <div class="card">
            <div class="card-body" className="flex-row">
                <div>
                    <div className='flex'>
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} width="50" />
                        <h6 class="card-subtitle mb-2">{name} @ {username}</h6>
                    </div>
                    <div>
                        <p class="card-text">{comment}</p>
                    </div>
                </div>
            </div>
            <div class="footer text-muted card flex-row">
                <div>
                    posted: {posted}
                </div>
                {userInfo.username !== username ? <></>: <Button onClick={()=>{
                    //  console.log(id)
                     deleteComment(id)
                }}>delete</Button>} 
            </div>
        </div>
        </>
    )
}

export default CommentCard