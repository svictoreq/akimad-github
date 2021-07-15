// React imports
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// Material-ui imports
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Local imports
import useStyles from "./userStyles";
import { clearUser, getUser } from "../../redux/userSlice";

function User() {
  const dispatch = useDispatch();
  const { username } = useParams();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getUser(username));

    return function cleanup() {
      dispatch(clearUser())
    }
  }, []) // eslint-diable-line
  
  return (
    <>
      <Container classes={{ root: classes.containerRoot }}>
        <Typography variant="h1">
          User component
        </Typography>
      </Container>
    </>
  );
}

export default User;
