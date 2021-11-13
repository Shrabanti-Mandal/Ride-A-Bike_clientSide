import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import useAuth from "../../../hooks/useAuth";

const Reviews = () => {
  const { user } = useAuth();
  const initialInfo = {
    email: user.email,
  };

  const [value, setValue] = useState(2);
  const [reviews, setReviews] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviews };
    newInfo[field] = value;
    console.log(newInfo);
    setReviews(newInfo);
  };

  const handleAddReview = (e) => {
    alert("Submitting");
    //collect data

    const yourReview = {
      ...reviews,
    };
    //send to the server
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(yourReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h2> Give Your Feedback , Please ! </h2>

        <form onSubmit={handleAddReview}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            name="email"
            label="email"
            disabled
            onBlur={handleOnBlur}
            defaultValue={user.email}
          />

          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your feedback"
            name="feedback"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Any suggesion for Improvement"
            name="improvement"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <Box>
            {" "}
            <Typography component="legend">Rate us</Typography>
            <Rating
              name="ratings"
              value={value}
              onBlur={handleOnBlur}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
            Add Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
