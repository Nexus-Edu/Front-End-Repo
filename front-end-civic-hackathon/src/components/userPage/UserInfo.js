import React from "react";
import { Box, Avatar } from "grommet";
import "./user.css";

export default function UserInfo(props) {
  const { info } = props;

  console.log(info);

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
