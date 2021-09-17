import { Box } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Chat } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import MenuList from "./MenuList";
const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#ededed",
    alignItems: "center",
    padding: "10px 16px",
  },
  img: {
    width: 37,
    height: 37,
    borderRadius: "50%",
  },
  icons: {
    display: "flex",
    justifyContent: "around",
    "&>*": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      marginRight: 8,
    },
  },
});
const Menu = () => {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext);
  return (
    <Box className={classes.header}>
      <Box>
        <img src={user.photo} alt="Dp" className={classes.img} />
      </Box>
      <Box className={classes.icons}>
        <Chat></Chat>
        <MenuList></MenuList>
      </Box>
    </Box>
  );
};

export default Menu;
