import React from "react";

import { Grid } from "@material-ui/core";
import { TopBarContainer } from "../TopBarComponents/TopBarContainer";
import { SideNav } from "../SideNavComponents/SideNav";
import { Body } from "../BodyComponents/Body";

export const App = () => {
  return (
    <Grid container spacing={1}>
      <TopBarContainer />
      <SideNav />
      <Body />
    </Grid>
  );
};
