import React, {Component} from "react"; 
import {connect} from "react-redux"; 
import {register} from "../../redux/reducers/users"; 

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
            <div>
                <h1>Register for an Account</h1>
                
                <form onSubmit={this.handleRegister}>

                    <label htmlFor="name">Name:</label>
                    <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <button>Register</button>

                </form>
                
                <p>Already a Wine Oh!?</p>
                <button onClick={this.props.toggle}>Sign In Here</button>
            </div>
        )
    }
}

export default connect(null, {register})(Register); 