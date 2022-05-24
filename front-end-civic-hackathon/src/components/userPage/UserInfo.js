import React from 'react'

export default function UserInfo(props) {
    const { info } = props;

    console.log(info);

    function updateFirstName(event) {
        event.preventDefault();
        const updatedInfo = event.target.FirstName.value;

        // Fetch Calls
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: info.email,
                first_name: updatedInfo,
                last_name: info.last_name,
                age: parseInt(info.age),
                birthday: info.birthday,
                image: info.image,
                bio: info.bio
            })
        })
        info.first_name = updatedInfo;
    }

    function updateLastName(event) {
        event.preventDefault();
        const updatedInfo = event.target.LastName.value;

        // Fetch Calls
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: info.email,
                first_name: info.first_name,
                last_name: updatedInfo,
                age: parseInt(info.age),
                birthday: info.birthday,
                image: info.image,
                bio: info.bio
            })
        })
    }

    function updateAgeName(event) {
        event.preventDefault();
        const updatedInfo = parseInt(event.target.Age.value, 10);

        // Fetch Calls
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: info.email,
                first_name: info.first_name,
                last_name: info.last_name,
                age: updatedInfo,
                birthday: info.birthday,
                image: info.image,
                bio: info.bio
            })
        })
    }

    function updateEmailName(event) {
        event.preventDefault();
        const updatedInfo = event.target.Email.value;

        // Fetch Calls
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: updatedInfo,
                first_name: info.first_name,
                last_name: info.last_name,
                age: parseInt(info.age),
                birthday: info.birthday,
                image: info.image,
                bio: info.bio
            })
        })
    }

    function updateBirthdayName(event) {
        event.preventDefault();
        const updatedInfo = event.target.Birthday.value;

        // Fetch Calls
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: info.email,
                first_name: info.first_name,
                last_name: info.last_name,
                age: parseInt(info.age),
                birthday: updatedInfo,
                image: info.image,
                bio: info.bio
            })
        })
    }

    function updateImageName(event) {
        event.preventDefault();
        const updatedInfo = event.target.Image.value;

        // Fetch Calls
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: info.email,
                first_name: info.first_name,
                last_name: info.last_name,
                age: parseInt(info.age),
                birthday: info.birthday,
                image: updatedInfo,
                bio: info.bio
            })
        })
    }

    function updateBioName(event) {
        event.preventDefault();
        const updatedInfo = event.target.Bio.value;

        // Fetch Calls
        fetch(`http://localhost:5000/updateUserInfo/${info.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: info.email,
                first_name: info.first_name,
                last_name: info.last_name,
                age: parseInt(info.age),
                birthday: info.birthday,
                image: info.image,
                bio: updatedInfo
            })
        })
    }


    // async function editAccount(event) {
    // console.log(input)
    // fetch(`http://localhost:5000/updateUserInfo${info.id}`, {
    // method: 'PUT',
    // headers: { 'Content-Type': 'application/json'},
    // body: JSON.stringify(info)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // }


    return (
        <div>
            <div className="input-container">
                {/* Dummy Image */}
                {console.log(info.image)}
                <img src={info.image} alt="hey" width="100" height="100" />

                {/* First Name Form */}
                <form onSubmit={updateFirstName}>

                    <br />
                    <br />
                    <label for="FirstName">First Name:</label>
                    <br />
                    <input type="text" name="FirstName" defaultValue={info.first_name} />
                    <h1>{info.first_name}</h1>
                    <button>Update</button>
                </form>

                <br />
                <br />

                {/* Last Name Form */}
                <form onSubmit={updateLastName}>
                    <label for="LastName">Last Name:</label>
                    <br />
                    <input type="text" name="LastName" defaultValue={info.last_name} />
                    <button>Update</button>
                </form>

                <br />
                <br />

                {/* Age Form */}
                <form onSubmit={updateAgeName}>
                    <label for="Age">Age:</label>
                    <br />
                    <input type="number" name="Age" defaultValue={info.age} />
                    <button>Update</button>
                </form>
                <br />
                <br />

                {/* Email Form */}
                <form onSubmit={updateEmailName}>
                    <label for="Email">Email:</label>
                    <br />
                    <input type="email" name="Email" defaultValue={info.email} />
                    <button>Update</button>
                </form>

                <br />
                <br />
                {/* Birthday Form */}
                <form onSubmit={updateBirthdayName}>
                    <label for="Birthday">Birthday:</label>
                    <br />
                    {/* <input type="text" name="Birthday" defaultValue={info.birthday} /> */}
                    <input type="date" name="Birthday" defaultValue={info.birthday} />
                    <button>Update</button>
                </form>

                {/* <input type="image" src={info.image}></input> */}


                {/* <h3>Image:</h3>
                <img src={info.image} alt="hey" width="50" /> */}
                <br />
                <br />

                {/* Image Form */}
                <label for="Image">Image:</label>
                <form onSubmit={updateImageName}>
                    <input type="url" name="Image" defaultValue={info.image} />

                    <button>Update</button>
                    <br />
                    <br />

                </form>

                {/* Bio Form */}
                <form onSubmit={updateBioName}>
                    <label for="Bio">Bio:</label>
                    <br />
                    <textarea name="Bio" rows="10" cols="50">
                        {info.bio}
                    </textarea>
                    <br />
                    <br />
                    <button>Update</button>
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
    )
}
