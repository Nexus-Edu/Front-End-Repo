import React from "react"
import { Link } from "react-router-dom";


function NavBar(){
    return(
<ul class="nav">
  <li class="nav-item">
    {/* <a class="nav-link active" aria-current="page" href="#">Active</a> */}
    <Link to ="/" class="nav-link" >Home</Link>
  </li>
  <li class="nav-item">
    <Link to ="/discussionBoard" class="nav-link active">DiscussionBoard</Link>
  </li>
  <div>
  <li class="d-flex">
  <Link to="/loginSignUp" class="nav-link active" >loginSignUp</Link>
  </li>
  </div>
  {/* <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li> */}
</ul>
    )
}

export default NavBar 