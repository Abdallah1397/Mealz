import './App.css';
import AppSection from './components/AppSection/appSection';
import Hero from './components/Hero/hero';
import Navbar from './components/Nav/nav';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <AppSection/>
    </div>
  );
}

export default App;
