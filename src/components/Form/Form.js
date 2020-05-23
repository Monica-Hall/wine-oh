import React, {Component} from "react";
import {Redirect, Link} from "react-router-dom"; 
import {createWine} from "../../redux/reducers/wines"; 
import { connect } from "react-redux";
// import "./Form.css"; 

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

        this.toggleRedirect()
    }

    toggleRedirect = () => {
        let {redirect} = this.state

        this.setState({
            redirect: !redirect
        })
    }

    render() {
        const {redirect} = this.state

        if(redirect) {
            return <Redirect to="/dashboard"/>
        }

        return (
            <div>

                <form onSubmit={this.handleClick}>

                    <h4>Add a Wine to our Wine List</h4>
                    
                    <div>
                        <label htmlFor="year">Year:</label>
                        <input 
                            name="year"
                            type="text"
                            value={this.state.year}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="vineyard">Vineyard:</label>
                        <input 
                            name="vineyard"
                            type="text"
                            value={this.state.vineyard}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Grape:</label>
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                        />
                    </div>

                    <div>
                    <label htmlFor="color">Color:</label>
                    <input
                        name="color"
                        type="text"
                        value={this.state.color}
                        onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                    />
                    </div>

                    <div>
                    <label htmlFor="origin">Origin:</label>
                    <input
                        name="origin"
                        type="text"
                        value={this.state.origin}
                        onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                    />
                    </div>
                    
                        <button>Add</button>
                </form>

               <div>
               <ul>
                    <Link to="/dashboard">View our Wine List</Link>
                </ul>

                <ul>
                        <Link to="/cellar">Go into your Wine Cellar</Link>
                </ul>
               </div>

            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {createWine})(Form)