import React from "react";

import {
  Grid,
  makeStyles,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  paper: {
    height: "70vh",
    // textAlign: "center",
    backgroundColor: "#212121",
    paddingTop: "15vh",
    color: "white"
  },
  notification: {
    display: "inline-block",
    paddingTop: "0.45vh"
  }
}));

export const SideNav = () => {
  // function SelectedListItem() {
  //   const [selectedIndex, setSelectedIndex] = React.useState(1);

  //   const handleListItemClick = (event, index) => {
  //     setSelectedIndex(index);
  //   };
  // }

  const classes = useStyles();
  return (
    <Grid item xs={2}>
      <Paper className={classes.paper}>
        <List component="nav" aria-label="main mailbox folders">
          <Grid container direction="column" spacing={0}>
            <Grid container item xs={12}>
              <ListItem
                button
                className={classes.listItem}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <Grid className={classes.root} item xs={3}>
                  <FiberManualRecordIcon className={classes.notification} />
                </Grid>
                <Grid item xs={9}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="subtitle1" noWrap>
                        <Box
                          letterSpacing={0}
                          fontFamily="Monospace"
                          fontWeight={400}
                          textAlign="left"
                        >
                          WATCHLIST
                        </Box>
                      </Typography>
                    }
                  />
                </Grid>
              </ListItem>
            </Grid>
            <Grid container item xs={12}>
              <ListItem
                button
                className={classes.listItem}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <Grid className={classes.root} item xs={3}>
                  <FiberManualRecordIcon className={classes.notification} />
                </Grid>
                <Grid item xs={9}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="subtitle1" noWrap>
                        <Box
                          letterSpacing={0}
                          fontFamily="Monospace"
                          fontWeight={400}
                          textAlign="left"
                        >
                          MARKET
                        </Box>
                      </Typography>
                    }
                  />
                </Grid>
              </ListItem>
            </Grid>
            <Grid container item xs={12}>
              <ListItem
                button
                className={classes.listItem}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <Grid className={classes.root} item xs={3}>
                  <FiberManualRecordIcon className={classes.notification} />
                </Grid>
                <Grid item xs={9}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="subtitle1" noWrap>
                        <Box
                          letterSpacing={0}
                          fontFamily="Monospace"
                          fontWeight={400}
                          textAlign="left"
                        >
                          FUTURES
                        </Box>
                      </Typography>
                    }
                  />
                </Grid>
              </ListItem>
            </Grid>
            <Grid container item xs={12}>
              <ListItem
                button
                className={classes.listItem}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <Grid className={classes.root} item xs={3}>
                  <FiberManualRecordIcon className={classes.notification} />
                </Grid>
                <Grid item xs={9}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="subtitle1" noWrap>
                        <Box
                          letterSpacing={0}
                          fontFamily="Monospace"
                          fontWeight={400}
                          textAlign="left"
                        >
                          SECTORS
                        </Box>
                      </Typography>
                    }
                  />
                </Grid>
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Paper>
    </Grid>
  );
};
