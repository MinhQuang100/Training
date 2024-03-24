import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Comment from './components/Comment';
import FeaturedProducts from './components/FeaturedProduct';
import Benefits from './components/Benefits';
import HowCanWeHelp from './components/Visualize';
function App() {
  return (
    <div className="App">
      <Header/>
      <Benefits/>
      <HowCanWeHelp/>
      <FeaturedProducts/>
      <Comment/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
