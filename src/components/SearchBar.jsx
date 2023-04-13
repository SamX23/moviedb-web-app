import { InputBase, makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import SearchContext from "../context";
import { TYPE } from "../constants/tmdb";

const searchBar = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
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
  const { setSearchQuery } = useContext(SearchContext);
  const [keywords, setKeywords] = useState("");
  const classes = searchBar();

  const handleChange = (e) => {
    e.preventDefault();
    setKeywords(e.target.value);
    setSearchQuery(TYPE.search + e.target.value);
  };

  return (
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ "aria-label": "search" }}
      value={keywords}
      onChange={handleChange}
    />
  );
}
