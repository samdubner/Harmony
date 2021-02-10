import React from "react"
import { Link } from "react-router-dom"

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
        // debugger
        this.props.submitForm(this.state);
    }

    render() {
        // debugger
        // debugger
        return (
            <div className="session-container">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h2 >{this.props.flavorText}</h2>

                    <label>USERNAME</label>
                    <input type="text" onChange={this.handleInput("username")} value={this.state.username}/>

                    <label>PASSWORD</label>
                    <input type="password" onChange={this.handleInput("password")} value={this.state.password} />

                    {this.props.errors.map((err, idx) => {
                        return (
                            <p key={idx} className="error">{err}</p>
                        )
                    })}

                    <input type="submit" value={this.props.formType} />
                    <span>{this.props.outsideLinkText}</span><Link to={this.props.linkTo}>{this.props.insideLinkText}</Link>
                </form>
            </div>
        )
    }
}

export default SessionForm;