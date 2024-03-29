import CommentsForm from "./CommentsForm";
import {Modal, Button} from "react-bootstrap"
import {useState} from 'react'


function MakeCommentModel(){
    return(
      // <!-- Button trigger modal -->
      <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Make a Comment
      </button>
      
      {/* // <!-- Modal --> */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">

          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">New Comment</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={"s"}></button>
            </div>

            <div class="modal-body">
            <CommentsForm/>
            </div>
          </div>

        </div>
      </div> 
      </> )  
}


export default MakeCommentModel