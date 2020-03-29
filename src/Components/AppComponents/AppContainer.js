import React from "react";

import { Grid, makeStyles } from "@material-ui/core";
import { App } from "./App";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0)
  }
}));

export const AppContainer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid}>
      <App />
    </Grid>
  );
};
