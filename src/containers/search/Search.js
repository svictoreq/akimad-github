// React imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// Material-ui imports
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

// Local imports
import useStyles from "./searchStyles";
import CardButton from "../../components/cardButton/CardButton";
import { clearResults, fetchUsers } from "../../redux/searchSlice"

function Search() {
  const dispatch = useDispatch()
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const statusSelector = useSelector((state) => state.search.status);
  const resultsSelector = useSelector((state) => state.search.results);
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const theme = useTheme();
  const isNotSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  function handlePageChange(_, page) {
    setCurrentPage(page);
    const params = {
      ...resultsSelector.params,
      page,
    };
    const searchParams = new URLSearchParams(params);
    history.push("/search?" + encodeURI(searchParams.toString()))
  }

  function handleCardClick(login) {
    return () => {
      history.push(`/user/${login}`);
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = {};
    for (let entry of searchParams.entries()) {
      queryParams[entry[0]] = encodeURIComponent(entry[1]);
    }
    dispatch(fetchUsers(queryParams));

    return function() {
      dispatch(clearResults());
    }
  }, [location]); // eslint-disable-line

  useEffect(() => {
    if (statusSelector === "success") {
      const totalResults = resultsSelector.total_count < 1000
        ? resultsSelector.total_count
        : 1000;
      setPageCount(Math.ceil(totalResults / resultsSelector.params.per_page));
      setCurrentPage(parseInt(resultsSelector.params.page));
    }
  }, [statusSelector]) // eslint-disable-line

  return (
    <Container classes={{ root: classes.containerRoot}}>
      {statusSelector === "loading"
        ? (
          <Container
            disableGutters
            classes={{ root: classes.circularProgressContainer }}>
            <CircularProgress color="inherit" size={60} />
          </Container>
        )
        : (statusSelector === "success" && !(resultsSelector.total_count > 0))
          ? (
            <Container
              disableGutters
              classes={{ root: classes.circularProgressContainer }}>
              <Typography variant="overline">
                no_users_found :(
              </Typography>
            </Container>
          ) : (
            <>
              <Grid container spacing={3}>
                {resultsSelector.items.map((item) => (
                  <Grid key={item.node_id} item xs={12} md={6} lg={3}>
                    <CardButton onClick={handleCardClick(item.login)}>
                      <Avatar src={item.avatar_url} classes={{ root: classes.avatarRoot }} />
                      <figcaption>
                        <Typography
                          variant="h6"
                          classes={{
                            root: classes.typographyRoot
                          }}
                        >
                          {item.login}
                        </Typography>
                      </figcaption>
                    </CardButton>
                  </Grid>
                ))}
              </Grid>
              <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                size={isNotSmallScreen ? "large" : "small"}
                classes={{ root: classes.paginationRoot }}
                renderItem={(item) => (
                  <PaginationItem
                    classes={{ root: classes.paginationItemRoot }}
                    {...item}
                  />
                )}
              />
            </>
          )
      }
    </Container>
  );
}

export default Search;
