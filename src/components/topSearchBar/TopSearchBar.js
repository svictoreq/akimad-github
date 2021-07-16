// React imports
import { useCallback, useState } from "react";

// Material-ui imports
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search"

// Local imports
import useStyles from "./topSearchBarStyles";

function TopSearchBar({ handleSearch }) {
  const [search, setSearch] = useState("");
  const classes = useStyles();

  const handleSubmit = useCallback(
    () => handleSearch(search, setSearch),
    [search, handleSearch]
  );

  function handleChange({ target: { value }}) {
    setSearch(value);
  }
  
  return (
    <form onSubmit={handleSubmit()} className={classes.form}>
      <InputBase
        placeholder="Search user..."
        value={search}
        onChange={handleChange}
        type="search"
        endAdornment={(
          <InputAdornment
            position="end"
            classes={{
              positionEnd: classes.inputAdornmentPositionEnd,
            }}
          >
            <IconButton
              size="small"
              type="submit"
              disabled={!search.length}
              classes={{
                sizeSmall: classes.iconButtonSizeSmall,
              }}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )}
        classes={{
          root: [
            classes.inputBaseRoot,
            "MuiPaper-rounded",
          ].join(" "),
          input: classes.inputBaseInput,
        }}
      />
    </form>
  );
}

export default TopSearchBar;
