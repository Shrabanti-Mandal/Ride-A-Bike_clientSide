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

const ManageProducts = () => {
  const [bikes, setBikes] = useState([]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/allBikes/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = bikes.filter((order) => order._id !== id);
          alert("deleted");
          setBikes(remaining);
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/allBikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div>
      <h1>ManageProducts</h1>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bikes.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                handleDelete={handleDelete}
              >
                {/* <TableCell component="th" scope="row">
                  {row.bikeName}
                </TableCell> */}
                <TableCell align="left">{row.bikeName}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">
                  {
                    <img
                      src={row.image}
                      alt=""
                      style={{ width: "50%", height: "80px" }}
                    />
                  }
                </TableCell>
                <TableCell align="left">
                  {
                    <Button
                      onClick={() => handleDelete(row._id)}
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

export default ManageProducts;
