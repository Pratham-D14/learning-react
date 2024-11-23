import React from "react";
import ReactDOM from "react-dom";

const Header = ({ logoImage }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoImage} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Giving CSS to Search
const stylecard = {
  backgroundColor: "#f0f0f0",
};

const resObj = {
  data: {
    name: "KFC",
    costForTwo: 400,
    avgRating: "3.8",
    cuisines: "Indian Tadka, North India, Biryani",
    deliveryTime: "36",
  },
};

const RestoCard = (props) => {
  return (
    <div className="resto-card" style={stylecard}>
      <img className="resto-img" alt="resturant-image" src={props.image} />
      <h2>{props.restoName}</h2>
      <h4>{props.cuisines}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.timing}</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body-compo">
      <div className="search" style={{ backgroundColor: "#f0f0f0 " }}>
        Search
      </div>
      <div className="card-container">
        {/* Resturant Card */}
        <RestoCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750356.JPG"
          restoName="Meghnana Foods"
          cuisines="Briyani, North Indian, Asian"
          rating="4.4 stars"
          timing="Delivery in 38 mintues"
        />
        <RestoCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/77fd64a7-e48e-4899-8243-7c3334b2661e_17301.JPG"
          restoName="KFC Bangalore"
          cuisines="Burger, Chicken, Indian Tadka"
          rating="4.6 stars"
          timing="Delivery in 50 mintues"
        />
        <RestoCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/ce23d8fa-6a6f-4adf-917e-4234d6d04215_643793.JPG"
          restoName="McDonald's"
          cuisines="ice-cream, subway, burger"
          rating="4.7 stars"
          timing="Delivery in 35 mintues"
        />
        <RestoCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a738889b-e79c-4639-bef6-6917afb62245_1452.JPG"
          restoName="McDonald's"
          cuisines="ice-cream, subway, burger"
          rating="4.7 stars"
          timing="Delivery in 35 mintues"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/*  Header */}
      <Header logoImage="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />

      {/* Body */}
      <BodyComponent />

      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
