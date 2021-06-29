import React from 'react'
import Card from "../Card";

import udaipur from '../Udaipur';


function createCard(udaipur) {
    return (
        <Card
            key = {udaipur.id}
            name = {udaipur.name}
            imgURL = {udaipur.imgURL}
            path={udaipur.path}
            
        />

    )
}

function Udaipur() {
    return (
        <>
            <div>{udaipur.map(createCard)}</div>
        </>
    );
}


export default Udaipur