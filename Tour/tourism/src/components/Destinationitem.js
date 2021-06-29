import React,{useState,useEffect} from "react";
import Card from "./Card";
import Destinations from "./Destinations";
import "./Destinationitem.css"
import axios from "./axios";



function Destinationitem() {
    const [Destinations,setDestinations]=useState([])

    useEffect(() => {
        async function fetchData() {
          const req = await axios.get("/destinations");
    
          setDestinations(req.data);
        }
    
        fetchData();
      }, []);
    
    return (
        <>
        <div className="Destinationitem"> {Destinations.map((dest) => (
 <Card
 key = {dest.id}
 name = {dest.name}
 imgURL = {dest.imgURL}
 path = {dest.path}

 
/>
        ))}</div>
       
            {/* <div class = "Destinationitem">{Destinations.map(createCard)}</div> */}
        </>
    );
}

export default Destinationitem;