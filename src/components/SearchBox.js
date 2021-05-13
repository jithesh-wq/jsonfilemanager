import React, { useState } from 'react';
import "./SearchBox.css"
const SearchBox=(props)=> {
const [inputId, setInputId] = useState("");
const handleSubmit=(e)=>{
    e.preventDefault()
    props.sentId(inputId)
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input className="inputBox" placeholder={props.placeholder} type="text" value={inputId} onChange={(e)=>{setInputId(e.target.value)}} />
             <input className="searchButton" type="submit" value={props.buttonName}/>
             </form>
        </div>
    );
}

export default SearchBox;