import React from 'react'
import Card from "../Card";

import shimla from '../Shimla';

function createCard(shimla) {
    return (
        <Card
            key = {shimla.id}
            name = {shimla.name}
            imgURL = {shimla.imgURL}
            path={shimla.path}
            
        />

    )
}

function Shimla() {
    return (
        <>
            <div>{shimla.map(createCard)}</div>
        </>
    );
}


export default Shimla