
import './App.css';
import Best from './Components/Best/Best';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
