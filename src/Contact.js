import { Fragment } from "react";
import Navbar from './components/Navbar';
import HeroPage from './components/Hero';

const Contact = () => {
    const heroTitle = "Let's Chat.";
    const heroClass = "hero-page-contact";

    return (
        <Fragment>
            <div className="main-page-contact">
                <Navbar/>
                <HeroPage heroTitle={heroTitle} heroClass={heroClass}/>
            </div>
        </Fragment>
     );
}
 
export default Contact;