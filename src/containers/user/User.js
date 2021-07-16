// React imports
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Material-ui imports
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Material-ui icon imports
import BusinessIcon from "@material-ui/icons/Business";
import EmailIcon from "@material-ui/icons/Email";
import PeopleIcon from "@material-ui/icons/People";
import StarIcon from "@material-ui/icons/Star";

// Utility imports
import { abbreviateNumber } from "js-abbreviation-number";

// Local imports
import useStyles from "./userStyles";
import CardButton from "../../components/cardButton/CardButton";
import { clearUser, getUser } from "../../redux/userSlice";

function User() {
  const dispatch = useDispatch();
  const statusSelector = useSelector((state) => state.user.status);
  const userSelector = useSelector((state) => state.user.data);
  const { username } = useParams();
  const classes = useStyles();

  function handleRepoClick(url) {
    return () => {
      const repoTab = window.open(url, "_blank", "noopener,noreferrer");
      if (repoTab) repoTab.opener = null;
    }
  }

  function handleOrgClick(name) {
    return () => {
      const url = "https://github.com/" + name;
      const orgTab = window.open(url, "_blank", "noopener,noreferrer");
      if (orgTab) orgTab.opener = null;
    }
  }

  useEffect(() => {
    dispatch(getUser(username));

    return function cleanup() {
      dispatch(clearUser())
    }
  }, []) // eslint-disable-line
  
  return (
    <>
      <Container classes={{ root: classes.containerRoot }} disableGutters>
        {statusSelector === "loading" || statusSelector === "idle"
          ? (
            <Container
              maxWidth={false}
              classes={{ root: classes.circularProgressContainer }}
            >
              <CircularProgress color="inherit" size={60} />
            </Container>
          ) : (
            <Grid container spacing={4}>
              <Grid item container xs={12} md={3}>
                <figure className={classes.figure}>
                  <Avatar
                    classes={{ root: classes.avatarRoot }}
                    src={userSelector.avatar_url}
                    alt={userSelector.login}
                  />
                  <figcaption>
                    <div className={classes.infoField}>
                      <Typography variant="h5">
                        {userSelector.name}
                      </Typography>
                    </div>
                    <div className={classes.infoField}>
                      <Typography variant="h6">
                        {userSelector.login}
                      </Typography>
                    </div>
                    <div className={classes.infoField}>
                      <PeopleIcon classes={{ root: classes.fieldIcon }} />
                      <Typography variant="subtitle1">
                        <span>
                          <b>{abbreviateNumber(userSelector.followers, 1)}</b>
                          {userSelector.followers === 1
                            ? " Follower"
                            : " Followers"
                          }
                        </span>
                        <span> &bull; </span>
                        <span>
                          <b>{abbreviateNumber(userSelector.following, 1)}</b>
                          &nbsp;Following
                        </span>
                      </Typography>
                    </div>
                    {userSelector?.bio && (
                      <div className={classes.infoField}>
                        <Typography variant="subtitle2">
                          {userSelector.bio}
                        </Typography>
                      </div>
                    )}
                    {userSelector?.email && (
                      <div className={classes.infoField}>
                        <EmailIcon classes={{ root: classes.fieldIcon }} />
                        <Typography variant="subtitle1">
                          {userSelector.email}
                        </Typography>
                      </div>
                    )}
                    {userSelector?.company && (
                      <div className={classes.infoField}>
                        <BusinessIcon classes={{ root: classes.fieldIcon }} />
                        <Typography variant="subtitle1">
                          {userSelector.company}
                        </Typography>
                      </div>
                    )}
                  </figcaption>
                </figure>
              </Grid>
              <Grid item container xs={12} md={9}>
                <div className={classes.category}>
                  <Typography
                    variant="h4"
                    classes={{ root: classes.categoryTitle }}
                  >
                    Repositories
                  </Typography>
                  <Grid item container xs={12} spacing={4}
                    classes={{ root: classes.category}}
                  >
                    {userSelector?.repositories.length > 0
                      ? (
                        <>
                          {userSelector.repositories.map((repo) => (
                            <Grid key={repo.id} item xs={12} md={4}>
                              <CardButton onClick={handleRepoClick(repo.html_url)}>
                                <div className={classes.repositoryContent}>
                                  <Typography variant="h6">
                                    {repo.name}
                                  </Typography>
                                  <div className={classes.infoField}>
                                    <StarIcon />
                                    <Typography
                                      variant="overline"
                                      classes={{
                                        overline: classes.stargazersCount
                                      }}
                                    >
                                      &nbsp;
                                      {abbreviateNumber(repo.stargazers_count)}
                                    </Typography>
                                  </div>
                                </div>
                              </CardButton>
                            </Grid>
                          ))}
                        </>
                      ) : (
                        <Typography variant="overline">
                          No repositories
                        </Typography>
                      )
                    }
                  </Grid>
                </div>
                
                <div className={classes.category}>
                  <Typography
                    variant="h4"
                    classes={{ root: classes.categoryTitle }}
                  >
                    Organizations
                  </Typography>
                  <Grid item container xs={12} spacing={4}
                    classes={{ root: classes.category}}
                  >
                    {userSelector?.organizations.length > 0
                      ? (
                        <>
                          {userSelector.organizations.map((org) => (
                            <Grid key={org.id} item xs={12} md={3}>
                              <CardButton onClick={handleOrgClick(org.login)}>
                                <div className={classes.infoField}>
                                  <Avatar
                                    src={org.avatar_url}
                                    variant="rounded"
                                    classes={{
                                      root: classes.organizationAvatarRoot
                                    }}
                                  />
                                  <Typography
                                    variant="h6"
                                    classes={{ h6: classes.organizationName }}
                                  >
                                    {org.login}
                                  </Typography>
                                </div>
                              </CardButton>
                            </Grid>
                          ))}
                        </>
                      ) : (
                        <Typography variant="overline">
                          No organizations
                        </Typography>
                      )
                    }
                  </Grid>
                </div>
              </Grid>
            </Grid>
          )
        }
      </Container>
    </>
  );
}

export default User;
