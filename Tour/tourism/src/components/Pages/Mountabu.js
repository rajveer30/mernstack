import React from "react"
import Card from "../Card";

import mountabu from '../Mountabu';


function createCard(mountabu) {
    return (
        <Card
            key = {mountabu.id}
            name = {mountabu.name}
            imgURL = {mountabu.imgURL}
            path= {mountabu.path}
            
        />

    )
}

function Mountabu() {
    return (
        <>
            <div>{mountabu.map(createCard)}</div>
        </>
    );
}


export default Mountabu
