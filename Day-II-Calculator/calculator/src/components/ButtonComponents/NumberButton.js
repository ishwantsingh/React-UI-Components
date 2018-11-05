import React from 'react';
import './Button.css';

// const NumberButton = () => {
//     return (
        
//     );
// }

function NumberButton(props) {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
}

export default NumberButton;