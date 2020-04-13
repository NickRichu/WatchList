import React from "react";
import {
  Grid,
 makeStyles,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Icon
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  nav_list_item: {
    "&:active": { backgroundColor: "#00b8d4" }
  }
  // currPageNotifier: {
  //   // background: "white"
  //   // display: "flex",
  //   // justifyContent: "right",
  //   //   alignItems: "center",
  // },
  // currentPage: {}
}));

export const NavListItem = props => {
 const classes = useStyles();
  return (
    <ListItem className={classes.nav_list_item} button onClick={props.clickHandler}>
      <Grid container alignItems="center" >
        <Grid item xs={4}>
          <Grid container justify="flex-end">
            <Icon>
              <img
                alt="corresponding link logo"
                src={props.logo}
                height={25}
                width={20}
              />
            </Icon>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container justify="flex-start">
            <ListItemText
              disableTypography
              primary={
                <Typography variant="subtitle1" noWrap>
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
