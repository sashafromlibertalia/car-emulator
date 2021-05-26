const Gear = () => {
    return (
        <div id="gear-container" className="col">
            <div id="gear-wrapper" className="container">
                <div className="row" id="first-gears">
                    <div className="col">
                        R
                        <span/>
                    </div>
                    <div className="col">
                        1
                        <span/>
                    </div>
                    <div className="col">
                        3
                        <span/>
                    </div>
                    <div className="col">
                        5
                        <span/>
                    </div>
                </div>
                <div className="row" id="neutral">
                    <div className="col">
                        <span className="selected"/>
                    </div>
                </div>
                <div className="row justify-content-end" id="last-gears">
                    <div className="col"/>
                    <div className="col">
                        <span/>
                        2
                    </div>
                    <div className="col">
                        <span/>
                        4
                    </div>
                    <div className="col">
                        <span/>
                        6
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gear