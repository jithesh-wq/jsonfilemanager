import React from 'react';
import "./Button.css"

const Button=(props)=> {
    return (
        <div className="button">
            <p>{props.name}</p>
        </div>
    );
}

export default Button;