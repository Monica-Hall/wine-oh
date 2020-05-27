import React, {Component} from "react";
import {editWine} from "../../redux/reducers/wines"; 
import {connect} from "react-redux"; 
//import "./EditWine.css"; 

class EditWine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: "", 
            notes: ""
        }
    }

    componentDidMount() {
        let {rating, notes} = this.props.wine; 
        this.setState({
            rating, 
            notes
        })
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        let {rating, notes} = this.state; 
        this.props.editWine(this.props.wine.wine_id, {rating, notes}).then(() => {
            this.props.toggleEdit()
            this.props.getCellar()
        }).catch(err => {
            console.log("error editing wine:", err)
        })
    }
    

    render() {
        // console.log(this.props)

        return (
            <div>
             
                <form onSubmit={this.handleSubmit}>

                    <input
                    name="rating"
                    type="range" list="dl"
                    value={this.state.rating}
                    onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                    />
                    <datalist id="dl">
                        <option>1</option>
                        <option>1.5</option>
                        <option>2</option>
                        <option>2.5</option>
                        <option>3</option>
                        <option>3.5</option>
                        <option>4</option>
                        <option>4.5</option>
                        <option>5</option>
                    </datalist>

                    <input
                    name="notes"
                    type="text"
                    value={this.state.notes}
                    onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                    />
                    <button>Save</button>

                </form>

                <button onClick={this.props.toggleEdit}>Cancel</button>

            </div>
        )
    }
}

export default connect(null, {editWine})(EditWine)
