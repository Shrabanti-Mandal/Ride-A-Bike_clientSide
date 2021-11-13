import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `https://cryptic-inlet-63438.herokuapp.com/myBooking?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  const handleDeleteBooking = (id) => {
    const yes = window.confirm("Are You Sure.?");
    if (yes === true) {
      console.log(id);
      const url = `https://cryptic-inlet-63438.herokuapp.com/myBooking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = myOrders.filter((order) => order._id !== id);
            alert("deleted");
            setMyOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>my orders {myOrders.length}</h2>
      {myOrders.map((myOrder) => (
        <MyOrder
          myOrder={myOrder}
          handleDeleteBooking={handleDeleteBooking}
        ></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;
