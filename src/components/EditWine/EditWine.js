import React, {Component} from "react";
import {editWine} from "../../redux/reducers/wines"; 
import {connect} from "react-redux"; 
import "./EditWine.css"; 

class EditWine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: "", 
            notes: "", 
            edit: false
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

    toggleEdit = () => {
        let {edit} = this.state; 
        this.setState({
            edit: !edit
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        let {rating, notes} = this.state; 
        this.props.editWine(this.props.wine.wine_id, {rating, notes}).then(() => {
            this.toggleEdit()
            this.props.getCellar()
        }).catch(err => {
            console.log("error editing wine:", err)
        })
    }
    
    render() {

        return (
            
            <div className="edit">
                <button className="edit-button" onClick={()=> this.toggleEdit()}>Edit</button>

                {
                    this.state.edit
                    &&
                    <div className="edit-form">

                        <form onSubmit={this.handleSubmit}>

                            <input className="rating-input"
                            name="rating"
                            type="number"
                            id="rating"
                            min="0"
                            max="5"
                            value={this.state.rating}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                            />

                            <input className="notes-input"
                            name="notes"
                            type="text"
                            value={this.state.notes}
                            onChange={(e) => this.handleChange(e.target.name, e.target.value)}
                            />
                            <button className="save-button">Save</button>

                            </form>

                            <button className="cancel-button" onClick={this.toggleEdit}>Cancel</button>

                    </div>
                }

            </div>
    
        )
    }
}

export default connect(null, {editWine})(EditWine)

