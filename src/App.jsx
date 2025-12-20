import "./App.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";  
import SecondaryNavbar from "./SecondaryNavbar.jsx";
import VideoSection from "./VideoSection.jsx";
import HighlightSection from "./HighlightSection.jsx";
import Articles from "./Gallery.jsx";
import RegisterForm from "./RegisterForm.jsx";  
import Testimonials from "./Testimonials.jsx";    
import SocialIcons from "./SocialIcons.jsx";  
import Footer from "./Footer.jsx";
import Gallery from "./Gallery.jsx";


function App() {
  return (
    <div>
      <Navbar />

      {/* About Us / Highlight */}
      <div id="about">
        <HighlightSection />
      </div>

      {/* Gallery */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* Inquire */}
      <div id="inquire">
        <RegisterForm />
      </div>

      {/* Customer Reviews */}
      <div id="reviews">
        <Testimonials />
      </div>

      <SocialIcons />
      <Footer />
    </div>
  );
}
export default App;