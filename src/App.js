import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <MySkills />
      <Contacts />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
