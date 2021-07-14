// React imports
import { useEffect, useState } from "react";
import { Route, useHistory, useRouteMatch, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

// Material-ui imports
import AppBar from "@material-ui/core/AppBar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"

// Local imports
import useStyles from "./appStyles";
import Home from "../home/Home";
import TopSearchBar from "../../components/topSearchBar/TopSearchBar";
import { fetchUsers } from "../../redux/search/searchSlice";

function App() {
  const [isBackButtonEnabled, setIsBackButtonEnabled] = useState(false);
  const history = useHistory();
  const homeRouteMatch  = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true,
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleSearch(query, setQuery) {
    return function(e) {
      e.preventDefault();
      if (query.length) {
        const encodedQuery = encodeURIComponent(query);
        dispatch(fetchUsers({ q: encodedQuery }));
        history.push("/search/users?q=" + encodedQuery);
      }
      if (setQuery != null) setQuery("");
    }
  }

  useEffect(() => {
    setIsBackButtonEnabled(!homeRouteMatch?.isExact);
  }, [homeRouteMatch]);

  return (
    <Container
      classes={{ root: classes.containerRoot }}
      maxWidth={false}
    >
      <AppBar color="inherit" elevation={0}>
        <Toolbar>
          {isBackButtonEnabled && (
            <IconButton color="inherit" onClick={history.goBack}>
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="h5"
            classes={{
              h5: isBackButtonEnabled
                ? classes.marginBack
                : classes.marginNormal
          }}>
            Akimad Github
          </Typography>
          <TopSearchBar handleSearch={handleSearch} />
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home handleSearch={handleSearch} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
