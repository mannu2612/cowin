import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function CenterDetails(props) {
  const { centers } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="left"><b>Address</b></TableCell>
            <TableCell align="left"><b>Pincode</b></TableCell>
            <TableCell align="left"><b>Free/Paid</b></TableCell>
            <TableCell align="left"><b>Availability</b></TableCell>
            <TableCell align="left"><b>Vaccine</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {centers.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.pincode}</TableCell>
              <TableCell align="left">{row.fee_type}</TableCell>
              <TableCell align="left">{row.sessions[0].available_capacity}</TableCell>
              <TableCell align="left">{row.sessions[0].vaccine}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {centers.length === 0 && (<TableBody>
          <TableRow>
            <TableCell align="center" colSpan={6}>
              No slots available
        </TableCell>
          </TableRow>
        </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}

export default CenterDetails;
