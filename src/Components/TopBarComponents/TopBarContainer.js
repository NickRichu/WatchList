import React from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";
import { TopBar } from "./TopBar";

const useStyles = makeStyles({
  paper: {
    background: "#39CCCC"
  },
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
