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

const useStyles = makeStyles({
  root: {
    height: "7vh"
  },
  listItem: {
    height: "100%",
    width: "100%"
  },
  paper: {
    height: "70vh",
    textAlign: "center",
    backgroundColor: "#212121",
    paddingTop: "15vh",
    color: "white"
  }
});

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
            <Grid item xs={12}>
              <ListItem
                button
                className={classes.listItem}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="subtitle1" noWrap>
                      <Box
                        letterSpacing={0}
                        fontFamily="Monospace"
                        fontWeight={400}
                        textAlign="center"
                      >
                        MARKET
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>

            <Grid item xs={12}>
              <ListItem
                button
                className={classes.root}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="subtitle1" noWrap>
                      <Box
                        letterSpacing={0}
                        fontFamily="Monospace"
                        fontWeight={400}
                        textAlign="center"
                      >
                        WATCHLIST
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>

            <Grid item xs={12}>
              <ListItem
                button
                className={classes.root}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="subtitle1" noWrap>
                      <Box
                        letterSpacing={0}
                        fontFamily="Monospace"
                        fontWeight={400}
                        textAlign="center"
                      >
                        FUTURES
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>

            <Grid item xs={12}>
              <ListItem
                button
                className={classes.root}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="subtitle1" noWrap>
                      <Box
                        letterSpacing={0}
                        fontFamily="Monospace"
                        fontWeight={400}
                        textAlign="center"
                      >
                        SECTORS
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Paper>
    </Grid>
  );
};
