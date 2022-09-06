import "./joinUs.css";
import Burger from "../../assets/images/JoinUs/burger.svg";
import drivers from "../../assets/images/JoinUs/drivers.svg";
import partner from "../../assets/images/JoinUs/partners.svg";
import jobs from "../../assets/images/JoinUs/jobs.svg";

// Join Us Component
const JoinUs = () => {
  return (
    <div className="joinUs">
      {/* Burger Image */}
      <img src={Burger} alt="Burger Image" className="joinUs-burgerImage" />
      {/* Headind*/}
      <h1 className="joinUs-headingTitle">Join Us</h1>
      {/* Div Icons */}
      <div className="joinUs-Icons">
        <div className="icon">
            <img src={partner} alt="Partner Image"/>
            <h2>Partners</h2>
        </div>
        <div className="icon">
            <img src={drivers} alt="Drivers Image"/>
            <h2>Drivers</h2>
        </div>
        <div className="icon">
            <img src={jobs} alt="Jobs Image"/>
            <h2>Jobs</h2>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
