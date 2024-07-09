import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Display from './Components/Display/Display';
import Showcase from './Components/Showcase/Showcase';
import Offers from './Components/Offers/Offers';
import  {Cart} from "./Pages/Cart";
import Limited from './Components/Limited/Limited';
import Footer from './Footer';




function App() {

  
  return (
    <div>
        <Navbar />
        <Hero />
        <Display />
        <Showcase />
        <Offers />
        < Cart />
        <Limited />
        <Footer />
    </div>
  );
}

export default App;
