import React, {useContext, useEffect} from "react";
import {GearContext} from "../context/GearContext"
import {ManagerContext} from "../context/ManagerContext"
import Pressure from "pressure"
import {config} from "../config"
import {alerts} from "../alerts"

const Pedals = React.memo(() => {
    const {isLaunched} = useContext(ManagerContext)
    const {clutch, setClutch} = useContext(GearContext)
    const {setGears} = useContext(GearContext)
    const {setTachValue} = useContext(GearContext)
    const {setForce} = useContext(GearContext)


    useEffect(() => {
        document.body.onkeydown = (e) => {
            switch (e.code) {
                case "AltLeft":
                    setClutch(true)
                    break
                case "Digit1":
                    if (clutch && isLaunched) {
                        setGears("1")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
                case "Digit2":
                    if (clutch && isLaunched) {
                        setGears("2")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
                case "Digit3":
                    if (clutch && isLaunched) {
                        setGears("3")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
                case "Digit4":
                    if (clutch && isLaunched) {
                        setGears("4")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
                case "Digit5":
                    if (clutch && isLaunched) {
                        setGears("5")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
                case "Digit6":
                    if (clutch && isLaunched) {
                        setGears("6")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
                case "KeyN":
                    if (clutch && isLaunched) {
                        setGears("N")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
                case "KeyR":
                    if (clutch && isLaunched) {
                        setGears("R")
                        setClutch(!clutch)
                    } else if (!clutch) {
                        alerts.clutch()
                    } else {
                        alerts.engine()
                    }
                    break
            }
        }
        document.body.onkeyup = (e) => {
            switch (e.code) {
                case "AltLeft":
                    setClutch(false)
                    break
            }
        }
        document.body.onclick = (e) => {
            switch (e.target.id) {
                case "brake":
                    const Brake = e.target
                    Pressure.set('#brake', {
                        change: (force) => {
                            let value = force * config.PEDAL
                            if (force * config.PEDAL > 42) {
                                value = 42
                            }
                            Brake.style.transform = `perspective(400px) rotateX(-${value}deg)`
                        },
                        end: () => {
                            setForce(0)
                            Brake.style.transform = `perspective(400px) rotateX(0deg)`
                        }
                    });
                    break
                case "accelerator":
                    const Accelerator = e.target
                    Pressure.set('#accelerator', {
                        change: (force) => {
                            let value = force * config.PEDAL
                            if (force * config.PEDAL > 50) {
                                value = 50
                            }
                            setForce(force)
                            Accelerator.style.transform = `perspective(400px) rotateX(${value}deg)`
                        },
                        end: () => {
                            setForce(0)
                            Accelerator.style.transform = `perspective(400px) rotateX(0deg)`
                        }
                    });
                    break
            }
        }
    })


    return (
        <div id="pedals-container" className="col-5 row">
            <div className={`col ${clutch ? "clutch-pressed" : ""}`} id="clutch" />
            <div className="col" id="brake" />
            <div className="col" id="accelerator" />
        </div>
    )
})

export default Pedals