import { useState } from "react";

const Navbar = () => {
    const [links, Setlinks] = useState([
        {
            id: 1,
            content: 'home',
            ref: '/',
            type: 'high'
        },
        {
            id: 2,
            content: 'about', 
            ref: "/about",
            type: 'norm'
        },
        {
            id: 3,
            content: 'contact',
            ref: "/contact",
            type: 'norm'
        },        
    ]);



    return ( 
        <nav className="Navbar">
            <div id="nav-heading"><a href="/">Shrey Gupta</a></div>

            <div className="nav-links">
                {
                    links.map(link => (
                        <a href={link.ref} className={'nav-link-'+link.type} key={link.id}>
                            {link.content}
                        </a>
                    ))
                }
            </div>
        </nav>
    );
}
 
export default Navbar;