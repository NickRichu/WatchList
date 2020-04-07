import React from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";
import { TopBar } from "./TopBar";

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
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <TopBar />
      </Paper>
    </Grid>
  );
};
