import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import {Link} from "react-router-dom"
import "./Toxml.css"
const Toxml = () => {
    const [xmlData, setXmlData] = useState("");
    useEffect(() => {
        const getXmlData=()=>{
            fetch('http://localhost:8080/api/customers/toxml',{
                headers:{"Content-Type":"application/xml"}
            })
            .then(response => response.text())
             .then(xmlString => setXmlData(xmlString))
            .catch(err=>console.log(err))
           
        }
        getXmlData()
    }, []);
    console.log(xmlData)





    
    return (
        <div>
             <div className="section1">
                <Logo/>
                <div className="functionContainer">
                    <div className="buttons">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button name="View"/>
                        </Link>
                        <Link to="/add" style={{ textDecoration: 'none' }}>
                            <Button name="Add"/>
                        </Link>
                        <Link to="/edit" style={{ textDecoration: 'none' }}>
                            <Button name="Edit"/>
                        </Link>
                        <Link to="/xml" style={{ textDecoration: 'none' }}>
                            <Button name="To xml"/>
                        </Link>
                        <Link to="/yaml" style={{ textDecoration: 'none' }}>
                            <Button name="To yaml"/>
                        </Link>
                        <Link to="/delete" style={{ textDecoration: 'none' }}>
                            <Button name="Delete"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="dataContainer">
               <code>
                  {xmlData}
               </code>    
                </div>
            </div>
            
        </div>
    );
}

export default Toxml;
