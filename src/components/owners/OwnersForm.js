import React, { Component } from "react";

export default class AnimalForm extends Component {
    state = {
        ownerName: "",
        phoneNumber: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        console.log(stateToChange)
        this.setState(stateToChange);
    };

    constructNewOwner = event => {
        event.preventDefault();
        const owner = {
            name: this.state.ownerName,
            phoneNumber: (this.state.phoneNumber),
        };
        this.props
                .addOwner(owner)
                .then(() => this.props.history.push("/owners"));
    }
    render() {
        return (
            <React.Fragment>
                <form className="ownerForm content">
                <div className="form-group">
                <label htmlFor="ownerName"> Owner Name</label>
                <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner name"
                        />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phoneNumber"
                            placeholder="Phone number"
                        />
                </div>
                <button
                        type="submit"
                        onClick={this.constructNewOwner}
                        className="btn btn-primary"
                    >
                        Submit
            </button>
                </form>
            </React.Fragment>
        )
    }
}