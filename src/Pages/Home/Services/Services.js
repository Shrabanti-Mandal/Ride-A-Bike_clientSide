import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";

const services = [
  {
    name: "Bike Repair",
    description:
      "We have our professional automobile care service partners with Skilled mechanics.We are making a one-stop bikecare service solution because your flexibility is our main priority.",

    img: "https://i.ibb.co/4WQTMxy/Image-is-close-up-People-holding-hand-are-repairing-a-motorcycle-Use-a-wrench-and-a-screwdriver-to-w.jpg",
  },
  {
    name: "Bike Wash",
    description:
      "According to Damon Lawrence who runs automotive detailing business Auto Attention, bikewashes are a major cause of paintwork getting damaged.As a general rule of thumb, it's important to wash your bikeat least every two weeks.",
    img: "https://i.ibb.co/Bs3K2Xv/download-1.jpg",
  },
  {
    name: "Bike Rent",
    description:
      "With a little planning, driving in Dhaka with the help of our expert drivers is a great way to get around the city. Our drivers obey the speed limits, and when driving in the city will typically be 40km/h, but always the driver check signs for the route that you are on.",
    img: "https://i.ibb.co/Z1zCHTF/Rent-Bike-in-Goa-20180226115915.jpg",
  },
];

const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography
            sx={{ fontWeight: 700, m: 2, color: "success.main" }}
            variant="h4"
            component="div"
          >
            OUR SERVICES
          </Typography>
          <Typography
            sx={{ fontWeight: 500, m: 2 }}
            variant="h6"
            component="div"
          >
            The benifit you will get here-
          </Typography>
          <br />
          <br />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Service key={service.name} service={service}></Service>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Services;
