import React from "react";

import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "88vh",
   
  }
}));

export const Body = () => {
  const classes = useStyles();
  return (
    <Grid item xs={10} className={classes.paper}>
      <Paper elevation={3} className={classes.paper}>stuff here</Paper>
    </Grid>
  );
};
