import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  avatarRoot: {
    width: "70%",
    height: "auto",
    margin: [[0, "15%", theme.spacing(3), "15%"]],
  },
  circularProgressContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerRoot: {
    marginTop: theme.spacing(12),
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  fieldIcon: {
    marginRight: theme.spacing(1),
  },
  figure: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
  },
  infoField: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  category: {
    width: "100%",
    margin: 0,
    "&:not(:first-of-type)": {
      marginTop: theme.spacing(4),
    },
  },
  categoryTitle: {
    marginBottom: theme.spacing(1.25),
  },
  link: {
    color: "inherit",
    fontWeight: 700,
    textDecoration: "none",
  },
  organizationAvatarRoot: {
    marginRight: theme.spacing(1.25),
  },
  organizationName: {
    fontSize: "1.1rem",
  },
  stargazersCount: {
    fontWeight: 700,
  },
  repositoryContent: {
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
