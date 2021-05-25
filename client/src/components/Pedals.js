import {Component} from "react";

class Pedals extends Component {
    render() {
        return (
            <div id="pedals-container" className="row">
                <div className="col" id="clutch"/>
                <div className="col" id="brake"/>
                <div className="col" id="accelerator"/>
            </div>
        );
    }
}

export default Pedals