import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./animal.css"


export default class AnimalList extends Component {
    render() {
        return (
            <article className="content animals">
                <h2>Animals</h2>
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
                        </div>
                    </div>
                    )
                }
                
            </article>
        )
    }
}