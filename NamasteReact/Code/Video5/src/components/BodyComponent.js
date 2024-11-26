import RestoCard from "../components/RestoCard";
import resData from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  // State Variable
  // 1. Common Way of Destructing useState in React
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);

  // 2. Just an destructing
  // let arr = useState(resData);
  // const [listOfRestaurant, setListOfRestaurant] = arr

  // 3. through indexing
  // const listOfRestaurant = arr[0];
  // const setListOfRestaurant = arr[1];

  // All the above 3 method doing the same thing

  // Normal JS Variable
  let listOfRest = [
    {
      info: {
        id: "10892",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg",
        locality: "Vani Vilas Road",
        areaName: "Basavanagudi",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "9.9K+",
        sla: {
          deliveryTime: 44,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-11-25 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-fd4ff698-162c-47d8-b28b-6d3d031abcd3",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/pizza-hut-vani-vilas-road-basavanagudi-rest10892",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "364221",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/75bdbf0b-d6ae-48be-9d86-e9c2e52025e5_364221.JPG",
        locality: "5th Main Rd",
        areaName: "Chamrajpet",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4,
        parentId: "2456",
        avgRatingString: "4.0",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-11-24 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹1199",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-fd4ff698-162c-47d8-b28b-6d3d031abcd3",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/dominos-pizza-5th-main-rd-chamrajpet-rest364221",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ];

  return (
    <div className="body-compo">
      <div className="sub-nav">
        <div className="search" style={{ backgroundColor: "#f0f0f0 " }}>
          Search
        </div>
        <button
          onClick={() => {
            console.log("Before: ", resData);
            filterData = resData.filter((res) => res.info.avgRating >= 4.5);
            setListOfRestaurant(filterData);
            console.log("After: ", filterData);
          }}
          className="fliter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="card-container">
        {/* Resturant Card */}
        {listOfRestaurant.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
