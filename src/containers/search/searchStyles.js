import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  avatarRoot: {
    marginRight: theme.spacing(2),
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
  typographyRoot: {
    wordWrap: "anywhere",
  },
}))
