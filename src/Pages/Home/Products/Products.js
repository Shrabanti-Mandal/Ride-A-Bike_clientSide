import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2 className="m-5 text-primary">Have a look of our products</h2>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Product key={product.bikeName} product={product}></Product>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
