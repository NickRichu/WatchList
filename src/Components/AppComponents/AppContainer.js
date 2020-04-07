import React from "react";
import { StateProvider } from '../../Store/store.js';
import {
  Grid
  // makeStyles
} from "@material-ui/core";
import { App } from "./App";

// const useStyles = makeStyles(theme => ({
//   app_grid: {
//   }
// }));

export const AppContainer = () => {
  // const classes = useStyles();
  return (
    <StateProvider>
    <Grid>
      <App />
    </Grid>
    </StateProvider>
  );
};
