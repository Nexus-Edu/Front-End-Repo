import React, { useState, useEffect, useContext } from 'react';
import Context from "../../context/Context"
import UserInfo from './UserInfo';
import UserEdit from './UserEdit';
import "../../post.css"


export default function UserPage() {

  const { userInfo } = useContext(Context);

  const [editMode, setEditMode] = useState(false);

  // console.log(userInfo)

  const currentUser = Array(userInfo)

  console.log(currentUser)

  function renderUserInfo() {
    return currentUser.map(user => {
      return editMode ? <UserEdit info={user} id={user.id} /> : <UserInfo info={user} id={user.id} />
    })
  }

  function toggleEditMode() {
    setEditMode((prevState) => !prevState)
  }

  // console.log(userInfo.id)

  // function RenderPost(props) {
  //   console.log(props)
    // let { hashtag, date, message } = info;
    // console.log(message)

    // date = date.split('');
    // date = date.slice(0, 10)
    // date = date.join('')

    // return (
    //   <div className="post-container">
    //     {/* Post User's Image */}
    //     <div>
    //       <img src={userInfo.image} alt="user_image" className="user-img" />
    //     </div>
    //     {/* Post Body */}
    //     <div className="post-body">
    //       <h3> {userInfo.username} <em className="date">{date}</em></h3>
    //       <span className="name">&#64;</span>
    //       <em className="name">{userInfo.first_name} {userInfo.last_name}</em>
    //       {/* <hr /> */}
    //       <blockquote>{message}</blockquote>

    //       <p>{`${hashtag}`}</p>
    //       {/* <em>posted: {date}</em> */}
    //     </div>
    //   </div>
    // )
  // }

  function getSpecificUserPosts() {
    fetch(`http://localhost:5000/board/${userInfo.id}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
         data.map(post => {
          // return <RenderPost info={post} />
        })
      })
  }



  


  return (
    <div>
      <h1 className="user-title">User Profile</h1>
      {/* <h1>Hello There, {userInfo.username}</h1> */}
      {renderUserInfo()}
      <br />
      <button onClick={toggleEditMode}>{editMode ? 'Cancel Edit' : 'Edit Profile'}</button>
    </div>
  )
}
