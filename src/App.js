import "./App.css";
import AppSection from "./components/AppSection/appSection";
import FAQ from "./components/FAQ/faq";
import Hero from "./components/Hero/hero";
import JoinUs from "./components/JoinUs/joinUs";
import Navbar from "./components/Nav/nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AppSection />
      <JoinUs />
      <FAQ/>
    </div>
  );
}

export default App;
