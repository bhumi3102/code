import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
// import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
// import {getDatabase, push,ref} from 'https://www.gstatic.com/firebase/9.15.0/firebase-database.js'


// const appSetting = { dataBaseURL : 'https://cart-app-f242e-default-rtdb.firebaseio.com/'}



// const App = initializeApp(appSetting);
// const database = getDatabase(App);
// const dataTable = ref(database, "OrderList");

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}




const rows = [
  createData("Frozen yoghurt", 76456245, "2 March 2022", "Approved"),
  createData("Frozen yoghurt", 76456245, "2 March 2022", "Pending"),
  createData("Frozen yoghurt", 76456245, "2 March 2022", "Delivered"),
  createData("Frozen yoghurt", 76456245, "2 March 2022", "Approved"),
  createData("Frozen yoghurt", 76456245, "2 March 2022", "Pending"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 158 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #0808080" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left" ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  {
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  }
                </TableCell>
                <TableCell align="left" className='details'>Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
      </div>
    </div>
  );
}
