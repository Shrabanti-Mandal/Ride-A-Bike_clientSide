import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Products from "../Products/Products";

import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../../Shared/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Services></Services>
      <ClientReviews></ClientReviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
