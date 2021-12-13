import { useState, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const ContactForm = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')    

    useEffect(()=>{
        Aos.init({duration: 1000});
    });

    return (  
        <div className="contact-form-box">
            <h1 data-aos="fade-right" className="contact-form-heading" >Get in touch.</h1>
            <form className="contact-form">
                <input
                    className="form-input"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name} 
                    onChange={(e)=>setname(e.target.value)}
                />
                <input
                    className="form-input"
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email} 
                    onChange={(e)=>setemail(e.target.value)}
                />
                <textarea
                    className="form-input"
                    required
                    placeholder="Message"
                    value={message}
                    onChange={(e)=>setmessage(e.target.value)}
                ></textarea>
                
                <input className="contact-submit-button" type="button" value="Submit" /> 
                
            </form>
        </div>
    );
}
 
export default ContactForm;