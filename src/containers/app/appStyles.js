import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarTitle: {
    marginRight: theme.spacing(2),
  },
  toolbarRegular: {
    minHeight: theme.spacing(8),
  },
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
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));
