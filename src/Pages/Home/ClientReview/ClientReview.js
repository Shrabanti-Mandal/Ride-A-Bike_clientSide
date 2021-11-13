import { Rating } from "@mui/material";
import React from "react";

const ClientReview = (props) => {
  const { email, feedback, improvement, ratings } = props.review;
  console.log(feedback);

  return (
    <div className="col-lg-4 ">
      <div className="card m-5 bg-light border-start ">
        <div className="card-body">
          <h6 className="card-title">email:{email}</h6>
          <p className="card-text">Feedback: {feedback}</p>
          <p className="card-text">
            <small className="text-muted">Improvement: {improvement}</small>
          </p>

          <Rating name="read-only" value={ratings} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
