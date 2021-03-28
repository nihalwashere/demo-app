import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./styles.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ff7f50",
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UserTable = (props) => {
  const { usersList } = props;

  const classes = useStyles();

  return (
    <div className="user-table-root-container">
      <div className="user-table-container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="right">Contact</StyledTableCell>
                <StyledTableCell align="right">DOB</StyledTableCell>
                <StyledTableCell align="right">Role</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList.map((row) => (
                <StyledTableRow key={row.email}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span>{row.email}</span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <span>{row.contact || "--"}</span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <span>{row.dob || "--"}</span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <span>{row.role}</span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

UserTable.propTypes = {
  usersList: PropTypes.array.isRequired,
};

export default UserTable;
