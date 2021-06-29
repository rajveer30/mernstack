import React from 'react'
import Card from "../Card";

import jodhpur from '../jodhpur';

function createCard(jodhpur) {
    return (
        <Card
            key = {jodhpur.id}
            name = {jodhpur.name}
            imgURL = {jodhpur.imgURL}
            path={jodhpur.path}
            
        />

    )
}

function Jodhpur() {
    return (
        <>
            <div>{jodhpur.map(createCard)}</div>
        </>
    );
}


export default Jodhpur
