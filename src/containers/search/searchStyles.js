import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  avatarRoot: {
    marginRight: theme.spacing(2),
  },
  buttonBaseRoot: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  circularProgressContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerRoot: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(12),
  },
  paginationRoot: {
    padding: [[theme.spacing(4), 0]],
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    fontWeight: 700,
  },
  paginationItemRoot: {
    fontWeight: 700,
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
}))
