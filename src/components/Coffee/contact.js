import React from "react";
import './contact.css';

export default function Contact(props) {
    return (
        <section className="card">
            <div className="image--header">
                <img src={props.img} className="image"/>
            </div>
            <div className="info">
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
        </section>
    );
}