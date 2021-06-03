import React, { useState} from "react"
import Tools from "./components/Tools"
import Info from "./components/Info"
import Speedometer from "./components/Speedometer"
import Tachometer from "./components/Tachometer"
import Mobile from "./components/Mobile"
import {ManagerContext} from "./context/ManagerContext"
import {GearContext} from "./context/GearContext"

const App = React.memo(() => {
    const [isLaunched, setLaunch] = useState(false)
    const [clutch, setClutch] = useState(false)
    const [gears, setGears] = useState("")

    const [speed, setSpeed] = useState(0)
    const [tachValue, setTachValue] = useState(0)
    const [force, setForce] = useState(0)
    return (
        <ManagerContext.Provider value={{isLaunched, setLaunch}}>
            <Mobile/>
            <div id="desktop" className="d-none d-xxl-block d-xl-block d-lg-none d-xl-none d-xxl-block">
                <h1 className="title">Эмулятор машины с механической КПП 🚗</h1>
                <div className="container-fluid">
                    <div id="wrapper" className="row">
                        <GearContext.Provider value={{clutch, setClutch, gears, setGears,
                            speed, setSpeed, tachValue, setTachValue, force, setForce}}>
                            <div className="col-5">
                                <Tools/>
                                <Info/>
                            </div>
                            <div className="col-4"/>
                            <div className="col-3">
                                <Speedometer/>
                                <Tachometer/>
                            </div>
                        </GearContext.Provider>
                    </div>
                </div>
            </div>
        </ManagerContext.Provider>
    );
})

export default App
