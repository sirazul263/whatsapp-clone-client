import { Box, Menu, MenuItem } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  component: {
    fontSize: 14,
    padding: "5px 30px 5px 20px",
  },
});
const MenuList = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  return (
    <Box>
      <MoreVert onClick={handleClick}></MoreVert>
      <Menu
        anchorEl={open}
        open={open}
        keepMounted
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={classes.component}
      >
        <MenuItem onClick={handleClose} className={classes.component}>
          New group
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.component}>
          Create a room
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.component}>
          Starred
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.component}>
          Setting
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.component}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MenuList;
