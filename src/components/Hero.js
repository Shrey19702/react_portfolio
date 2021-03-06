import 'animate.css';

const HeroPage = ({heroTitle, heroIntro, heroClass}) => {

    return (  
        <div className={heroClass}>
            <div className="hero-content">
                <h1 className="hero-title animate__animated animate__slideInDown">{heroTitle}</h1>
                {heroIntro ? <p className="hero-intro animate__animated animate__slideInUp"> &#128075; Hi! My name is Shrey and I'm a aspiring full stack developer and user experience designer studying at DTU.</p> : null }
            </div>
        </div>
    );
}
 
export default HeroPage;