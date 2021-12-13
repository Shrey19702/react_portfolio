import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const WhoPara = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    });
    return (
        <div className="who-am-i">
            <h1 data-aos="fade-right">Who am i?</h1>
            <p>I am an engineering student at Delhi Technological University studying Full Stack Web Development and User Experience Design. I am currently living in New Delhi, India. In my time at DTU , I’ve been lucky to be exposed to a multidisciplinary system giving me a chance to explore many fields of study; having these experiences has enriched my practice as a full stack developer and designer. Developing both  websites and designing has always been exciting to me because I’m constantly learning new things and finding different perspectives of things.</p>
        </div>
     );
}
 
export default WhoPara;