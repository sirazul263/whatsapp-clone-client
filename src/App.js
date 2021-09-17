import React, { createContext, useState } from "react";
import { Route, Switch } from "react-router";
import ChatBox from "./components/ChatBox/ChatBox";
import Message from "./components/Message/Message";
import Messenger from "./components/Messenger/Messenger";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/style.scss";
export const UserContext = createContext(null);
function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    error: "",
    success: false,
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Switch>
        <Route exact path="/">
          <Messenger></Messenger>
        </Route>
        <Route path="/chatbox">
          <ChatBox></ChatBox>
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
