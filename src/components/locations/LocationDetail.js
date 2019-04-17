import React, { Component } from "react"
import "./location.css"

export default class Location extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="locations content">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.location.name}
                        </h4>
                        {/* <h6 className="card-title">{ this.props.location}</h6> */}
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteItem(this.props.location.id, "locations")
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