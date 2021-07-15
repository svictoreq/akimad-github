// React imports
import { useEffect, useState } from "react";
import {
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
  Switch
} from "react-router-dom";

// Material-ui imports
import AppBar from "@material-ui/core/AppBar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

// Local imports
import useStyles from "./appStyles";
import Home from "../home/Home";
import Search from "../search/Search";
import User from "../user/User";
import TopSearchBar from "../../components/topSearchBar/TopSearchBar";

function App() {
  const [isBackButtonEnabled, setIsBackButtonEnabled] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const homeRouteMatch  = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true,
  });
  const classes = useStyles();
  
  const theme = useTheme();
  const isNotSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  function handleGoBack() {
    const { pathname } = location;
    switch (pathname) {
      case "/search":
        history.push("/");
        break;

      default:
        history.goBack();
        break;
    }
  }

  function handleSearch(searchQuery, setSearchQuery) {
    return function(e) {
      e.preventDefault();
      if (searchQuery.length) {
        const params = {
          q: searchQuery,
          per_page: isNotSmallScreen ? 32 : 24,
          page: 1,
        };
        const searchParams = new URLSearchParams(params);
        history.push("/search?" + encodeURI(searchParams.toString()));
      }
      if (setSearchQuery != null) setSearchQuery("");
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
      <AppBar color="inherit" elevation={homeRouteMatch.isExact ? 0 : 4}>
        <Toolbar>
          {isBackButtonEnabled && (
            <IconButton color="inherit" onClick={handleGoBack}>
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="h5"
            classes={{
              h5: isBackButtonEnabled
                ? classes.marginBack
                : classes.marginNormal
          }}>
            GitHub Search
          </Typography>
          <TopSearchBar handleSearch={handleSearch} />
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home handleSearch={handleSearch} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/user/:username">
          <User />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
