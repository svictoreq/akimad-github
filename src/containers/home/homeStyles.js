import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  containerRoot: {
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  iconButtonRoot: {
    padding: 8,
  },
  inputAdornmentPositionEnd: {
    marginLeft: 2,
  },
  inputBaseRoot: {
    fontSize: theme.typography.h6.fontSize,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
  themeButton: {
    position: "absolute",
    top: theme.spacing(10),
    right: 0,
  },
}));
