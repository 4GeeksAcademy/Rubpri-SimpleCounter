//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function SecondsCounter(props) {
    
    return (
    
    <div className ="counter">
        <div className="imgclock">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
        </div>
        <div className="six">{props.six % 10}</div>
        <div className="five">{props.five % 10}</div>
        <div className="four">{props.four % 10}</div>
        <div className="three">{props.three % 10}</div>
        <div className="two">{props.two % 10}</div>
        <div className="one">{props.one % 10}</div>
    </div>

    )
}

let counter = 0;

setInterval(function(){

    const sixNum = Math.floor(counter/10000);
    const fiveNum = Math.floor(counter/10000);
    const fourNum = Math.floor(counter/1000);
    const threeNum = Math.floor(counter/100);
    const twoNum = Math.floor(counter/10);
    const oneNum = Math.floor(counter/1);
    counter++;

    //render your react application
    ReactDOM.render(
    <SecondsCounter one={oneNum} two={twoNum} three={threeNum} four={fourNum} five={fiveNum} six={sixNum} />, 
    document.querySelector("#app")
    );

},1000
);



