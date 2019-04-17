import React, { Component } from "react"
import dog from "./DogIcon.svg"
import "./animal.css"


export default class Animal extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animals content">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" alt="dog--icon"/>
                            { this.props.animal.name }
                            
                        </h4>
                        <h6 className="card-title">{ this.props.animal.breed }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteItem(this.props.animal.id)
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