import {useRef, useEffect, useState, useCallback} from "react";
import ChiefsList from "./ChiefsList";
import Chiefs from "./Chiefs";
import Slider from "react-slick";
import Buttons from "./Button";
import JointsList from "./JointsList";
import MentorsList from "./MentorsList";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import "./Activities.css"
import Activities from "./Activities";
import Home from "./Homepage/Home";
import "./App.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function createChief(list){
    return <Chiefs
        name = {list.name}
        post = {list.post}
        image = {list.image}
    />
}

function App(){
    const sliderRef = useRef(null);
    const [activeList, setActiveList] = useState("Chiefs");
    const teamSectionRef = useRef(null);
    const activitiesSectionRef = useRef(null);
    const homeSectionRef = useRef(null);
    const reachUsSectionRef = useRef(null);


    const getCurrentList =useCallback(() => {
      if (activeList === "Chiefs") 
        return ChiefsList;
      if (activeList === "Mentors") 
        return MentorsList;
      if (activeList === "Joints") 
        return JointsList;
      return ChiefsList;
    },[activeList]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        centerMode : true,
        centerPadding : "60px",
        slidesToShow : 3,
        speed: 400,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide : 0,
        responsive: [
          {
            breakpoint: 1024, // Adjust for tablets
            settings: {
              slidesToShow: 2,
              centerPadding: "40px",
            },
          },
          {
            breakpoint: 768, // Adjust for mobile
            settings: {
              slidesToShow: 1, // Show 1 slide on mobile
              centerPadding: "30px",
              infinite: true,
            },
          },
          {
            breakpoint: 480, // For smaller phones
            settings: {
              slidesToShow: 1, // Show 1 slide on smaller devices as well
              centerPadding: "20px",
            },
          },
        ],
      };

      useEffect(() => {
        const handleWheel = (e) => {
          e.preventDefault(); 
          e.stopPropagation();
          if (e.deltaY > 0) {
            sliderRef.current.slickNext();
          } else {
            sliderRef.current.slickPrev();
          }
        };
    
        const sliderElement = document.querySelector(".slick-slider");
    
        sliderElement?.removeEventListener("wheel", handleWheel);
    
        sliderElement?.addEventListener("wheel", handleWheel);

        return () => {
          sliderElement?.removeEventListener("wheel", handleWheel);
        };
      }, [activeList]);
    
      const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };
      
    return (
      <div>
        <Nav
          scrollToSection={scrollToSection}
          teamSectionRef={teamSectionRef}
          activitiesSectionRef={activitiesSectionRef}
          homeSectionRef={homeSectionRef}
          reachUsSectionRef={reachUsSectionRef}
        ></Nav>
        <div className="container" ref={homeSectionRef} style={{background:'radial-gradient(ellipse at center, #0C1C26 0%, #050A13 100%);'}}>
          <Home></Home>
        </div>
        <section className="sect1" ref={teamSectionRef} style={{paddingTop:'50px'}}> 
          <h2 style={{color:'white'}}>Our Team</h2>
          <div className="btn">
            <Buttons name="Mentors"onClick={()=> setActiveList("Mentors")}></Buttons>
            <Buttons name="Chiefs" onClick={()=> setActiveList("Chiefs")}></Buttons>
            <Buttons name="Joints" onClick={()=> setActiveList("Joints")}></Buttons>
          </div>
          <div>
              <Slider key={activeList} ref={sliderRef}{...sliderSettings}>
                  {getCurrentList().map(createChief)}   
              </Slider>
          </div>
        </section> 
        <section className="sect2" ref={activitiesSectionRef} style={{paddingTop:'50px'}}>
          <h2 className='act' style={{color:'white'}}>Activities</h2>
          <div className="activities-section" style={{fontFamily:'Salsa'}}>
            {Activities.map((activity, index) => (
              <div key={index} className={`activity-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                <div className={ index==3 ? `activity-meraki`:(index == 1 ? `activity-teachers` :  `activity-image`)}>
                  <img src={activity.imageUrl} alt={activity.title} />
                </div>
                <div className="activity-text">
                  <h2>{activity.title}</h2>
                  <p>{activity.description}</p>
                  <button onClick={()=>window.open(activity.gdrive)}>Glimpses</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section ref={reachUsSectionRef}>
          <Footer></Footer>
        </section>
      </div>
        
    )
}

export default App;
// import React, { useRef, useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ChiefsList from "./ChiefsList";
// import Chiefs from "./Chiefs";
// import Slider from "react-slick";
// import Buttons from "./Button";
// import JointsList from "./JointsList";
// import MentorsList from "./MentorsList";
// import Footer from "./Footer/Footer";
// import Nav from "./Nav/Nav";
// import Activities from "./Activities";
// import Home from "./Homepage/Home";
// // import Electrovert from "./Electrovert"; // Import your Electrovert component
// import Electrovert from "./Electrovert";
// import "./Activities.css";
// import "./App.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Define your createChief function and other logic...
// function createChief(list){
//   return <Chiefs
//       name = {list.name}
//       post = {list.post}
//   />
// }

// function App() {
//     // Define refs and state as before...
//     const sliderRef = useRef(null);
//     const [activeList, setActiveList] = useState("Chiefs");

//     const teamSectionRef = useRef(null);
//     const activitiesSectionRef = useRef(null);
//     const homeSectionRef = useRef(null);
//     const reachUsSectionRef = useRef(null);


//     const getCurrentList = () => {
//       if (activeList === "Chiefs") 
//         return ChiefsList;
//       if (activeList === "Mentors") 
//         return MentorsList;
//       if (activeList === "Joints") 
//         return JointsList;
//       return ChiefsList;
//     };

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         centerMode : true,
//         centerPadding : "60px",
//         slidesToShow : 3,
//         speed: 400,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         initialSlide : 0,
//       };

//       useEffect(() => {
//         const handleWheel = (e) => {
//           e.preventDefault(); 
//           e.stopPropagation();
//           if (e.deltaY > 0) {
//             sliderRef.current.slickNext();
//           } else {
//             sliderRef.current.slickPrev();
//           }
//         };
    
//         const sliderElement = document.querySelector(".slick-slider");
    
//         sliderElement?.removeEventListener("wheel", handleWheel);
    
//         sliderElement?.addEventListener("wheel", handleWheel);

//         return () => {
//           sliderElement?.removeEventListener("wheel", handleWheel);
//         };
//       }, [activeList]);
    
//       const scrollToSection = (sectionRef) => {
//         sectionRef.current.scrollIntoView({ behavior: "smooth" });
//     };
//     return (
//         <Router>
//             <Nav
//                 scrollToSection={scrollToSection}
//                 teamSectionRef={teamSectionRef}
//                 activitiesSectionRef={activitiesSectionRef}
//                 homeSectionRef={homeSectionRef}
//                 reachUsSectionRef={reachUsSectionRef}
//             />
//             <Routes>
//                 <Route path="/" element={
//                     <div>
//                         <div className="container" ref={homeSectionRef}>
//                             <Home />
//                         </div>
//                         <section className="sect1" ref={teamSectionRef} style={{ paddingTop: '50px' }}>
//                             <h2 style={{ color: 'white' }}>Our Team</h2>
//                             <div className="btn">
//                                 <Buttons name="Mentors" onClick={() => setActiveList("Mentors")} />
//                                 <Buttons name="Chiefs" onClick={() => setActiveList("Chiefs")} />
//                                 <Buttons name="Joints" onClick={() => setActiveList("Joints")} />
//                             </div>
//                             <div>
//                                 <Slider key={activeList} ref={sliderRef} {...sliderSettings}>
//                                     {getCurrentList().map(createChief)}
//                                 </Slider>
//                             </div>
//                         </section>
//                         <section className="sect2" ref={activitiesSectionRef} style={{ paddingTop: '50px' }}>
//                             <h2 className='act' style={{ color: 'white' }}>Activities</h2>
//                             <div className="activities-section" style={{ fontFamily: 'Salsa' }}>
//                                 {Activities.map((activity, index) => (
//                                     <div key={index} className={`activity-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
//                                         <div className={index === 3 ? `activity-meraki` : (index === 1 ? `activity-teachers` : `activity-image`)}>
//                                             <img src={activity.imageUrl} alt={activity.title} />
//                                         </div>
//                                         <div className="activity-text">
//                                             <h2>{activity.title}</h2>
//                                             <p>{activity.description}</p>
//                                             <button onClick={() => window.open(activity.gdrive)}>Glimpses</button>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>
//                         <section ref={reachUsSectionRef}>
//                             <Footer />
//                         </section>
//                     </div>
//                 } />
//                 <Route path="/electrovert" element={<Electrovert />} /> {/* Route to Electrovert */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;
