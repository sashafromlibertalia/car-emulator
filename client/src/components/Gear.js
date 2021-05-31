import React, {useContext} from 'react'
import {GearContext} from "../context/GearContext"

const Gear = () => {
    const {clutch} = useContext(GearContext)
    const {gears} = useContext(GearContext)

    return (
        <div id="gear-container" className="col">
            <div id="gear-wrapper" className="container">
                <div className="row" id="first-gears">
                    <div className={`col ${gears === "R" ? "selected" : ""}`}>
                        R
                        <span/>
                    </div>
                    <div className={`col ${gears === "1" ? "selected" : ""}`}>
                        1
                        <span/>
                    </div>
                    <div className={`col ${gears === "3" ? "selected" : ""}`}>
                        3
                        <span/>
                    </div>
                    <div className={`col ${gears === "5" ? "selected" : ""}`}>
                        5
                        <span/>
                    </div>
                </div>
                <div className="row" id="neutral">
                    <div className={`col ${clutch ? "selected" : ""}`}>
                        <span/>
                    </div>
                </div>
                <div className="row justify-content-end" id="last-gears">
                    <div className="col"/>
                    <div className={`col ${gears === "2" ? "selected" : ""}`}>
                        <span/>
                        2
                    </div>
                    <div className={`col ${gears === "4" ? "selected" : ""}`}>
                        <span/>
                        4
                    </div>
                    <div className={`col ${gears === "6" ? "selected" : ""}`}>
                        <span/>
                        6
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Gear)