import React, { Component } from "react"; 
import {connect} from "react-redux"; 
import {Redirect, Link} from "react-router-dom"; 
import {logout} from "../../redux/reducers/users"; 
import {getDash, addToCellar} from "../../redux/reducers/wines"; 
import "./Dashboard.css"; 

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}, 
            wines: [], 
            redirect: false
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount() {
        this.props.getDash()
        .catch(err => {
            console.log("error getting wine:", err)
        })
    }

    handleAdd(id) {
        let body = {drinker_id: this.props.users.user.drinker_id}; 

        this.props.addToCellar(id, body)
        alert("This wine has been added to your cellar")
    
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

        const {redirect} = this.state; 
        if(redirect) {
            return <Redirect to="/" />
        }

        const mappedWines = this.props.wines.data.map(wine => {
            return (
                <div className="wines">
                    <div className="per-wine" key={wine.wine_id}>
                        <div className="year">{wine.year}</div>
                        <div>{wine.vineyard}</div>
                        <div>{wine.name}</div>
                        <div>{wine.color}</div>
                        <div>{wine.origin}</div>
                        <div className="button-holder">
                        <button className="dash-button" onClick={() => this.handleAdd(wine.wine_id)}>Add to Cellar</button>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="dash"> 
                
                <div className="holder">
                    
                    <div className="link-holder">
                        <ul>
                            <Link to="/form">Add to our Wine List</Link>
                        </ul>
                    </div>

                    <div className="link-holder">
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
                    <h1 className="dash-header">Wine List</h1>
                <hr/>

                <br/>
                <br/>

               <div>
                    {
                        user 
                        &&
                        <div>
                            <div className="mapped">
                                {mappedWines}
                            </div>
                            <br/>
                            <br/>
                        </div>
                    }
                </div>

            </div>
        )
    } 
}

const mapStateToProps = state => state; 

export default connect(mapStateToProps, {logout, getDash, addToCellar})(Dashboard)