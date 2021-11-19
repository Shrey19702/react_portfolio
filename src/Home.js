import { Fragment } from "react";
import Navbar from './components/Navbar';
import HeroPage from './components/Hero';
import Projects from './components/Projects';

const Home = () => {
    const heroTitle = "Nice to see you.";
    const heroClass = "hero-page-home";
    const heroIntro = true;
    
    return ( 
        <Fragment>
            <div className="main-page-home">
                <Navbar/>
                <HeroPage heroTitle={heroTitle} heroClass={heroClass} heroIntro={heroIntro}/>
            </div>
            <Projects/>
        </Fragment>
    );
}
 
export default Home;