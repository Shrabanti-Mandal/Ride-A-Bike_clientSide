import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Purchase.css";
const Purchase = () => {
  const { user } = useAuth();
  const { Id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [productDetails, setproductDetails] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const history = useHistory();

  const redirect = "/dashboard";

  const onSubmit = (data) => {
    data.image = singleProduct.image;
    data.bikeName = singleProduct.bikeName;
    console.log(data);
    fetch("https://cryptic-inlet-63438.herokuapp.com/createBooking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added successfully");
          reset();
          history.push(redirect);
        }
      });
  };

  useEffect(() => {
    fetch("https://cryptic-inlet-63438.herokuapp.com/allBikes")
      .then((res) => res.json())
      .then((data) => setproductDetails(data));
  }, []);

  useEffect(() => {
    const found = productDetails?.find((detail) => detail._id == Id);
    setSingleProduct(found);
  }, [productDetails]);

  return (
    <div>
      <div className="purchase-details">
        <div className="w-50">
          <img src={singleProduct?.image} alt="" />
          <h3>{singleProduct?.bikeName} </h3>
        </div>
        <div className="w-50">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div class="form-group row">
                <label for="fname" class="col-sm-4 col-form-label">
                  Name :
                </label>
                <div class="col-sm-6">
                  <input
                    {...register("name")}
                    type="text"
                    class="form-control"
                    value={user.displayName}
                    id="fname"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="femail" class="col-sm-4 col-form-label">
                  Email :
                </label>
                <div class="col-sm-6">
                  <input
                    {...register("email")}
                    type="text"
                    class="form-control"
                    value={user.email}
                    id="femail"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="fphone" class="col-sm-4 col-form-label">
                  Phone :
                </label>
                <div class="col-sm-6">
                  <input
                    {...register("phone")}
                    type="text"
                    class="form-control"
                    id="fphone"
                    placeholder="Place your phone number here "
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="faddress" class="col-sm-4 col-form-label">
                  Address :
                </label>
                <div class="col-sm-6">
                  <input
                    {...register("address")}
                    type="text"
                    class="form-control"
                    id="faddress"
                    placeholder="Place your Address here  "
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <input
                    {...register("status")}
                    type="hidden"
                    value="pending"
                    class="form-control"
                    id="status"
                    placeholder="Your status "
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <input
                    {...register("image")}
                    type="hidden"
                    value={singleProduct?.image}
                    class="form-control"
                    id="image"
                    placeholder="image "
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <input
                    {...register("bikeName")}
                    type="hidden"
                    value={singleProduct?.bikeName}
                    class="form-control"
                    id="name"
                    placeholder="Bike name  "
                  />
                </div>
              </div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
