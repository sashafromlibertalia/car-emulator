import {useState} from "react";

const StartStop = (clickState, value) => {
    console.log(value)
    return (
        <div id="start-container" onClick={clickState} className={value ? "launched" : ""}>
            <span></span>
        </div>
    );
}

export default StartStop