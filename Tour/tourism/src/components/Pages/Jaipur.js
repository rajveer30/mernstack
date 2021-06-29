import React from "react"
import Card from "../Card";

import jaipur from '../jaipur';

function createCard(jaipur) {
    return (
        <Card
            key = {jaipur.id}
            name = {jaipur.name}
            imgURL = {jaipur.imgURL}
            path={jaipur.path}
            
        />

    )
}

function Jaipur() {
    return (
        <>
            <div>{jaipur.map(createCard)}</div>
        </>
    );
}


export default Jaipur
