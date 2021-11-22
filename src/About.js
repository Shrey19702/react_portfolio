import { Fragment } from "react";
import Navbar from './components/Navbar';
import HeroPage from './components/Hero';
import WhoPara from "./components/WhoPara";
import ThisisMe from "./components/ThisisMe";


const About = () => {
    const heroTitle = "About.";
    const heroClass = "hero-page-about";

    return (
        <Fragment>
            <div className="main-page-about">
                <Navbar/>
                <HeroPage heroTitle={heroTitle} heroClass={heroClass}/>
            </div>
            <ThisisMe/>
            <WhoPara/>
        </Fragment>
     );
}
 
export default About;