import "./App.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";  
import SecondaryNavbar from "./SecondaryNavbar.jsx";
import VideoSection from "./VideoSection.jsx";
import HighlightSection from "./HighlightSection.jsx";
import Articles from "./Articles.jsx";
import RegisterForm from "./RegisterForm.jsx";  
import Testimonials from "./Testimonials.jsx";    
import SocialIcons from "./SocialIcons.jsx";  
import Footer from "./Footer.jsx";


function App() {
  return (
    <div>
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      {/* <Hero /> */}

      {/* Secondary Navbar */}
      {/* <SecondaryNavbar /> */}
      
      {/* Video Section */}
      {/* <VideoSection /> */}

      {/* Highlight Section */}
      <HighlightSection />
      
      {/* Articles */}
      <Articles />

      {/* Register Form */}
      <RegisterForm />

      {/* Testimonials */}
      <Testimonials />

      {/* Social Icons */}
      <SocialIcons />

      {/* Footer */}
      <Footer />
    </div>

  );
}

export default App;
