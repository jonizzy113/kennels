import React, { Component } from 'react'
import {  Link } from "react-router-dom"
import dog from "./DogIcon.svg"
import "./animal.css"



export default class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton content">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>
            <section className="content animals">
                {
                    this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="dog icon"/>
                                {animal.name}
                                <button
                                    onClick={() => this.props.deleteItem(animal.id)}
                                    className="card-link">Delete</button>
                            </h5>
                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                        </div>
                    </div>
                    )
                }
                
            </section>
            </React.Fragment>
        )
    }
}