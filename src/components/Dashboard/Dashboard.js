import React, { Component } from "react"; 
import {connect} from "react-redux"; 
import {Redirect, Link} from "react-router-dom"; 
import {logout} from "../../redux/reducers/users"; 
import {getDash, addToCellar} from "../../redux/reducers/wines"; 
// import "./Dashboard.css"; 

class Dashboard extends Component {
    constructor(props) {
        super(props)

        console.log("props:",props)

        this.state = {
            user: {}, 
            wines: [], 
            redirect: false
        }
    }

    // componentDidUpdate(prevProps){
        
    //     if (this.props.user && !prevProps.user){
    //         this.props.getDash()
    //     }
    // }

    componentDidMount() {
        this.props.getDash()
        .catch(err => {
            console.log("error getting wine:", err)
        })
    }

    handleAdd() {
        this.props.addToCellar(this.state.wines)
    
        this.setState({
            wines: []
        }).catch(err => {
            console.log("adding to cellar error:", err)
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

        const {redirect} = this.state; 
        if(redirect) {
            return <Redirect to="/" />
        }

        const mappedWines = this.props.wines.data.map(wine => {
            return (
                <div key={wine.wine_id}>
                    <div>{wine.year}</div>
                    <div>{wine.vineyard}</div>
                    <div>{wine.name}</div>
                    <div>{wine.color}</div>
                    <div>{wine.origin}</div>
                    <br/>
                    <button onClick={this.handleAdd}>Add to Cellar</button>
                </div>
                )
        })

        return (
            <div>
               <h1>Wine List</h1>
               <div>
                    {
                        user 
                        &&
                        <div>
                            {mappedWines}
                            <button onClick={() => this.handleLogout()}>Sign Out</button>
                        </div>
                    }
                </div>
                
                <div>
                    <ul>
                        <Link to="/form">Add to our Wine List</Link>
                    </ul>

                    <ul>
                        <Link to="/cellar">Go into your Wine Cellar</Link>
                    </ul>
                </div>
            </div>
        )

    }
    
}

const mapStateToProps = state => state; 

export default connect(mapStateToProps, {logout, getDash, addToCellar})(Dashboard)