import React from "react";

import { Grid, makeStyles } from "@material-ui/core";
import { App } from "./App";

const useStyles = makeStyles(theme => ({
  app_grid: {
  }
}));

export const AppContainer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.app_Grid}>
      <App />
    </Grid>
  );
};
