import React, { useState, useContext } from "react";

import { Grid, makeStyles, Paper, List } from "@material-ui/core";

import { NavListItem } from "./NavListItem";
import MarketLogo from "../../Static/stock.svg";
import WatchlistLogo from "../../Static/plan.svg";
import SectorsLogo from "../../Static/pie-chart.svg";
import FuturesLogo from "../../Static/future.svg";
import { store } from "../../Store/store";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "86vh",
    backgroundColor: "#212121",
    color: "white"
  },
  nav_list_block: {
    top: "15%",
  }
}));
const props = {
  Market: { name: "MARKET", logo: MarketLogo },
  Watchlist: { name: "WATCHLIST", logo: WatchlistLogo },
  Futures: { name: "FUTURES", logo: FuturesLogo },
  Sectors: { name: "SECTORS", logo: SectorsLogo }
};
export const SideNav = () => {
  // Subscribe to `contacts` state and access dispatch function
  const [state, dispatch] = useContext(store);
  // Declare a local state to be used internally by this component
  const [selectedPage, setSelectedPage] = useState({currentPage: state.currentPage});

  const updateCurrentPage = currentPage => {
    dispatch({
      type: "SET_NAVBAR_CURRENT_PAGE",
      payload: { currentPage: currentPage }
    });
  };

  const clickHandler = e => {
    const label = e.target.textContent;
    setSelectedPage(label);
    dispatch({
      type: "SET_NAVBAR_CURRENT_PAGE",
      payload: { currentPage: label }
    });
    //updateCurrentPage(selectedPage);

    console.log(state);
  };
  const classes = useStyles();
  // const state = props();

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
            name={props.Market.name}
            logo={props.Market.logo}
            clickHandler={clickHandler}
          />
          <NavListItem
            className={classes.nav_list_item}
            name={props.Watchlist.name}
            logo={props.Watchlist.logo}
            clickHandler={clickHandler}
          />
          <NavListItem
            className={classes.nav_list_item}
            name={props.Sectors.name}
            logo={props.Sectors.logo}
            clickHandler={clickHandler}
          />
          <NavListItem
            className={classes.nav_list_item}
            name={props.Futures.name}
            logo={props.Futures.logo}
            clickHandler={clickHandler}
          />
        </List>
      </Paper>
    </Grid>
  );
};
