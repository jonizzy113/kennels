import React, { Component } from "react";

export default class AnimalForm extends Component {
    state = {
        employeeName: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        console.log(stateToChange)
        this.setState(stateToChange);
    };

    constructNewEmployee = event => {
        event.preventDefault();
        const employee = {
            name: this.state.employeeName,
        };
        this.props
                .addEmployee(employee)
                .then(() => this.props.history.push("/employees"));
    }
    render() {
        return (
            <React.Fragment>
                <form className="ownerForm content">
                <div className="form-group">
                <label htmlFor="ownerName"> Employee Name</label>
                <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee name"
                        />
                </div>
                <button
                        type="submit"
                        onClick={this.constructNewEmployee}
                        className="btn btn-primary"
                    >
                        Submit
            </button>
                </form>
            </React.Fragment>
        )
    }
}