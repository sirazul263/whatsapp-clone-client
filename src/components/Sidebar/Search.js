import { Box, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import { SearchRounded } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  component: {
    backgroundColor: "#f6f6f6",
    height: 43,
    display: "flex",
    alignItems: "center",
  },
  search: {
    position: "relative",
    borderRadius: 18,
    backgroundColor: "#ffffff",
    width: "100%",
    margin: "0 13px",
  },
  searchIcon: {
    color: "#919191",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    marginTop: 7,
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 50,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: 14,
  },
}));
const Search = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchRounded fontSize="small"></SearchRounded>
        </div>
        <InputBase
          placeholder="Search or start new chat"
          inputProps={{ "aria-label": "search" }}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </Box>
    </Box>
  );
};

export default Search;
