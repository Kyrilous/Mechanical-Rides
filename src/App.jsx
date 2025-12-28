import "./App.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";  
import SecondaryNavbar from "./SecondaryNavbar.jsx";
import VideoSection from "./VideoSection.jsx";
import HighlightSection from "./HighlightSection.jsx";
import Articles from "./Gallery.jsx";
import RegisterForm from "./RegisterForm.jsx";  
import Rides from "./Rides";
import About from "./About";
import Testimonials from "./Testimonials.jsx";    
import SocialIcons from "./SocialIcons.jsx";  
import Footer from "./Footer.jsx";
import Gallery from "./Gallery.jsx";


function App() {
  return (
    <div>
      <Navbar />

      <div id="top"> 
        <Hero />
      </div>

      <About />

      <div id="rides"> 
        <Rides />
      </div>

      <div id="inquire">
        <RegisterForm />
      </div>

      <div id="reviews">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
export default App;