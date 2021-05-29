import React, {useContext, useEffect} from "react";
import {ManagerContext} from "../context/ManagerContext";

const Pedals = () => {
    const {press, setPress} = useContext(ManagerContext)
    // const togglePedal = () => {
    //     setPress(!isLaunched ? true : false);
    // }
    useEffect(() => {
        document.body.addEventListener('keydown', (e) => {
            e.preventDefault()
            console.log(e)
            switch (e.code) {
                case "AltLeft":
                    setPress("N")
                    break
                case "Digit1":
                    if (press === "N") {
                        setPress("1")
                    }
                    break
                case "Digit2":
                    if (press === "N") {
                        setPress("2")
                    }
                    break
                case "Digit3":
                    if (press === "N") {
                        setPress("3")
                    }
                    break
                case "Digit4":
                    if (press === "N") {
                        setPress("4")
                    }
                    break
                case "Digit5":
                    if (press === "N") {
                        setPress("5")
                    }
                    break
                case "Digit6":
                    if (press === "N") {
                        setPress("6")
                    }
                    break
                case "KeyN":
                    if (press === "N") {
                        setPress("N")
                    }
                    break
                case "KeyR":
                    if (press === "N") {
                        setPress("R")
                    }
                    break
            }

        }, false);
        document.body.addEventListener('keyup', (e) => {
            e.preventDefault()
            console.log(e)
            switch (e.code) {
                case "AltLeft":
                    setPress("N")
                    break
                case "Digit1":
                    if (press === "N") {
                        setPress("1")
                    }
                    break
                case "Digit2":
                    if (press === "N") {
                        setPress("2")
                    }
                    break
                case "Digit3":
                    if (press === "N") {
                        setPress("3")
                    }
                    break
                case "Digit4":
                    if (press === "N") {
                        setPress("4")
                    }
                    break
                case "Digit5":
                    if (press === "N") {
                        setPress("5")
                    }
                    break
                case "Digit6":
                    if (press === "N") {
                        setPress("6")
                    }
                    break
                case "KeyN":
                    if (press === "N") {
                        setPress("N")
                    }
                    break
                case "KeyR":
                    if (press === "N") {
                        setPress("R")
                    }
                    break
            }


        }, false);
    })

    return (
        <div id="pedals-container" className="col-5 row">
            <div className={`col ${press === "N" ? "clutch-pressed" : ""}`} id="clutch"/>
            <div className="col" id="brake" onkey/>
            <div className="col" id="accelerator"/>
        </div>
    )
}

export default Pedals