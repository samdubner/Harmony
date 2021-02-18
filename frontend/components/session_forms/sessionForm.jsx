import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
        this.login = this.login.bind(this)
    }

    componentDidMount() {
        if (this.props.errors.length != 0) {
            this.props.clearErrors();
        }
    }

    handleInput(input)  {
        return (e) => {
            this.setState({[input]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    demoLogin(e) {
        e.preventDefault();
            const user = {
                username: "test",
                password: "123456"
            }

            this.props.submitForm(user);
    }

    login(e) {
        e.preventDefault();
        this.props.submitForm(this.state);
    }

    render() {
        const demoLogin = this.props.formType === "Login" ? (
            <input type="button" onClick={this.demoLogin} value="Demo Login" />
        ) : null;

        return (
            <div className="session-container">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h2 >{this.props.flavorText}</h2>

                    <label>USERNAME</label>
                    <input type="text" onChange={this.handleInput("username")} value={this.state.username}/>

                    <label>PASSWORD</label>
                    <input type="password" onChange={this.handleInput("password")} value={this.state.password} />

                    <div className="errorBox">
                        {this.props.errors.map((err, idx) => {
                            return (
                                <p key={idx} className="error">{err}</p>
                            )
                        })}
                    </div>

                    <input type="submit" onClick={this.login} value={this.props.formType} />
                    {demoLogin}
                    
                    <span>{this.props.outsideLinkText}</span><Link to={this.props.linkTo}>{this.props.insideLinkText}</Link>
                </form>
            </div>
        )
    }
}

export default SessionForm;