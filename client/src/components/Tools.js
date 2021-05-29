import React, {useContext} from "react";
import Gear from "./Gear"
import Pedals from "./Pedals";
import {ManagerContext} from "../context/ManagerContext";

const Tools = () => {
    const {isLaunched, setLaunch} = useContext(ManagerContext)
    const {press, setPress} = useContext(ManagerContext)

    const toggleClass = () => {
        if (press === "N") {
            setLaunch(isLaunched ? false : true);
        } else if (isLaunched) {
            alert("Зажигание уже включено")
        }
        else {
            alert("Выжмите сцепление")
        }
    }

    return (
        <div id="tools-container">
            <div id="tools">
                {/*Руль и система старт-стоп*/}
                <div className="row row-cols-2 justify-content-center">
                    <span id="wheel"/>
                    <div id="start-container" onClick={toggleClass}>
                        <span/>
                    </div>
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
                        <h1>{press === "" ? "N" : press}</h1>
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