import React, { useState, useContext }  from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";
import { TopBar } from "./TopBar";
import {store} from "../../Store/store.js"
const useStyles = makeStyles({
  paper: {
    background: "#212121",
    height: "12vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  }
});
export const TopBarContainer = () => {
  const [state, dispatch] = useContext(store);
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <TopBar pageLabel={state.currentPage} />
      </Paper>
    </Grid>
  );
};
