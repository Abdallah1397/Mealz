import './hero.css';

// Hero => contains details div with a specific background
const Hero = () => {
  return (
    <div className="mealz-hero">
      <div className="hero-details">
        <h1 >Your favorite <span className='mealz-span'>Mealz</span> <br/>delivered.</h1>
      </div>
    </div>
  );
};
export default Hero;
