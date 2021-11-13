import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClientReview from "../ClientReview/ClientReview";

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-inlet-63438.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h2 className="m-5 text-primary">Check before You Buy </h2>

      <div class="row card-group">
        {reviews.map((review) => (
          <ClientReview review={review}></ClientReview>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
