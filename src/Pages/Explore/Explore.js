import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";
import Footer from "../Shared/Footer/Footer";

const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-inlet-63438.herokuapp.com/allBikes")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  });
  return (
    <div>
      <div className="container">
        <h2 className="m-5 text-primary">the List of our all products</h2>
        <Grid container spacing={2}>
          {allProducts.map((product) => (
            <AllProduct key={product.bikeName} product={product}></AllProduct>
          ))}
        </Grid>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
