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
        this.props.submitForm(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:
                    <input type="text" onChange={this.handleInput("username")} value={this.state.username}/>
                </label>

                <label>Password:
                    <input type="password" onChange={this.handleInput("password")} value={this.state.password} />
                </label>

                <input type="submit" value={this.props.formType} />
            </form>
        )
    }
}

export default SessionForm;