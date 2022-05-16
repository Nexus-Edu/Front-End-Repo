import React from "react"
import { useState } from "react";
import PostForm from "./PostForm";

function MakeAPost(){
    return(
      // <!-- Button trigger modal -->
      <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Create Post
      </button>
      
      {/* // <!-- Modal --> */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">

          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">New Post</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
            <PostForm/>
            </div>
          </div>

        </div>
      </div> 
      </> )  
}

export default MakeAPost