import {Component} from "react";
import Tools from "./components/Tools"
class App extends Component{
  render() {
    return (
        <div>
          <h1 id="title">Эмулятор машины с механической КПП</h1>
          <div id="container">
              <div id="wrapper" className="row">
                  <div className="col-5">
                      <Tools/>
                  </div>
                  <div className="col-4"/>
                  <div className="col-3">
                      <div className="tool-container">
                          <div className="tool-wrapper">
                              <div id="s-values">
                                  <div className="arrow-container">
                                      <span className="arrow-wrapper">
                                          <span className="circle"/>
                                          <span className="arrow"/>
                                      </span>
                                  </div>
                              </div>
                              <div className="tool-subtitle">
                                  <h1>60</h1>
                                  <h4>Спидометр, км/ч</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default App;
