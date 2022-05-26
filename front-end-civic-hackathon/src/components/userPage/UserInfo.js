import React from "react";
import { Box, Avatar } from "grommet";
import "./user.css";

export default function UserInfo(props) {
  const { info } = props;

  console.log(info);

  // function updateFirstName(event) {
  //   event.preventDefault();
  //   const updatedInfo = event.target.FirstName.value;

  //   // Fetch Calls
  //   fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: info.email,
  //       first_name: updatedInfo,
  //       last_name: info.last_name,
  //       age: parseInt(info.age),
  //       birthday: info.birthday,
  //       image: info.image,
  //       bio: info.bio,
  //     }),
  //   });
  //   info.first_name = updatedInfo;
  // }

  // function updateLastName(event) {
  //   event.preventDefault();
  //   const updatedInfo = event.target.LastName.value;

  //   // Fetch Calls
  //   fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: info.email,
  //       first_name: info.first_name,
  //       last_name: updatedInfo,
  //       age: parseInt(info.age),
  //       birthday: info.birthday,
  //       image: info.image,
  //       bio: info.bio,
  //     }),
  //   });
  // }

  // function updateAgeName(event) {
  //   event.preventDefault();
  //   const updatedInfo = parseInt(event.target.Age.value, 10);

  //   // Fetch Calls
  //   fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: info.email,
  //       first_name: info.first_name,
  //       last_name: info.last_name,
  //       age: updatedInfo,
  //       birthday: info.birthday,
  //       image: info.image,
  //       bio: info.bio,
  //     }),
  //   });
  // }

  // function updateEmailName(event) {
  //   event.preventDefault();
  //   const updatedInfo = event.target.Email.value;

  //   // Fetch Calls
  //   fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: updatedInfo,
  //       first_name: info.first_name,
  //       last_name: info.last_name,
  //       age: parseInt(info.age),
  //       birthday: info.birthday,
  //       image: info.image,
  //       bio: info.bio,
  //     }),
  //   });
  // }

  // function updateImageName(event) {
  //   event.preventDefault();
  //   const updatedInfo = event.target.Image.value;

  //   // Fetch Calls
  //   fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: info.email,
  //       first_name: info.first_name,
  //       last_name: info.last_name,
  //       age: parseInt(info.age),
  //       birthday: info.birthday,
  //       image: updatedInfo,
  //       bio: info.bio,
  //     }),
  //   });
  // }

  // function updateBioName(event) {
  //   event.preventDefault();
  //   const updatedInfo = event.target.Bio.value;

  //   // Fetch Calls
  //   fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: info.email,
  //       first_name: info.first_name,
  //       last_name: info.last_name,
  //       age: parseInt(info.age),
  //       birthday: info.birthday,
  //       image: info.image,
  //       bio: updatedInfo,
  //     }),
  //   });
  // }


  return (
    <div>
      <div className="input-container">

        <div>
          <Box direction="row" gap="small" className="Avatar">
            <Avatar src={info.image} alt="hey" size="5xl" className="user-avatar" />
          </Box>
        </div>


        <div className="info-display-container">
          <h1>{info.first_name}</h1>
          <h1>{info.last_name}</h1>
          <h1>{info.age}</h1>
          <h1>{info.email}</h1>
          <h1>{info.bio}</h1>
        </div>
      </div>
    </div>
  );
}
