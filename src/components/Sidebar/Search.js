import { Box, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import { SearchRounded } from "@material-ui/icons";
const useStyles = makeStyles({
  search: {},
  SearchIcon: {},
});
const Search = () => {
  const classes = useStyles();
  return (
    <Box className={classes.search}>
      <div className={classes.SearchIcon}>
        <SearchRounded></SearchRounded>
      </div>
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        classes={{
          root: classes.inputRoot,
          input: classes.InputInput,
        }}
      />
    </Box>
  );
};

export default Search;
