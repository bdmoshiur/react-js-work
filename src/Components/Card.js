import React from 'react';

const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function Card( props ) {
    return (
        <div className='card'>
            <h1 className='cardTitle'>{props.titleText}</h1>
            <p className='cardDoc'>{ props.titleDoc}</p>
            <p className='cardFooter'>{currentDate + " /" + currentMonth + " /" + currentYear}</p>
        </div>
    );
}

export default Card;


