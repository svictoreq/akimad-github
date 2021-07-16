import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    marginLeft: "auto",
  },
  inputAdornmentPositionEnd: {
    marginLeft: 2,
  },
  inputBaseRoot: {
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
  },
  inputBaseInput: {
    [theme.breakpoints.down("sm")]: {
      width: 0,
      "&:focus": {
        width: "100%",
      },
    },
  },
  iconButtonSizeSmall: {
    padding: 6,
  },
}));
