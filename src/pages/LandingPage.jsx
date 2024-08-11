import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import ContactUsPage from "./ContactUsPage";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Experience from "./Experience";
import Projects from "./Projects";
const LandingPage = () => {
    return (
        <div className="bg-black text-white absolute w-full">
            <Navbar />
            <Home />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <ContactUsPage />
            <Footer />
        </div>
    )
}
export default LandingPage