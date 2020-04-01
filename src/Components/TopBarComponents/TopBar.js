import React from "react";

import { Typography, Box, Grid } from "@material-ui/core/";


export const TopBar = () => {
  return (
     
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Typography variant="h6" noWrap>
                <Box
                  
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
  );
};
