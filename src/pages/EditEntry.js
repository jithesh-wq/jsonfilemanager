import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import {Link} from "react-router-dom"
import SearchBox from '../components/SearchBox';

import "./EditEntry.css"
const EditEntry = () => {
    const [searchId, setSearchId] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [email, setEmail] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [allData, setAllData] = useState([]);
   
    useEffect(() => {
        const getAllData=()=>{
            fetch('http://localhost:8080/api/customers')
            .then(res =>res.json())
            .then(data=>{
                setAllData(data)
                console.log("length  :"+data.length)
            })
            .catch((err)=>console.log(err))
        }
       getAllData()
    }, []);


    const getRecord=(id)=>{
        setSearchId(id)
        allData.forEach((item,index)=>{
            if (String(item.id)==String(searchId)){
                setEmail(item.email)
                setFirst(item.first)
                setLast(item.last)
                setCompany(item.company)
                setCountry(item.country)
            }
            else{
               console.log("noData")
            }
        })
    }
    const modifyData=()=>{
        fetch("http://localhost:8080/api/customers/"+searchId,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:email,
            first:first,
            last:last,
            company:company,
            country:country
        })
        })
        .then(res=>{return res.json()})
        .then(data=>{console.log(data)})
        .catch(err=>{console.log(err)})
    }
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
                    <SearchBox className="searchbarContainer" sentId={(id)=>getRecord(id)}/>

                </div>
                <div className="section2">
                    <div className="formContainer">
                        <form className="modifyForm" onSubmit={modifyData} >
                            <label for="Email" >Email</label>
                            <input id="Email" className="dataInput" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                            <label for="First Name" >First Name</label>
                            <input id="First Name" className="dataInput"  type="text" value={first} onChange={(e)=>{setFirst(e.target.value)}} />
                            <label for="Last Name" >Last Name</label>
                            <input id="Last Name" className="dataInput"  type="text" value={last} onChange={(e)=>{setLast(e.target.value)}} />
                            <label for="Company" >Company</label>
                            <input id="Company" className="dataInput"  type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
                            <label for="Country" >Country</label>
                            <input id="Country" className="dataInput"  type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} />
                            <input className="saveButton" type="submit" value="Save"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEntry;
