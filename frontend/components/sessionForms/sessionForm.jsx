import React from "react"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(input)  {
        return (e) => {
            this.setState({[input]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitForm(this.state);
    }

    render() {
        return (
            <div className="session-container">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h2 className="session-form-text">{this.props.flavorText}</h2>

                    <label>Username</label>
                    <input className="session-input" type="text" onChange={this.handleInput("username")} value={this.state.username}/>

                    <label>Password</label>
                    <input className="session-input" type="password" onChange={this.handleInput("password")} value={this.state.password} />

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default SessionForm;