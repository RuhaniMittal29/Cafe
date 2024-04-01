import React from "react";
import Contact from "../Coffee/contact.js";
import './dessert.css';

const Dessert = () => {
    return (
        <section id="dessert">
            <div className="DESSERTS">
            </div>
            <div className="title1">
                <span className="topic">Dessert</span>
                <p className="popular">Frosting & Sprinkles – Adding joy to every bite!</p>
            <Contact
                img="./brownie1.png"
                name="Chocolate Brownie"
                price="$6.75"/>
                <Contact
                img="./tiramisu.png"
                name="Tiramisu"
                price="$5.75"/>
                <Contact
                img="./strawberry.png"
                name="Strawberry Cake"
                price="$6.25"/>
                <Contact
                img="./Cheesecake.png"
                name="Cheesecake"
                price="$6.50"/>
            </div>
         </section>
    );
}

export default Dessert;