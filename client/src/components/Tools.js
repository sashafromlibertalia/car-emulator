import React, {useContext, useEffect, useState} from "react";
import Gear from "./Gear"
import Pedals from "./Pedals";
import {ManagerContext} from "../context/ManagerContext";
import {GearContext} from "../context/GearContext"

const Tools = React.memo(() => {
    const {isLaunched, setLaunch} = useContext(ManagerContext)
    const {clutch} = useContext(GearContext)
    const {gears} = useContext(GearContext)

    const toggleClass = () => {
        if (clutch) {
            setLaunch(!isLaunched);
        } else if (isLaunched) {
            alert("Зажигание уже включено")
        } else {
            alert("Выжмите сцепление")
        }
    }

    const getCenter = (element) => {
        const {left, top, width, height} = element.getBoundingClientRect()
        let x = Math.abs(left + width / 2) > Math.PI ? Math.PI : left + width / 2
        let y = Math.abs(top + height / 2) > Math.PI ? Math.PI : top + height / 2
        return {
            x: left + width / 2,
            y: top + height / 2
        }
    }

    useEffect(() => {
        const arrow = document.querySelector("#wheel");
        const arrowCenter = getCenter(arrow);
        arrow.onmousemove = ({clientX, clientY}) => {
            const angle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
            arrow.style.transform = `rotate(${angle}rad)`;
        }
    })

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
                        <h1>{gears === "" || clutch ? "N" : gears}</h1>
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
})

export default Tools