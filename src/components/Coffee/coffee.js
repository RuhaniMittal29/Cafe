import React from "react";
import Contact from "./contact";
import './coffee.css';

const Coffee = () => {
    return (
        <section id="coffee">
            <div className="COFFEE">
            </div>
            <div className="title1">
                <span className="topic">Coffee</span>
                <p className="popular">Espresso & Non Espresso - Makes everything possible!</p>
                <Contact
                img="./latte.png"
                name="Cáfe Latte"
                price="$4.25"/>
                <Contact
                img="./caramel.png"
                name="Caramel Macchiato"
                price="$4.75"/>
                <Contact
                img="./blackcoffee.png"
                name="Coffee (Americano)"
                price="$3.75"/>
                <Contact
                img="./matcha.png"
                name="Matcha Latte"
                price="$4.50"/>
            </div>
         </section>
    );
}

export default Coffee;