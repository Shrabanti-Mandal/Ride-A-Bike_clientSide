import React from "react";

const MyOrder = (props) => {
  const { _id, status, image } = props.myOrder;

  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{status}</p>
          <button onClick={() => props.handleDeleteBooking(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
