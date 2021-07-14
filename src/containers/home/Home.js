// React imports
import { useCallback, useState } from "react";

// Material-ui imports
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton"; 
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

// Local imports
import useStyles from "./homeStyles";

function Home({ handleSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();

  const handleSubmit = useCallback(
    () => handleSearch(searchValue, setSearchValue),
    [searchValue, handleSearch]
  );

  function handleChange({ target: { value }}) {
    setSearchValue(value);
  }

  return (
    <Container
      maxWidth={false}
      classes={{ root: classes.containerRoot }}
    >
      <Typography variant="h3">
        Akimad GitHub Search
      </Typography>
      <form onSubmit={handleSubmit()} className={classes.form}>
        <Paper elevation={0}>
          <InputBase
            placeholder="Search user..."
            value={searchValue}
            onChange={handleChange}
            endAdornment={(
              <InputAdornment
                position="end"
                classes={{
                  positionEnd: classes.inputAdornmentPositionEnd,
                }}
              >
                <IconButton
                  type="submit"
                  classes={{ root: classes.iconButtonRoot }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )}
            classes={{
              root: [
                classes.inputBaseRoot,
                "MuiPaper-rounded",
                "MuiPaper-elevation1",
              ].join(" "),
              focused: "MuiPaper-elevation3",
            }}
          />
        </Paper>
      </form>
    </Container>
  );
}

export default Home;
