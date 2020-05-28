import React, {Component} from "react"; 
import {connect} from "react-redux"; 
import {register} from "../../redux/reducers/users"; 
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "", 
            email: "", 
            password: ""
        }
    }

    handleRegister = e => {
        e.preventDefault()
        this.props.register(this.state).then(() => {
            this.props.redirect()
            
            const {email: userEmail, name} = this.state;
            axios.post("/api/email", {userEmail, name}).then(() => {
            })

        }).catch(err => {
            console.log("register error:", err)
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
                <h1 className="auth-header">Register</h1>
                <hr/>

                <br/>

                <form className="auth-form" onSubmit={this.handleRegister}>

                    <label className="auth-label" htmlFor="name">Name:</label>
                    <input className="auth-input"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <label className="auth-label" htmlFor="email">Email:</label>
                    <input className="auth-input"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <label className="auth-label" htmlFor="password">Password:</label>
                    <input className="auth-input"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <br/>
                    <br/>
                    <div className="button-holder">
                    <button className="login-button">Register</button>
                    </div>

                </form>
                
                <p className="for-reg">Already a Wine Oh!?</p>
                <button className="reg-button" onClick={this.props.toggle}>Login Here</button>
            </div>
        )
    }
}


export default connect(null, {register})(Register); 