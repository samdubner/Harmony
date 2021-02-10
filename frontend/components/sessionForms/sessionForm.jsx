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
        console.log(e.currentTarget)
        if ((this.state.username === "" && this.state.password === "") || e.target.value == "Demo Login" ) {
            const user = {
                username: "test",
                password: "123456"
            }

            this.props.submitForm(user);
        } else {
            this.props.submitForm(this.state)
        }
    }

    render() {
        // debugger
        // debugger
        const demoLogin = this.props.formType === "Login" ? <input type="submit" value="Demo Login" /> : null;
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
                    {demoLogin}
                    
                    <span>{this.props.outsideLinkText}</span><Link to={this.props.linkTo}>{this.props.insideLinkText}</Link>
                </form>
            </div>
        )
    }
}

export default SessionForm;