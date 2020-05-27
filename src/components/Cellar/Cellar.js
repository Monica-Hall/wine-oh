import React, {Component} from "react"; 
import axios from "axios"; 
import {Redirect, Link} from "react-router-dom"; 
import {deleteWine} from "../../redux/reducers/wines"; 
import {logout} from "../../redux/reducers/users"; 
import {connect} from "react-redux";
// import EditWine from "../EditWine/EditWine"; 
import "./Cellar.css";


class Cellar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}, 
            wines: [], 
            rating: "", 
            notes: "", 
            edit: false,
            redirect: false
        }
    }

    componentDidMount() {
        this.getCellar()
    }

    getCellar = (id) => {
        axios.get("/api/cellar").then(({data}) => {
            this.setState({
                wines: data
            })
        }).catch(err => {
            console.log("error retrieving cellar:", err)
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

    handleDelete = (id) => {
        axios.delete(`/api/wine/${id}`).then(({data}) => {
            this.setState({
                wines: data
            })
        }).catch(err => {
            console.log("error deleting wine:", err)
        })
    }

    toggleEdit = () => {
        let {edit} = this.state; 
        this.setState({
            edit: !edit
        })
    }

    render() {
        const {user} = this.props.users; 

        const {redirect} = this.state; 
        if(redirect) {
            return <Redirect to="/" />
        }

        const mappedWines = this.state.wines.map(wine => {
            return (
                <div className="wines">
                    <div className="per-wine" key={wine.wine_id}>
                        <div className="year">{wine.year}</div>
                        <div>{wine.vineyard}</div>
                        <div>{wine.name}</div>
                        <div>{wine.color}</div>
                        <div>{wine.origin}</div>
                        <div>{wine.rating}</div>
                        <div>{wine.notes}</div>
                        {/* <br/> */}
                        <button className="cellar-button" onClick={() => this.handleDelete(wine.wine_id)}>Delete from Cellar</button>
                    </div>
                </div>
            )
        })
        
        return (
            <div className="cellar">

                <div className="holder">
                    
                    <div>
                        <ul>
                            <Link to="/form">Add to our Wine List</Link>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <Link to="/dashboard">View our Wine List</Link>
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
                <h1 className="cellar-header">Wine Cellar</h1>
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

export default connect(mapStateToProps, {logout, deleteWine})(Cellar)