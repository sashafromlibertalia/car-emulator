const Speedometer = () => {
    return (
        <div className="tool-container">
            <div className="tool-wrapper">
                <div className="container-for-stuff center">
                    <div id="s-values" className="center">
                        <div className="arrow-container">
                                      <span className="arrow-wrapper">
                                          <span className="circle">
                                               <span className="arrow"/>
                                          </span>
                                      </span>
                        </div>
                    </div>
                    <div className="center" id="numbers">
                        <div className="num-s center">0</div>
                        <div className="num-s center">30</div>
                        <div className="num-s center">60</div>
                        <div className="num-s center">90</div>
                        <div className="num-s center">120</div>
                        <div className="num-s center">150</div>
                        <div className="num-s center">180</div>
                        <div className="num-s center">210</div>
                        <div className="num-s center">240</div>
                        <div className="num-s center">270</div>
                    </div>
                </div>
                <div className="tool-subtitle">
                    <h1>0</h1>
                    <h4>Спидометр, км/ч</h4>
                </div>
            </div>
        </div>
    )
}

export default Speedometer