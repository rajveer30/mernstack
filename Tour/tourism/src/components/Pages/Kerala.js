import React from 'react'
import Card from "../Card";
import kerala from '../kerala';

function createCard(kerala) {
    return (
        <Card
            key = {kerala.id}
            name = {kerala.name}
            imgURL = {kerala.imgURL}
            path = {kerala.path}
        />


    )
}

function Kerala() {
    return (
        <>
            <div>{kerala.map(createCard)}</div>
        </>
    );
}


export default Kerala
