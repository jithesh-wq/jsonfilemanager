import React from 'react';
import "./Card.css"
const Card = (props) => {
    return (
        <div className="dataCard">
            <p className="customerData">Id : {props.id}</p>
            <p className="customerData">Email : {props.email}</p>
            <p className="customerData">First : {props.first}</p>
            <p className="customerData">Last : {props.last}</p>
            <p className="customerData">Company : {props.company}</p>
            <p className="customerData">Country : {props.country}</p>
        </div>
    );
}

export default Card;
