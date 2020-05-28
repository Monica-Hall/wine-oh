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
            <div className="auth">

                <hr/>
                <h1 className="auth-header">Sign In</h1>
                <hr/>
                
                <br/>

                <form className="auth-form" onSubmit={this.handleLogin}>

                    <label className="auth-label" htmlFor="email">Email: </label>
                    <input className="auth-input"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <label className="auth-label" htmlFor="password">Password: </label>
                    <input className="auth-input"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <div className="button-holder">
                    <button className="login-button">Login</button>
                    </div>
                    
                </form> 


                <br/>
                <br/>
                <br/>

                <p className="for-reg">Want to become a Wine Oh!?</p>
                <button className="reg-button" onClick={this.props.toggle}>Register Here</button>


            </div>
        )
    }
}

export default connect(null, {login})(Login)
