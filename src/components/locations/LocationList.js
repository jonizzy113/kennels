import React, { Component } from 'react'
import {  Link } from "react-router-dom"
import "./location.css"


export default class LocationList extends Component {
    render() {
        return (
            <article className="content locations"> 
                <h2>Locations</h2>
                {
                    this.props.locations.map(location =>
                        <div key={location.id} className="card">
                            <div className="card-body">{location.name}, {""} {location.address}</div>
                            <button
                                    onClick={() => this.props.deleteItem(location.id, "locations")}
                                    className="card-link">Delete</button>
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                        </div>
                    )
                    
                }
            </article>
        );
    }
}


