import React, {Component} from "react"; 
import {Redirect} from "react-router-dom"; 
import {logout} from "../../redux/reducers/users"; 
import axios from "axios"; 
import {connect} from "react-redux";

class Cellar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}, 
            wines: [], 
            redirect: false
        }
    }

    componentDidMount() {
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

    render() {
        console.log(this.props)

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
                    <div>{wine.rating}</div>
                    <div>{wine.notes}</div>
                    <br/>
                    <button>Delete from Cellar</button>
                </div>
            )
        })
        
        return (
            <div>
                <h1>Wine Cellar</h1>

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
            </div>
        )
    }

}

const mapStateToProps = state => state; 

export default connect(mapStateToProps, {logout})(Cellar)

//- do not connect from redux, create new axios call 