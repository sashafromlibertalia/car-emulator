import Tools from "./components/Tools"
import Info from "./components/Info"
import Speedometer from "./components/Speedometer";
import Tachometer from "./components/Tachometer";
import {useState} from "react";

const App = () => {
    const [isLaunched, setLaunch] = useState("false");

    const toggleClass = () => {
        setLaunch(!isLaunched);
    }
    return (
        <>
            <h1 id="title">Эмулятор машины с механической КПП</h1>
            <div id="container">
                <div id="wrapper" className="row">
                    <div className="col-5" >
                        <Tools clickState={toggleClass} value={isLaunched}/>
                        <Info/>
                    </div>
                    <div className="col-4"/>
                    <div className="col-3">
                        <Speedometer/>
                        <Tachometer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
