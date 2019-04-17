import React, { Component } from "react"
import "./employee.css"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employees content">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.employee.name}
                        </h4>
                        {/* <h6 className="card-title">{this.props.employee}</h6> */}
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteItem(this.props.employee.id, "employees")
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}
