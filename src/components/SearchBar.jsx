import { InputBase, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
// import requests from "../constants/requests";

const searchBar = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const [keywords, setKeywords] = useState("");
  const classes = searchBar();
  // const URL = `https://api.themoviedb.org/3${requests.fetchSearch}${keywords}`;

  useEffect(() => {
    console.log(keywords);
  }, [keywords]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        onSubmit={handleSubmit}
      />
    </form>
  );
}
