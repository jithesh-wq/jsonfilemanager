import React, { useState } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import {Link} from "react-router-dom"
import "./DeleteFile.css"
import SearchBox from '../components/SearchBox';
const DeleteFile = () => {
    const [delStatus, setDelStatus] = useState(0);
    const delFile=(fileName)=>{
        fetch("http://localhost:8080/api/delete/"+fileName,{method:"POST" })
        .then(res=>{return res.text()})
        .then(data=>setDelStatus(data))
        .catch(err=>{console.log(err)})
    }
    console.log(delStatus)
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
            <div className="sectionDelete">
                <div className="deleteFileContainer">
                        <SearchBox buttonName="Delete" placeholder="Enter Filename" sentId={(fileName)=>delFile(fileName)}  />
                        <p className="message">{delStatus?delStatus:"Enter Filename to Delete eg:customer.xml"}</p>
                </div>
            </div>
        </div>
    );
}

export default DeleteFile;
