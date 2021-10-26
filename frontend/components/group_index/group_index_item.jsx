import React from "react";

class GroupIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="group-item">
                <div className="group-info">
                    <div className="group-icon"></div>
                    <p className="group-name">{this.props.group.name}</p>
                </div>
            </div>
        )
    }
}

export default GroupIndexItem