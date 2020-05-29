import React, {Component} from "react";
import {Redirect, Link} from "react-router-dom"; 
import {createWine} from "../../redux/reducers/wines"; 
import {logout} from "../../redux/reducers/users"; 
import { connect } from "react-redux";
import "./Form.css"; 

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            year: "", 
            vineyard: "", 
            name: "",
            color: "", 
            origin: "",
            redirect: false
        }
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let {year, vineyard, name, color, origin} = this.state
        this.props.createWine({year, vineyard, name, color, origin})

        this.setState({
            year: "", 
            vineyard: "", 
            name: "",
            color: "", 
            origin: ""
        })
        alert("Thank you! This wine has been added to our list.")
        // this.toggleRedirect()
    }

    toggleRedirect = () => {
        let {redirect} = this.state

        this.setState({
            redirect: !redirect
        })
    }

    handleLogout = () => {
        this.props.logout().then(({data}) => {
            this.setState({
                redirect: true
            })
        }).catch(err => {
            console.log("logout error:", err)
        })
    }

    render() {
        const {user} = this.props.users;

        const {redirect} = this.state

        if(redirect) {
            return <Redirect to="/"/>
        }

        return (
            <div className="form">

                <div className="holder">
                    
                    <div>
                        <ul>
                            <Link to="/dashboard">View our Wine List</Link>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <Link to="/cellar">View your Wine Cellar</Link>
                        </ul>
                    </div>

                    <div>
                        {
                            user 
                            &&
                            <button className="out-button" onClick={() => this.handleLogout()}>Sign Out</button>
                        }
                    </div>

                </div>
                        
                <div>
                    {
                        user
                        &&
                        <h3 className="small-header">Hello {this.props.users.user.name}</h3>
                    }
                </div>

                    <hr/>
                        <h1 className="form-header">Add a Wine to our List</h1>
                    <hr/>
                    
                    <br/>
                    <br/>

                <form className="form-block" onSubmit={this.handleClick}>
                    
                        <label className="form-label" htmlFor="year">Year:</label>
                        <input className="form-input" 
                            name="year"
                            type="text"
                            value={this.state.year}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                        />
                    

                        <label className="form-label" htmlFor="vineyard">Vineyard:</label>
                        <input className="form-input" 
                            name="vineyard"
                            type="text"
                            value={this.state.vineyard}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                        />

                        <label className="form-label" htmlFor="name">Grape:</label>
                        <input className="form-input"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                        />

                    <label className="form-label" htmlFor="color">Color:</label>
                    <input className="form-input"
                        name="color"
                        type="text"
                        value={this.state.color}
                        onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                    />

                    <label className="form-label" htmlFor="origin">Origin:</label>
                    <input className="form-input"
                        name="origin"
                        type="text"
                        value={this.state.origin}
                        onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                    />

                        <div className="button-holder">
                            <button className="form-button">Add</button>
                        </div>
                            
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {createWine, logout})(Form)