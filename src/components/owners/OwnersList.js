import React, { Component } from 'react';
import "./owner.css"

export default class OwnersList extends Component {
    render() {
        return (
            <article className="content owners">
                <h1>Owners</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">{owner.name} {""} {owner.phoneNumber}</div>
                            <button
                                    onClick={() => this.props.deleteItem(owner.id, "owners")}
                                    className="card-link">Delete</button>
                        </div>
                    )
                }
            </article>
        );
    }
}