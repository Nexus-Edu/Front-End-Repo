import React, { useState, useEffect, useContext } from 'react';
import UserInfo from './UserInfo';


export default function UserPage() {
  const [userInfo, setUserInfo] = useState([]);

// const user = useContext(UserContext)

  useEffect(() => {
    const getUserInfo = () => {
      fetch('http://localhost:5000/user/1')
        .then(response => response.json())
        .then(data => {
          const info = data;
          // console.log(info)
          setUserInfo(info)
        })
    }
    getUserInfo()
  }, [])

  // console.log(userInfo)

  function renderUserInfo() {
    return userInfo.map(user => {
      return <UserInfo info={user} id={user.id} />
    })
  }


  return (
    <div>
      {renderUserInfo()}
    </div>
  )
}
