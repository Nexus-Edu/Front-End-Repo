import React, { useContext } from "react";
import Context from "../../context/Context"
import { Box, Avatar } from "grommet";
import "./user.css";

export default function UserEdit(props) {
    const { info } = props;
    const { userInfo, setUserInfo } = useContext(Context)

    console.log(info);

    function updateUser(event) {
        event.preventDefault();

        const updatedFirstName = event.target.FirstName.value;
        const updatedLastName = event.target.LastName.value;
        const updatedAge = event.target.Age.value;
        const updatedEmail = event.target.Email.value;
        const updatedImage = event.target.Image.value;
        const updatedBio = event.target.Bio.value;

        const newData = {
            email: updatedEmail,
            first_name: updatedFirstName,
            last_name: updatedLastName,
            age: parseInt(updatedAge, 10),
            birthday: null,
            image: updatedImage,
            bio: updatedBio,
        }
        // Fetch Call
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
        });
        setUserInfo(Object.assign(userInfo, newData));
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
                    <form onSubmit={updateUser}>
                        <label for="FirstName" className="user-label">First Name:</label>
                        <br />
                        <input
                            type="text"
                            name="FirstName"
                            defaultValue={info.first_name}
                            className="user-input"
                        />

                        <br />
                        <br />
                        <label for="LastName" className="user-label">Last Name:</label>
                        <br />
                        <input type="text" name="LastName" defaultValue={info.last_name} className="user-input" />

                        <br />
                        <br />
                        <label for="Age" className="user-label">Age:</label>
                        <br />
                        <input type="number" name="Age" defaultValue={info.age} className="user-input" />

                        <br />
                        <br />

                        <label for="Email" className="user-label">Email:</label>
                        <br />
                        <input type="email" name="Email" defaultValue={info.email} className="user-input" />


                        <br />
                        <br />

                        {/* Image Form */}
                        <label for="Image" className="user-label">Image:</label>
                        <br />
                        <input type="url" name="Image" defaultValue={info.image} className="user-input" />
                        <br />
                        <br />
                        {/* Bio Form */}
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


            </div>
        </div >
    );
}
