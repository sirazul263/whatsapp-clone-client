import React from "react";
import Conversation from "./Conversation";
import Search from "./Search";
import Menu from "./Menu";
const Sidebar = () => {
  return (
    <div>
      <Menu></Menu>
      <Search></Search>
      <Conversation></Conversation>
    </div>
  );
};

export default Sidebar;
