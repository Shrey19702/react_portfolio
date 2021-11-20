import { Fragment } from "react";
import Navbar from './components/Navbar';
import HeroPage from './components/Hero';
import ContactForm from "./components/ContactForm";

const Contact = () => {
    const heroTitle = "Let's Chat.";
    const heroClass = "hero-page-contact";

    return (
        <Fragment>
            <div className="main-page-contact">
                <Navbar/>
                <HeroPage heroTitle={heroTitle} heroClass={heroClass}/>
            </div>
            <ContactForm/>
        </Fragment>
     );
}
 
export default Contact;