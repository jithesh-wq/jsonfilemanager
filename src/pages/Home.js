import React, { useEffect, useState } from 'react';
import "./Home.css"
import Button from '../components/Button';
import Logo from '../components/Logo';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';
// import Data from "./sampledata.json"
import PageNumber from '../components/PageNumber';
import {Link} from "react-router-dom"
const Home = () => {
    const [searchId, setSearchId] = useState();
    const [allData, setAllData] = useState([]);
    const [data, setData] = useState([]);
    const [pages, setPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);
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
        const getData=(page)=>{
            fetch("http://localhost:8080/api/customers/page/"+currentPage)
            .then(res =>res.json())
            .then(data=>{
                setData(data)
                console.log("length  :"+data.length)
            })
            .catch((err)=>console.log(err)) 
        }
       getData(currentPage) 
       getAllData()
    }, [currentPage]);
console.log(currentPage)
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
                    <SearchBox className="searchbarContainer" buttonName="Search" placeholder="Search By id" sentId={(id)=>{setSearchId(id)}}/>
                </div>
            </div>
            <div className="section2">
                <div className="dataContainer">
                {(searchId?allData:data).map((item,index)=>{
                    if (searchId){
                        if (String(item.id)===String(searchId)){
                            return <Card key={index} id={item.id} email={item.email} first={item.first} last={item.last} company={item.company} country={item.country}/>
                        }
                    }else{
                        return <Card key={index} id={item.id} email={item.email} first={item.first} last={item.last} company={item.company} country={item.country}/>
                    }

                })}
                   
                </div>
            </div>
            <div className="section3">
                  <p className="currentPage">Page {currentPage} of {Math.ceil(allData.length/20)}</p>
                <div className="pageNumbers">
                    {Array(Math.ceil(allData.length/20)).fill(0).map((_,index)=>{
                         return <PageNumber currentPage={(pageno)=>{
                             setCurrentPage(pageno)
                             setSearchId("")
                            }} pageNumber={index+1}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
