import {
  Box,
  Button,
  Checkbox,
  Dialog,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import qrCode from "../../images/qrcode.jpg";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import firebase from "firebase/compat/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  qrCode: {
    height: 264,
    width: 264,
    padding: "50px 20px 0 50px",
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "&>*": {
      fontSize: 16,
      padding: 0,
      marginTop: 15,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
  bottom: {
    display: "flex",
    color: "blue",
    justifyContent: "space-between",
    margin: "20px 140px 0 140px",
  },
});
const style = {
  dialogBox: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};
const Login = ({ classes }) => {
  const [user, setUser] = useContext(UserContext);
  const [err, setErr] = useState("");
  const history = useHistory();
  const className = useStyles();
  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedIn = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedIn);
        history.push("/chatbox");
        // const newUser = [...user];
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };
  return (
    <Dialog
      open="true"
      classes={{ paper: classes.dialogBox }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={className.component}>
        <Box className={className.leftComponent}>
          <Typography className={className.title}>
            To use WhatsApp on your computer:
          </Typography>
          <List className={className.list}>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or Setting and select linked devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code{" "}
            </ListItem>
          </List>
        </Box>
        <Box>
          <img src={qrCode} alt="qr" className={className.qrCode} />
        </Box>
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={handleSignIn}>
          <GTranslateIcon /> Sign in with Google
        </Button>
      </Box>
      <Box className={className.bottom}>
        <p>Need help to get started?</p>
        <Box>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <label>Keep me signed in</label>
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
