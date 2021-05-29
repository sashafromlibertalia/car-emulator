import React, { useState} from "react";
import Tools from "./components/Tools"
import Info from "./components/Info"
import Speedometer from "./components/Speedometer";
import Tachometer from "./components/Tachometer";
import {ManagerContext} from "./context/ManagerContext";

const App = () => {
    const [isLaunched, setLaunch] = useState(false)
    const [press, setPress] = useState("P")
    return (
        <ManagerContext.Provider value={{isLaunched, setLaunch, press, setPress}}>
            <h1 id="title">Эмулятор машины с механической КПП</h1>
            <div id="container">
                <div id="wrapper" className="row">
                    <div className="col-5">
                        <Tools/>
                        <Info/>
                    </div>
                    <div className="col-4"/>
                    <div className="col-3">
                        <Speedometer/>
                        <Tachometer/>
                    </div>
                </div>
            </div>
        </ManagerContext.Provider>
    );
}

export default App
