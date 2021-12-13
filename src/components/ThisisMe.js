import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ThisisMe = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    });

    return ( 
        <div className="This-is-me">
            <div className="this-is-me-text-box">
                <h4 data-aos="fade-down">This is me</h4>
                <p  data-aos="fade-up">I'm a Web Developer and UX designer focused on creating a more connected, easier to use world</p>
            </div>
        </div>
    );
}
 
export default ThisisMe;