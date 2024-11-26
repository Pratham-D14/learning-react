import { CDN_URL } from "../utils/constant";

// Giving CSS to Search
const stylecard = {
  backgroundColor: "#f0f0f0",
};

const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  // const { deliveryTime } = resData.info?.;
  return (
    <div className="resto-card" style={stylecard}>
      <img
        className="resto-img"
        alt="resturant-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4>{"Cuisines: " + cuisines.join(", ")}</h4>
      <h4>{"Rating: " + avgRating}</h4>
      <h4>{"Cost: " + costForTwo}</h4>
      <h4>{"Delivery in: " + sla.deliveryTime + " minutes"} </h4>
    </div>
  );
};

export default RestoCard;
