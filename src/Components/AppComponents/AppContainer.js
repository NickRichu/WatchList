import React from "react";

import { Grid, makeStyles } from "@material-ui/core";
import { App } from "./App";

const useStyles = makeStyles(theme => ({
  app_grid: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0)
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
