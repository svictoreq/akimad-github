// Material imports
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"

function App() {
  return (
    <Container maxWidth={false}>
      <AppBar color="inherit" elevation={0}>
        <Toolbar>
          <Typography variant="h5">
            Akimad Github
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
