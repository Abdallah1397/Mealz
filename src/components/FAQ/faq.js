import "./faq.css";
import hot_dog from "../../assets/images/FAQ/hot_dog.svg";
import pizza from "../../assets/images/FAQ/pizza.svg";

const FAQ = () => {
  return (
    <div className="faq">
      {/* Background Images */}
      <img src={hot_dog} alt="HotDog" className="faq-hotDog-backgroundImage" />
      <img src={pizza} alt="Pizza" className="faq-pizza-backgroundImage" />
      {/* FAQ Main Div*/}
      <div className="faq-section">
        {/* Heading Title */}
        <h1>FAQ</h1>
        {/* Questions */}
        <div className="faq-questions">
          <div className="faq-question">
            <h2>What is Mealz?</h2>
            <i className="fa fa-plus"/>
          </div>
          <div className="faq-question">
            <h2>What are the accepted payment methods?</h2>
            <i className="fa fa-plus"/>
          </div>
          <div className="faq-question">
            <h2>What are Mealz working hours?</h2>
            <i className="fa fa-plus"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
