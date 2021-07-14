import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  containerRoot: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    marginTop: theme.spacing(1),
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
}));
