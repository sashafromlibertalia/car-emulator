import React, {useContext, useEffect} from "react"
import {ManagerContext} from "../context/ManagerContext"
import {GearContext} from "../context/GearContext"
import {config} from "../config"
import Pressure from "pressure"

const Tachometer = () => {
    const {isLaunched, setLaunch} = useContext(ManagerContext)
    const {tachValue, setTachValue} = useContext(GearContext)
    const {force, setForce} = useContext(GearContext)

    const calculateTachValue = () => {
        if (isLaunched) {
            setTachValue(Math.floor(force * config.PEDAL * 100))
        } else {
            setTachValue(1000)
        }
    }

    useEffect(() => {
        if (isLaunched) {
            setTimeout(() => {
                setTachValue(1000)
            }, 2000)
        }
        calculateTachValue()
    })

    return (
        <div className="tool-container">
            <div className="tool-wrapper">
                <div id="hider" className="center"/>
                <div className="container-for-stuff center">
                    <div id="container-for-tachometer" className="center"/>
                    <div className="center" id="off-line"/>
                    <div id="container-for-yellow-zone" className="center"/>
                    <div id="container-for-red-zone" className="center"/>
                    <div id="t-values" className="center">
                        <div className="arrow-container">
                            <span className="arrow-wrapper">
                                <span className="circle"
                                      className={`${isLaunched ? "circle launch-act-tach" : "circle"}`}>
                                    <span className="arrow"/>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="center" id="numbers">
                        <div className="num-t center">OFF</div>
                        <div className="num-t center">1</div>
                        <div className="num-t center">2</div>
                        <div className="num-t center">3</div>
                        <div className="num-t center">4</div>
                        <div className="num-t center">5</div>
                        <div className="num-t center">6</div>
                        <div className="num-t center">7</div>
                        <div className="num-t center">8</div>
                        <div className="num-t center">9</div>
                    </div>
                </div>
                <div className="tool-subtitle">
                    <h1 className={"tool-title"}>{tachValue}</h1>
                    <h4>Тахометр, 1000 об/мин</h4>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Tachometer)