import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import HeroBootcamp from "../../Components/BootCamp/Hero/Hero";
import AboutBootcamp from "../../Components/BootCamp/About/About";
import BenefitBootcamp from "../../Components/BootCamp/Benefits/Benefit";
import Pricing from "../../Components/BootCamp/Pricing/pricing";
import Footer from "../../Components/Landingpage/Footer/footer";
import FaqBootcamp from "../../Components/BootCamp/FAQ/faq";
import Attend from "../../Components/BootCamp/Attend/attend";
import Tutors from "../../Components/BootCamp/Tutors/tutors";
import "../../pages/Bootcamp/Style/boot.css"



const BootCamp = () => {
  return (
    <>
      <Navbar /> 
      <HeroBootcamp />
      <AboutBootcamp />
      <BenefitBootcamp />
     <div className="background">
     <Pricing />
      <Attend />
     </div>
      <Tutors/>
      <FaqBootcamp />
      <Footer />
    </>
  );
};

export default BootCamp;
