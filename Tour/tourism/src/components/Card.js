import React,{useState} from "react";
import "./Card.css";
import {Link} from "react-router-dom"

    function Card(props) {
        
      console.log(props)    
    return (
        <div className="card">
           <Link  to={props.path}>
            <figure className="cards__item__pic-wrap" data-category={props.name}>
            <img className="image" src = {props.imgURL} alt=""/>
            </figure>
            </Link>
       
        
        </div> 
       
  
        
    );
 }

 export default Card;