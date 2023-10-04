import Cards from "./Components/Card";
import FeaturesSection from "./Components/Features";
import Food from "./Components/Food";
import Footer from "./Components/Footer";
import Locations from "./Components/Locations";
import NavbarCom from "./Components/Navbar";
import Reviews from "./Components/Reviews";
import Social from "./Components/Social";

const App = () => {
  return (
    <>
      <NavbarCom></NavbarCom>
      <Food></Food>
      <Cards></Cards>
      <FeaturesSection />
      <Social></Social>
      <Reviews></Reviews>
      <Locations></Locations>
      <Footer></Footer>
    </>
  );
};

export default App;
