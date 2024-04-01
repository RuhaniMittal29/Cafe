import React from "react";
import './about.css';
import heart from "../../assets/heart.png";


const About = () => {
    return (
        <section id="about">
            <div className="aboutCoffee">
                <span className="aboutUs">About Us</span>
                <img src={heart} alt="heart" className="heart"/>
                <span className="cafe">Welcome to the Brewful Bliss Cáfe! where every cup tells a story and every sip is a journey into the world of rich, aromatic coffees. Here, we're passionate
                 about bringing you the finest beans from around the globe, expertly roasted to perfection. Whether you crave the bold intensity of a dark 
                 roast or the smooth subtleties of a light blend, our diverse selection caters to every coffee lover's palate. Our commitment to quality extends beyond 
                 the beans; it's about creating a warm and inviting space where you can savor your favorite brew. Join us in this caffeinated adventure, where each cup is crafted with love and 
                 dedication, ensuring that every moment with Beanful Delights is a delightful experience in itself.</span>
            </div>
        </section>
    );
}

export default About;