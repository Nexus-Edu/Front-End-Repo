import React from "react";
import { Box, Avatar } from "grommet";
import "./user.css";

export default function UserInfo(props) {
  const { info } = props;

  console.log(info);

  function updateFirstName(event) {
    event.preventDefault();
    const updatedInfo = event.target.FirstName.value;

    // Fetch Calls
    fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: info.email,
        first_name: updatedInfo,
        last_name: info.last_name,
        age: parseInt(info.age),
        birthday: info.birthday,
        image: info.image,
        bio: info.bio,
      }),
    });
    info.first_name = updatedInfo;
  }

  function updateLastName(event) {
    event.preventDefault();
    const updatedInfo = event.target.LastName.value;

    // Fetch Calls
    fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: info.email,
        first_name: info.first_name,
        last_name: updatedInfo,
        age: parseInt(info.age),
        birthday: info.birthday,
        image: info.image,
        bio: info.bio,
      }),
    });
  }

  function updateAgeName(event) {
    event.preventDefault();
    const updatedInfo = parseInt(event.target.Age.value, 10);

    // Fetch Calls
    fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: info.email,
        first_name: info.first_name,
        last_name: info.last_name,
        age: updatedInfo,
        birthday: info.birthday,
        image: info.image,
        bio: info.bio,
      }),
    });
  }

  function updateEmailName(event) {
    event.preventDefault();
    const updatedInfo = event.target.Email.value;

    // Fetch Calls
    fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: updatedInfo,
        first_name: info.first_name,
        last_name: info.last_name,
        age: parseInt(info.age),
        birthday: info.birthday,
        image: info.image,
        bio: info.bio,
      }),
    });
  }

  function updateImageName(event) {
    event.preventDefault();
    const updatedInfo = event.target.Image.value;

    // Fetch Calls
    fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: info.email,
        first_name: info.first_name,
        last_name: info.last_name,
        age: parseInt(info.age),
        birthday: info.birthday,
        image: updatedInfo,
        bio: info.bio,
      }),
    });
  }

  function updateBioName(event) {
    event.preventDefault();
    const updatedInfo = event.target.Bio.value;

    // Fetch Calls
    fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: info.email,
        first_name: info.first_name,
        last_name: info.last_name,
        age: parseInt(info.age),
        birthday: info.birthday,
        image: info.image,
        bio: updatedInfo,
      }),
    });
  }


  return (
    <div>
      <div className="input-container">

        <div>
          <Box direction="row" gap="small" className="Avatar">
            <Avatar src={info.image} alt="hey" size="5xl" className="user-avatar" />
          </Box>
        </div>

        {/* First Name Form */}
        <div className="user-container">
        <form onSubmit={updateFirstName}>
          <br />
          <br />
          <label for="FirstName" className="user-label">First Name:</label>
          <br />
          <input
            type="text"
            name="FirstName"
            defaultValue={info.first_name}
            className="user-input"
          />
          <button className="user-button">Update</button>
        </form>

        <br />
        <br />
        {/* Last Name Form */}
        <form onSubmit={updateLastName}>
          <label for="LastName" className="user-label">Last Name:</label>
          <br />
          <input type="text" name="LastName" defaultValue={info.last_name} className="user-input" />
          <button className="user-button">Update</button>
        </form>

        <br />
        <br />

        {/* Age Form */}
        <form onSubmit={updateAgeName}>
          <label for="Age" className="user-label">Age:</label>
          <br />
          <input type="number" name="Age" defaultValue={info.age} className="user-input"/>
          <button className="user-button">Update</button>
        </form>
        <br />
        <br />

        {/* Email Form */}
        <form onSubmit={updateEmailName}>
          <label for="Email" className="user-label">Email:</label>
          <br />
          <input type="email" name="Email" defaultValue={info.email} className="user-input"/>
          <button className="user-button">Update</button>
        </form>

        <br />
        <br />

        {/* Image Form */}
        <form onSubmit={updateImageName}>
        <label for="Image" className="user-label">Image:</label>
        <br />
          <input type="url" name="Image" defaultValue={info.image} className="user-input"/>

          <button className="user-button">Update</button>
          <br />
          <br />
        </form>

        {/* Bio Form */}
        <form onSubmit={updateBioName}>
          <label for="Bio" className="user-label">Bio:</label>
          <br />
          <textarea name="Bio" rows="5" cols="50" className="user-input">
            {info.bio}
          </textarea>
          <br />
          <br />
          <button className="user-button">Update</button>
        </form>
      </div>

      {/* <div className="info-display-container">
                <h1>{info.first_name}</h1>
                <h1>{info.last_name}</h1>
                <h1>{info.age}</h1>
                <h1>{info.email}</h1>
                <h1>{info.birthday}</h1>
                <h1>{info.image}</h1>
                <h1>{info.bio}</h1>
            </div> */}
    </div>
    </div>
  );
}
