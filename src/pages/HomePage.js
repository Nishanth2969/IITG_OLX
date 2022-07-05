import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container mt-3">
        <Slider />
        <div className="row">
          <h1>Categories</h1>
          <div className="col-md-5">
            <div className="Imagecontainer">
              <img src="/rentbike.jpg" alt="Rent" />
              <button
                className="btn"
                onClick={() => navigate("/category/rent")}
              >
                For Rent
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="Imagecontainer">
              <img src="/saleimg.jpg" alt="Sale" />
              <button
                className="btn"
                onClick={() => navigate("/category/sale")}
              >
                For Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
