import {useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [links, Setlinks] = useState([
        {   id: 1, content: 'home', ref: '/', type: 'norm'},
        {   id: 2, content: 'about', ref: '/about', type: 'norm'},
        {   id: 3, content: 'contact', ref: '/contact', type: 'norm'},        
    ]);

    useEffect(
        ()=>handleClick(),
        []
    );

    const handleClick = function(){
        const url = window.location.href;
        var copy_links = links.filter(
            (link)=>{
                if(url.endsWith(link.ref)){
                    link.type='high';
                }
                else{
                    link.type='norm';
                }
                return true;
            }
        );
        Setlinks(copy_links);
    }

    return ( 
        <nav className="Navbar">
            <div id={"nav-heading"}><a href="/">Shrey Gupta</a></div>
            <div className="nav-links" onClick={handleClick}>
                {
                    links.map(link => (
                        <Link to={link.ref} className={'nav-link-'+link.type} key={link.id}>
                            {link.content}
                        </Link>
                    ))
                }
            </div>
        </nav>
    );
}
export default Navbar;