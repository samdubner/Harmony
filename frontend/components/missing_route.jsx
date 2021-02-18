import React from "react"

class MissingRoute extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="missing-page">
                <h1>404</h1>
                <h3>The page you were looking for doesn't exist,
                     maybe it's hidding somewhere else</h3>
            </div>
        )
    }
}

export default MissingRoute;