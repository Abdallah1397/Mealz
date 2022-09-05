import "./appSection.css";
import image1 from "../../assets/images/breakfast_cooking_egg_fried_kitchen_icon.png";
import image2 from "../../assets/images/fast_food_gastronomy_mexican_restaurant_icon.png";
import GooglePlay from "../../assets/images/GooglePlay.svg";
import AppStore from "../../assets/images/AppStore.svg";
import PhoneContainer from "../../assets/images/PhoneContainer.svg";

// App Section Component
const AppSection = () => {
  return (
    <div className="mealz-downloadInstructionsMainView">
      <img src={image1} alt="image1" className="mealz-backgroundImage" />
      <img src={image2} alt="image2" className="mealz-backgroundImage" />
      <div className="mealz-downloadInstructionsWrapper">
        {/* Phone Logo Container */}
        <div className="mealz-phoneContainer">
            <img src={PhoneContainer} alt="Phone Container"/>
        </div>
        {/* Download instrucions */}
        <div className="mealz-instructionsSection">
          {/* Instructions List */}
          <h1 className="mealz-downloadHeading">Download the App</h1>
          <ul className="mealz-instructionsList">
            <li>
              <i
                className="fa fa-check-circle"
                style={{ color: "#D1003F", fontSize: "1.2rem" }}
              />
              &nbsp; Order now or schedule a delivery time.
            </li>
            <li>
              <i
                className="fa fa-check-circle"
                style={{ color: "#D1003F", fontSize: "1.2rem" }}
              />
              &nbsp; Track your order.
            </li>
            <li>
              <i
                className="fa fa-check-circle"
                style={{ color: "#D1003F", fontSize: "1.2rem" }}
              />
              &nbsp; Exclusive offers.
            </li>
            <li>
              <i
                className="fa fa-check-circle"
                style={{ color: "#D1003F", fontSize: "1.2rem" }}
              />
              &nbsp; Online payment.
            </li>
            <li>
              <i
                className="fa fa-check-circle"
                style={{ color: "#D1003F", fontSize: "1.2rem" }}
              />
              &nbsp; Cash on delivery
            </li>
          </ul>
          {/* App Store Images */}
          <div className="mealz-appStore">
            <img src={GooglePlay} alt="Google Play" />
            <img src={AppStore} alt="AppStore" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppSection;
