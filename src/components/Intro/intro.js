import React from "react";
import './intro.css'; 
import collagecoffee from "../../assets/collage.png";
import collageMob from "../../assets/collage2.png";

const Intro = () => {
    return (
        <section id="home">
            <div className="Home">
                <span className="Title">Brewful Bliss Cáfe</span>
                <span className="subtitle">~JUST BREWED HAPPINESS IN A CUP~</span>
            </div>
            <div className="main">
                <img src={collagecoffee} alt="collagecoffee" className="collagecoffee" />
                <img src={collageMob} alt="collageMob" className="collage2" />
            </div>
        </section>
    );
}

export default Intro;