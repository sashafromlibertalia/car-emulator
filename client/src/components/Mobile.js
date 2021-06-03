import React from "react"
const Mobile = () => {
    return (
        <div id="mobile" className="d-block d-sm-none d-none d-sm-block d-md-none d-md-block d-lg-none d-none d-lg-block d-xl-none">
            <div>
                <h1 className="title">Сайт недоступен на вашем разрешении</h1>
                <h3>Советую заценить сайтик с компа, кайфанете ☺️</h3>
            </div>
        </div>
    )
}

export default React.memo(Mobile)