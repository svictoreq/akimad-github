import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  buttonBaseRoot: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  paperRoot: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    margin: "auto",
    padding: theme.spacing(2),
    transition: [[
      "background-color",
      "150ms",
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "0ms"
    ]],
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));
