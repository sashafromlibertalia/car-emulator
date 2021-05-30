import React, {useContext, useEffect} from "react";
import {GearContext} from "../context/GearContext"
import {ManagerContext} from "../context/ManagerContext"
import Pressure from "pressure"

const Pedals = React.memo(() => {
    const {isLaunched} = useContext(ManagerContext)
    const {clutch, setClutch} = useContext(GearContext)
    const {setGears} = useContext(GearContext)


    const PedalPressure = (type) => {
        const Brake = document.querySelector("#brake")
        const Acceleration = document.querySelector("#accelerator")

        switch (type) {
            case "brake":
                Brake.style.transform = `perspective(400px) rotateX(-30deg)`
                break

            case "accelerator":
                break
        }
    }

    useEffect(() => {
        document.body.onkeydown = (e) => {
            switch (e.code) {
                case "AltLeft":
                    setClutch(true)
                    // document.body.removeEventListener('keydown', () => {}, false)
                    break
                case "Digit1":
                    if (clutch && isLaunched) {
                        setGears("1")
                        setClutch(!clutch)
                        //document.body.removeEventListener('keydown', () => {}, false)
                    }
                    break
                case "Digit2":
                    if (clutch && isLaunched) {
                        setGears("2")
                        setClutch(!clutch)
                    }
                    break
                case "Digit3":
                    if (clutch && isLaunched) {
                        setGears("3")
                        setClutch(!clutch)
                    }
                    break
                case "Digit4":
                    if (clutch && isLaunched) {
                        setGears("4")
                        setClutch(!clutch)
                    }
                    break
                case "Digit5":
                    if (clutch && isLaunched) {
                        setGears("5")
                        setClutch(!clutch)
                    }
                    break
                case "Digit6":
                    if (clutch && isLaunched) {
                        setGears("6")
                        setClutch(!clutch)
                    }
                    break
                case "KeyN":
                    if (clutch && isLaunched) {
                        setGears("N")
                        setClutch(!clutch)
                    }
                    break
                case "KeyR":
                    if (clutch && isLaunched) {
                        setGears("R")
                        setClutch(!clutch)
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
    })


    return (
        <div id="pedals-container" className="col-5 row">
            <div className={`col ${clutch ? "clutch-pressed" : ""}`} id="clutch"/>
            <div className="col" id="brake" onClick={PedalPressure("brake")}/>
            <div className="col" id="accelerator" onClick={PedalPressure("accelerator")}/>
        </div>
    )
})

export default Pedals