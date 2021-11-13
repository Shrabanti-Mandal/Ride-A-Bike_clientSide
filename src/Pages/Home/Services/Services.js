import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";

const services = [
  {
    name: "Car Repair",
    description:
      "We have our professional automobile care service partners with Skilled mechanics.We are making a one-stop car care service solution because your flexibility is our main priority.",

    img: "https://media.istockphoto.com/photos/auto-mechanic-working-on-car-engine-in-mechanics-garage-repair-picture-id1284285171?b=1&k=20&m=1284285171&s=170667a&w=0&h=mB0wBqa5W3R_X9NRaAKZu9zguEf9CmMsOClDPX23uoI=",
  },
  {
    name: "Car Wash",
    description:
      "According to Damon Lawrence who runs automotive detailing business Auto Attention, car washes are a major cause of paintwork getting damaged.As a general rule of thumb, it's important to wash your car at least every two weeks.",
    img: "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/2713/market-research-car-wash.png",
  },
  {
    name: "Car Rent",
    description:
      "With a little planning, driving in Dhaka with the help of our expert drivers is a great way to get around the city. Our drivers obey the speed limits, and when driving in the city will typically be 40km/h, but always the driver check signs for the route that you are on.",
    img: "https://media.istockphoto.com/photos/close-up-of-a-man-receiving-new-car-key-picture-id628453996?k=20&m=628453996&s=612x612&w=0&h=o0YMpSeU9tL73tn3xih1fGd3RQ8XViJpIgOeCTI_RB4=",
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
