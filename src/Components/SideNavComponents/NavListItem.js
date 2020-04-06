import React from "react";
import {
  Grid,
  makeStyles,
  ListItem,
  ListItemText,
  Box,
  Typography
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles(theme => ({
  //   currPageNotifier: {
  //   //  float: "right",
  // //    visibility: "hidden"

  //   },
  //   currentPage: {
  //       paddingLeft:theme.spacing(2)

  //}
  button: {
    width: "100%"
    // justifyContent:"flex-end"
  },
  currPageNotifier: {
    // display: "flex",
    // justifyContent: "right",
    //   alignItems: "center",
  },
  currentPage: {}
}));

export const NavListItem = props => {
  const classes = useStyles();
  return (
    <ListItem classNames={classes.button} button onClick={props.clickHandler}>
      <Grid container alignItems="center" spacing="2">
        <Grid item xs={4}>
          <Grid container  justify="flex-end" >
            <FiberManualRecordIcon className={classes.currPageNotifier} />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container justify="flex-start" >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="subtitle1"
                  noWrap
                  className={classes.currentPage}
                >
                  <Box
                    letterSpacing={0}
                    fontFamily="Monospace"
                    fontWeight={400}
                    textAlign="left"
                  >
                    {props.name}
                  </Box>
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  
  );
};
