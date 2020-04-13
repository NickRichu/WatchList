import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "86vh"
  },
  table: {
    minWidth: 700
  },
  options :{
    backgroundColor: "#ff1744"
  },
  options2 :{
    backgroundColor: "#00e676"
  }
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Apple', 1000, '5/100', '5%', '5%','5%', '5%', '5%'),
  createData('Apple', 1000, '5/100', '5%', '5%','5%', '5%', '5%'),
  createData('Apple', 1000, '5/100', '5%', '5%','5%', '5%', '5%'),
  createData('Apple', 1000, '5/100', '5%', '5%','5%', '5%', '5%'),
  createData('Apple', 1000, '5/100', '5%', '5%','5%', '5%', '5%'),
];

export const Body = () => {
  const classes = useStyles();
  return (
    <Grid item xs={10} className={classes.paper}>
      <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Stocks</StyledTableCell>
                <StyledTableCell align="right">Last Price</StyledTableCell>
                <StyledTableCell align="right">52 Week L/H</StyledTableCell>
                <StyledTableCell align="center">Todays Change</StyledTableCell>
                <StyledTableCell align="center">
                  Week Change
                </StyledTableCell>
                <StyledTableCell align="center">
                  Month Change
                </StyledTableCell>
                <StyledTableCell align="center">
                  3 Month Change
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell  align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell className={classes.options} align="center">{row.carbs}</StyledTableCell>
                  <StyledTableCell className={classes.options2} align="center">{row.protein}</StyledTableCell>
                  <StyledTableCell className={classes.options2} align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell className={classes.options} align="center">{row.carbs}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};
