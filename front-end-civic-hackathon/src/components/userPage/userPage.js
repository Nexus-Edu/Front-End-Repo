import React, { useState, useEffect, useContext } from 'react';
import Context from "../../context/Context" 
import UserInfo from './UserInfo';


export default function UserPage() {
  // const [userInfo, setUserInfo] = useState([]);

  // const { info } = useContext(Context)
  // console.log(info)

  const { userInfo } = useContext(Context);

  // console.log(userInfo)

  const currentUser = Array(userInfo)

  console.log(currentUser)

// const user = useContext(UserContext)

  // useEffect(() => {
  //   const getUserInfo = () => {
  //     fetch('http://localhost:5000/user/1')
  //       .then(response => response.json())
  //       .then(data => {
  //         const info = data;
  //         console.log(info)
  //         setUserInfo(info)
  //       })
  //   }
  //   getUserInfo()
  // }, [])

  // console.log(userInfo)

  function renderUserInfo() {
    return currentUser.map(user => {
      return <UserInfo info={user} id={user.id} />
    })
  }


  return (
    <div>
      <h1>User Profile</h1>
      {/* <h1>Hello There, {userInfo.username}</h1> */}
      {renderUserInfo()}
    </div>
  )
}
