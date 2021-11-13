import { ContactMail } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  // const { user } = useAuth();
  const [allBookings, setAllBookings] = useState([]);

  const handleDelete = (id) => {
    const yes = window.confirm("Are You Sure.?");
    if (yes === true) {
      const url = `https://cryptic-inlet-63438.herokuapp.com/myBooking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = allBookings.filter((order) => order._id !== id);
            alert("deleted");
            setAllBookings(remaining);
          }
        });
    }
  };

  const handleUpdatedStatus = (id, e) => {
    console.log(id);
    const url = `https://cryptic-inlet-63438.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully");

          window.location.reload();
        }
      });
  };
  useEffect(() => {
    fetch("https://cryptic-inlet-63438.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left"> Bike Name</TableCell>

              <TableCell align="left"> Status</TableCell>
              <TableCell align="left"> Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBookings.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.bikeName}</TableCell>

                <TableCell align="left">{row.status}</TableCell>

                <TableCell align="left">
                  {row.status === "pending" && (
                    <Button
                      onClick={() => handleUpdatedStatus(row._id)}
                      variant="contained"
                    >
                      Shipped
                    </Button>
                  )}
                </TableCell>
                <TableCell align="left">
                  {
                    <Button
                      onClick={() => {
                        handleDelete(row._id);
                      }}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllOrders;
