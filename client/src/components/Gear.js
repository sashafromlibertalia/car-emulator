import React, {useContext} from 'react'
import {ManagerContext} from "../context/ManagerContext";

const Gear = () => {
    const {press, setPress} = useContext(ManagerContext)

    return (
        <div id="gear-container" className="col">
            <div id="gear-wrapper" className="container">
                <div className="row" id="first-gears">
                    <div className={`col ${press === "R" ? "selected" : ""}`}>
                        R
                        <span/>
                    </div>
                    <div className={`col ${press === "1" ? "selected" : ""}`}>
                        1
                        <span className={`${press === "1" ? "selected" : ""}`}/>
                    </div>
                    <div className={`col ${press === "3" ? "selected" : ""}`}>
                        3
                        <span/>
                    </div>
                    <div className={`col ${press === "5" ? "selected" : ""}`}>
                        5
                        <span/>
                    </div>
                </div>
                <div className="row" id="neutral">
                    <div className={`col ${["N", "P"].indexOf(press) >= 0 ? "selected" : ""}`}>
                        <span/>
                    </div>
                </div>
                <div className="row justify-content-end" id="last-gears">
                    <div className="col"/>
                    <div className={`col ${press === "2" ? "selected" : ""}`}>
                        <span/>
                        2
                    </div>
                    <div className={`col ${press === "4" ? "selected" : ""}`}>
                        <span/>
                        4
                    </div>
                    <div className={`col ${press === "6" ? "selected" : ""}`}>
                        <span/>
                        6
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gear