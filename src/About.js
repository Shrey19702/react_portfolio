import { Fragment } from "react";
import Navbar from './components/Navbar';
import HeroPage from './components/Hero';

const About = () => {
    const heroTitle = "About.";
    const heroClass = "hero-page-about";

    return (
        <Fragment>
            <div className="main-page-about">
                <Navbar/>
                <HeroPage heroTitle={heroTitle} heroClass={heroClass}/>
            </div>
        </Fragment>
     );
}
 
export default About;