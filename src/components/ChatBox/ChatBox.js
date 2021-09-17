import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Message from "../Message/Message";
import Sidebar from "../Sidebar/Sidebar";
const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    height: "100vh",
    minWidth: 380,
  },
  rightComponent: {
    borderLeft: "1px solid grey",
  },
});
const ChatBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.leftComponent}>
        <Sidebar></Sidebar>
      </Box>

      <Box className={classes.rightComponent}>
        <Message></Message>
      </Box>
    </Box>
  );
};

export default ChatBox;
