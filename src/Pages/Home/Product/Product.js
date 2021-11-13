import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  const { _id, bikeName, image, price, description } = props.product;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "success.main" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {bikeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.slice(0, 300)}
            </Typography>
            <Typography sx={{ color: "warning.main" }} variant="h5">
              Current Price {price}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button variant="contained" color="success">
              Purchase
            </Button> */}
            <NavLink to={`/purchase/${_id}`}>
              <Button variant="contained" color="success">
                Purchase
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Product;
