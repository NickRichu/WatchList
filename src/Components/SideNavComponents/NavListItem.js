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
  currPageNotifier: {
   float: "right"
  },
  currentPage: {
      paddingLeft:theme.spacing(1)

  }
}));

export const NavListItem = (props) => {
  const classes = useStyles();
  return (
      <Grid container item xs={12} >
        <ListItem button >
          <Grid item xs={2}>
            <FiberManualRecordIcon className={classes.currPageNotifier} />
          </Grid>
          <Grid item xs={10}>
            <ListItemText
              disableTypography
              primary={
                <Typography variant="subtitle1" noWrap className={classes.currentPage} >
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
        </ListItem>
      </Grid>

  );
};
