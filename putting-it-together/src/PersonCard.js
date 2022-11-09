import React, {useState} from 'react';

const PersonCard = (props) => {
    const[birthDay , setbirthDay]= useState(props.age);
    return(
        <div>
            <h1>{props.lastname}, {props.firstname}</h1>
            <p>Age: {birthDay}</p>
            <p>Hair Color: {props.hair}</p>
            <button onClick={ (event) => setbirthDay(birthDay + 1)}>Birthday Button for {props.firstname} {props.lastname}</button>
        </div>
    );
}
export default PersonCard;

