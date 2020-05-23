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
            <div>

                <h1>Sign In</h1>

                <form onSubmit={this.handleLogin}>

                    <label htmlFor="email">email: </label>
                    <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">password: </label>
                    <input
                        name="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <button>Login</button>
                    
                </form> 

                <p>Want to be a Wine Oh!?</p>
                <button onClick={this.props.toggle}>Register Here</button>

            </div>
        )
    }
}

export default connect(null, {login})(Login)
