// Material-ui imports
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Local imports
import useStyles from "./notFoundStyles";

function NotFound() {
  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      classes={{ root: classes.containerRoot}}
    >
      <Typography variant="overline">
        not_found :c
      </Typography>
    </Container>
  );
}

export default NotFound;
