import React from "react";

import Paper from "@material-ui/core/Paper/Paper";
import { Typography, Box, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { theme } from "../theme";


const useStyles = makeStyles({
  title: {
    height: "8vh",
    paddingTop: "3vh",
    background: "#212121 ",
    color: "white"
  },
  appBox: {
    marginRight: "4vh"
  },
 
});

export const TopBar = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.title}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Typography variant="h6" noWrap>
                  <Box
                    className={classes.appBox}
                    letterSpacing={2}
                    fontFamily="Monospace"
                    fontSize="h6.fontSize"
                    fontWeight="500"
                    m={1}
                    textAlign="center"
                  >
                    CORONA
                  </Box>
                </Typography>
              </Grid>
           
              <Grid item xs={10}>
                <Typography variant="h6" noWrap>
                  <Box
                    className={classes.pageBox}
                    letterSpacing={2}
                    fontFamily="Monospace"
                    fontSize="h6.fontSize"
                    m={1}
                    fontWeight="500"
                    textAlign="center"
                  >
                    WATCHLIST
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};
