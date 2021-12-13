import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    });
    
    return (
        <div className="Footer">
            <h1 data-aos="fade-up" className="footer-title">
                Shrey Gupta
            </h1>
            <div className="footer-links">
                <a href="https://linkedin.com" className="footer-link">Linkedin</a>
                <a href="https://linkedin.com" className="footer-link">Instagram</a>
            </div>
        </div>
    );
}
 
export default Footer;