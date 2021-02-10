import React from "react"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
    }

    render() {
        return (
            <form>
                {/* <label>Username:
                    <input type="text" value={this.state.username}/>
                </label>

                <label>Password:
                    <input type="text" value={this.state.password} />
                </label>

                <input type="submit" value={this.props.formType} /> */}
            </form>
        )
    }
}

export default SessionForm;