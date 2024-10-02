import React,{useState} from "react";
import "./Nav.css"

function Nav({ scrollToSection, teamSectionRef, activitiesSectionRef, homeSectionRef, reachUsSectionRef })
{
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return(
        <nav className="navbar">
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div ></div>
            <ul className={`navbar-links ${isMenuOpen ? "open":""}`}>
                <li><a href="#" onClick={()=> scrollToSection(homeSectionRef)}>Home</a></li>
                <li><a href="#" onClick={()=>scrollToSection(teamSectionRef)}>Our Team</a></li>
                <li><a href="#" onClick={()=>scrollToSection(activitiesSectionRef)}>Activities</a></li>
                <li><a href="https://electrovert24.vercel.app/">Electrovert</a></li>
                <li><a href="#" onClick={()=>scrollToSection(reachUsSectionRef)}>Reach us</a></li>
            </ul>
        </nav>
    )
}
export default Nav;
// import React,{useState} from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// function Nav({ scrollToSection, teamSectionRef, activitiesSectionRef, homeSectionRef, reachUsSectionRef }) {
//     const [isMenuOpen, setMenuOpen] = useState(false);
//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="menu-toggle" onClick={toggleMenu}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//             <div></div>
//             <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
//                 <li><Link to="/" onClick={() => scrollToSection(homeSectionRef)}>Home</Link></li>
//                 <li><Link to="/" onClick={() => scrollToSection(teamSectionRef)}>Our Team</Link></li>
//                 <li><Link to="/" onClick={() => scrollToSection(activitiesSectionRef)}>Activities</Link></li>
//                 <li><Link to="/electrovert">Electrovert</Link></li>
//                 <li><Link to="/" onClick={() => scrollToSection(reachUsSectionRef)}>Reach us</Link></li>
//             </ul>
//         </nav>
//     );
// }
// export default Nav;
