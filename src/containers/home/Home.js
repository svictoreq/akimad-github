// React imports
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Material-ui imports
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton"; 
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// Material-ui icon imports
import DarkThemeIcon from "@material-ui/icons/Brightness2";
import LightThemeIcon from "@material-ui/icons/Brightness7";
import SearchIcon from "@material-ui/icons/Search";

// Local imports
import useStyles from "./homeStyles";
import { toggleTheme } from "../../redux/themeSlice";

function Home({ handleSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const themeSelector = useSelector((state) => state.theme.selected);
  const classes = useStyles();

  const handleSubmit = useCallback(
    () => handleSearch(searchValue, setSearchValue),
    [searchValue, handleSearch]
  );

  function handleChange({ target: { value }}) {
    setSearchValue(value);
  }

  function handleThemeToggle() {
    dispatch(toggleTheme());
  }

  return (
    <Container
      disableGutters
      maxWidth={false}
      classes={{ root: classes.containerRoot }}
    >
      <IconButton
        onClick={handleThemeToggle}
        color="inherit"
        classes={{ root: classes.themeButton }}
      >
        {themeSelector === "dark"
          ? (
            <LightThemeIcon />
          ) : (
            <DarkThemeIcon />
          )
        }
      </IconButton>
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
