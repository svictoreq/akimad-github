// React imports
import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

// Material core imports
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"

// Material icons imports
import ArrowBack from "@material-ui/icons/ArrowBack";

// Local imports
import useStyles from "./appStyles";

function App() {
  const [isBackButtonEnabled, setIsBackButtonEnabled] = useState(false);
  const userRouteMatch = useRouteMatch("/user");
  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    setIsBackButtonEnabled(Boolean(userRouteMatch));
  }, [userRouteMatch]);

  return (
    <Container maxWidth={false}>
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
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
