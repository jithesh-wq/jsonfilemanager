import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import {Link} from "react-router-dom"
import "./Toyaml.css"
const Toyaml = () => {
    const [yamlData, setYamlData] = useState("");
    useEffect(() => {
        const getyamlData=()=>{
            fetch('http://localhost:8080/api/customers/toyaml',{
                headers:{"Content-Type":"application/yaml"}
            })
            .then(response => response.text())
             .then(yamlString => setYamlData(yamlString))
            .catch(err=>console.log(err))
         
        }
        getyamlData()
    }, []);
    console.log(yamlData);
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
                <div className="dataContaineryaml">
                <pre class='brush: yaml;'>
                    {yamlData}
                </pre>
                   
                </div>
            </div>
        </div>
    );
}

export default Toyaml;
