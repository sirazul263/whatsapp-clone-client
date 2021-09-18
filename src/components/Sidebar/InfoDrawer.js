import { Box, Drawer, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import Profile from "./Profile";
const useStyles = makeStyles({
  header: {
    backgroundColor: "#00bfa5",
    height: 106,
    color: "#fff",
    display: "flex",

    "&>*": {
      marginTop: "auto",
      padding: "15px 10px",
      fontWeight: 600,

      marginLeft: 20,
    },
  },
  component: {
    backgroundColor: "#ededed",
    height: "85%",
  },
});
const InfoDrawer = ({ open, setOpen }) => {
  const classes = useStyles();
  return (
    <Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box className={classes.header}>
          <ArrowBack fontSize="50px" onClick={() => setOpen(false)}></ArrowBack>
          <Typography>Profile</Typography>
        </Box>
        <Box className={classes.component}>
          <Profile></Profile>
        </Box>
      </Drawer>
    </Box>
  );
};

export default InfoDrawer;
