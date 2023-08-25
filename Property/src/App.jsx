import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Progress from "./Progress/Progress";
import Howit from "./Howit/Howit";
import Property from "./Property/Property";
import Feature from "./Feature/Feature";
import Cities from "./Cities/Cities";
import FProperty from "./FProperty/FProperty";
import Counter from "./Counter/Counter";
import MProperty from "./MProperty/MProperty";
import Testimonial from "./Testimonial/Testimonial";
import Price from "./Price/Price";
import Faq from "./Faq/Faq";
import Agent from "./Agent/Agent";
import Blog from "./Blog/Blog";
import NewsLetter from "./NewsLetter/NewsLetter";
import Footer from "./Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Banner />
        <Howit />
        <Property />
        <Feature />
        <Cities />
        <FProperty />
        <Counter />
        <MProperty />
        <Testimonial />
        <Price />
        <Faq />
        <Agent />
        <Blog />
        <NewsLetter />
        <Footer />
      </div>

      <Progress />
    </>
  );
}

export default App;
