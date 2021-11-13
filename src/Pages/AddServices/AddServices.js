import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const AddServices = () => {
  const [bikeInfo, setBikeInfo] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bikeInfo };
    newInfo[field] = value;

    setBikeInfo(newInfo);
  };

  const handleAddService = (e) => {
    alert("Submitting");
    //collect data
    const bike = {
      ...bikeInfo,
    };
    //send to the server
    fetch("https://cryptic-inlet-63438.herokuapp.com/bikes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bike),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleAddService}>
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Bike name"
          name="bikeName"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Bike Price"
          name="price"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Bike Description"
          name="description"
          onBlur={handleOnBlur}
          variant="standard"
        />

        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Bike image Url"
          name="image"
          onBlur={handleOnBlur}
          type="url"
          variant="standard"
        />

        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
          Add This Product
        </Button>
      </form>
    </Container>
  );
};

export default AddServices;
