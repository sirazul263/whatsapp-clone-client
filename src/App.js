import React, { createContext, useState } from "react";
import { Route, Switch } from "react-router";
import ChatBox from "./components/ChatBox/ChatBox";
import Messenger from "./components/Messenger/Messenger";
import "./styles/style.scss";
import TemplateProvider from "./TemplateProvider/TemplateProvider";
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
    <TemplateProvider>
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
    </TemplateProvider>
  );
}

export default App;
