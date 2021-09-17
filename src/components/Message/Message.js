import React, { useContext } from "react";
import { UserContext } from "../../App";

const Message = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <h1>Message</h1>
    </div>
  );
};

export default Message;
