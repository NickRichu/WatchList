import React from "react";

import { Grid, makeStyles, Paper, List } from "@material-ui/core";

import { NavListItem } from "./NavListItem";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "88vh",
    backgroundColor: "#212121",
    color: "white"
  },
  nav_list_block: {
    top: "15%"
  }
}));

export const SideNav = () => {
  const clickHandler = () => {
    console.log("whats good");
  };
  const classes = useStyles();
  return (
    <Grid item xs={2}>
      <Paper className={classes.paper}>
        <List
          component="nav"
          aria-label=" Nav Menu Items"
          className={classes.nav_list_block}
        >
          <NavListItem
            className={classes.nav_list_item}
            name="MARKET"
            clickHandler={clickHandler}
          />
          <NavListItem className={classes.nav_list_item} name="WATCHLIST" />
          <NavListItem className={classes.nav_list_item} name="SECTORS" />
          <NavListItem className={classes.nav_list_item} name="FUTURES" />
        </List>
      </Paper>
    </Grid>
  );
};
