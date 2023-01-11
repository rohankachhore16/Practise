import React from "react";
import Product from "../Product/Product";

const Home = () => {
  return (
    <>
      <h2 className="heading"> Wellcome to the redux toolkit Store </h2>
   <section>
    <h3>Products</h3>
    <Product/>
   </section>
    </>
  );
};

export default Home;
