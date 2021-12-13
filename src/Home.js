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
            <Projects className={"movies-app"} 
                text1= {'01'}
                text2={'Movie App'}
                text3={'A Web App to search for your favorite movies'}
                text4={'https://movie-app-react-js.herokuapp.com/'}
            />
            <Projects className={"task-tracker"}
                text1={'02'}
                text2={'Task Tracker'}
                text3={'A web App to track your task to be done'}
                text4={'https://shrey19702.github.io/Task-Tracker-react-app/'}
            />
        </Fragment>
    );
}
 
export default Home;