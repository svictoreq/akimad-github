import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  containerRoot: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  marginNormal: {
    marginLeft: theme.spacing(8),
  },
  marginBack: {
    marginLeft: theme.spacing(2),
  },
}));
