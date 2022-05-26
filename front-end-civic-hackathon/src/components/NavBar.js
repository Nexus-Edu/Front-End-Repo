import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap';




function NavBar() {

  const { userInfo } = useContext(Context);

  return (
//     <ul class="nav">
//       <li>
//         {/* <a class="nav-link active" aria-current="page" href="#">Active</a> */}
//         <Link to="/" class="nav-item">Home</Link>
//       </li>
//       <li>
//         <Link to="/discussionBoard" class="nav-link active">Discussion Board</Link>
//       </li>

//       <li>
//         <Link to="/loginSignUp" class="nav-link active">Login</Link>
//       </li>
//       <li class="nav-user">
//          {!userInfo.username ? <></> : <h4>welcome : {userInfo.username}</h4>}
//       <Link to="/user"><span class="icon"><FontAwesomeIcon icon={faUser} /></span></Link>
//       </li>

//       {/* <li class="nav-item">
//   <a class="nav-link disabled">Disabled</a>
// </li> */}
//     </ul>
<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/discussionBoard">Discussion Board</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/loginSignUp">Sign Up</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Icon</Nav.Link>
  </Nav.Item>

</Nav>
  )
}


export default NavBar 