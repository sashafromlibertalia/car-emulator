import React, { useState } from "react";
import StartStop from "./StartStop";
import Gear from "./Gear"
import Pedals from "./Pedals";

const Tools = (clickState, value) => {
    return (
        <div id="tools-container">
            <div id="tools">
                {/*Руль и система старт-стоп*/}
                <div className="row row-cols-2 justify-content-center">
                    <span id="wheel"/>
                    <StartStop clickState ={clickState} value ={value}/>
                </div>
                {/*Педали и коробка*/}
                <div className="row row-cols-2 justify-content-center mt-5">
                    <Pedals/>
                    <Gear/>
                </div>
            </div>
            <div className="container gy-5" id="current-fuel">
                <div className="row">
                    <div className="col-7">
                        <h1>N</h1>
                        <h4>Текущая передача</h4>
                    </div>
                    <div className="col-3">
                        <h1>100%</h1>
                        <h4>Запас топлива</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools