import React from 'react'

export default function UserInfo(props) {
    const { info } = props;
    // console.log(info)

    // function editInfo(e) {
    //     console.log(e.target)
    // }

    return (
        <div>
            <form>

                <label for="FirstName">First Name:</label>
                <br />
                <input type="text" name="FirstName" defaultValue={info.first_name} />
                <button>Update</button>

                <br />
                <br />


                <label for="LastName">Last Name:</label>
                <br />
                <input type="text" name="LastName" defaultValue={info.last_name} />
                <button>Update</button>

                <br />
                <br />


                <label for="Age">Age:</label>
                <br />
                <input type="number" name="Age" defaultValue={info.age} />
                <button>Update</button>

                <br />
                <br />


                <label for="Email">Email:</label>
                <br />
                <input type="email" name="Email" defaultValue={info.email} />
                <button>Update</button>

                <br />
                <br />


                <label for="Birthday">Birthday:</label>
                <br />
                {/* <input type="text" name="Birthday" defaultValue={info.birthday} /> */}
                <input type="date" name="Birthday" defaultValue={info.birthday} />
                <button>Update</button>

                {/* <input type="image" src={info.image}></input> */}


                <h3>Image:</h3>
                <img src={info.image} alt="hey" width="50" />
                <button>Update</button>

            </form>
        </div>
    )
}
