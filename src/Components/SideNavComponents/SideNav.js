import React from "react";

import {
  Grid,
  makeStyles,
  Paper,
  List,
} from "@material-ui/core";

import {NavListItem} from './NavListItem'

const useStyles = makeStyles(theme => ({

  paper: {
    height: "88vh",

    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    color: "white"
  },
  nav_list_block:{
    marginTop:theme.spacing(15)
  }
}));

export const SideNav = () => {
  const classes = useStyles();
  return (
    <Grid item xs={2}>
      <Paper className={classes.paper}>
        <List component="nav" aria-label=" Nav Menu Items" className={classes.nav_list_block}>
          <NavListItem name="MARKET" />
          <NavListItem name="WATCHLIST" />
          <NavListItem name="SECTORS" />
          <NavListItem name="FUTURES" />
        </List>
      </Paper>
    </Grid>
  );
};
