import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext } from "react";
import { UserContext } from "../../App";
const useStyles = makeStyles({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0px",
  },
  displayImage: {
    width: 200,
    height: 200,
    borderRadius: "50%",
  },
  name: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  description: {
    padding: "20px 30px",
    color: "grey",
    fontSize: 13,
    letterSpacing: 0.5,
  },
  about: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
});
const Profile = () => {
  const classes = useStyles();
  const [user] = useContext(UserContext);
  return (
    <>
      <Box className={classes.imageContainer}>
        <img src={user.photo} alt="" className={classes.displayImage} />
      </Box>
      <Box className={classes.name}>
        <p style={{ fontSize: 12, color: "green", marginBottom: "10px" }}>
          Your Name
        </p>
        <Typography>{user.name}</Typography>
      </Box>
      <Box>
        <Typography className={classes.description}>
          This is not your username or pin. This will be visible to your
          WhatsApp contacts.
        </Typography>
      </Box>
      <Box className={classes.about}>
        <p style={{ fontSize: 12, color: "green", marginBottom: "10px" }}>
          About
        </p>
        <Typography style={{ fontSize: 14 }}>Don't call, text only</Typography>
      </Box>
    </>
  );
};

export default Profile;
