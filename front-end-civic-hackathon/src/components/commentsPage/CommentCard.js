import {Card} from 'react-bootstrap'

// display: flex;
// align-items: self-end;
//this is the style that is needed for the image and the name to render side by side. 

function CommentCard(name, username, comment) {
    return (
        <>
            <div class="card">

            <div class="card-body" className="flex-row">
                <div>
                    <div className='flex'>
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} width="50" />
                        <h6 class="card-subtitle mb-2">{"example"} @ user1234</h6>
                        
                    </div>
                    <div>
                        <p class="card-text">This would be an example of the comments componet</p>
                    </div>
                </div>
            </div>
            <div class="footer text-muted card flex-row">
                <div>
                    posted: 2 days ago
                </div>
            </div>
        </div>
        </>
    )
}

export default CommentCard