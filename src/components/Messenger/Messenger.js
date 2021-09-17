import React, { useContext } from "react";
import app from "../../images/WhatsApp.svg.png";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import Login from "../Login/Login";
import { UserContext } from "../../App";
import Message from "../Message/Message";
const useStyles = makeStyles({
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  component: {
    background: "#DCDCDC",
    height: "100vh",
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
  },
  logo: {
    height: 36,
    width: 36,
    marginLeft: "13em",
    marginRight: "1em",
  },
  div: {
    display: "flex",
    alignItems: "center",
  },
});
const Messenger = () => {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext);
  return (
    <Box className={classes.component}>
      <AppBar className={classes.loginHeader}>
        <Toolbar>
          <div className={classes.div}>
            <img src={app} alt="" className={classes.logo} />
            <Typography className={classes.title}>WHATSAPP WEB </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {user.name ? <Message></Message> : <Login></Login>}
    </Box>
  );
};

export default Messenger;
