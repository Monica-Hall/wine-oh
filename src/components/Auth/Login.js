import React, {Component} from "react"; 
import {connect} from "react-redux"; 
import {login} from "../../redux/reducers/users"; 

class Login extends Component {
    constructor(props) {
        super(props)

       this.state = {
           email: "", 
           password: ""
       }
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.login(this.state).then(() => {
            this.props.redirect()
        }).catch(err => {
            console.log("login error: ", err)
        })
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="login">

                <h1 className="login-header">Sign In</h1>

                <br/>

                <form className="login-form" onSubmit={this.handleLogin}>

                    <label className="login-label" htmlFor="email">Email: </label>
                    <input className="login-input"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <label className="login-label" htmlFor="password">Password: </label>
                    <input className="login-input"
                        name="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <button className="auth-button">Login</button>
                    
                </form> 


                <br/>
                <br/>
                <br/>

                <p className="for-register">Want to become a Wine Oh!?</p>
                <button className="auth-button" onClick={this.props.toggle}>Register Here</button>


            </div>
        )
    }
}

export default connect(null, {login})(Login)
