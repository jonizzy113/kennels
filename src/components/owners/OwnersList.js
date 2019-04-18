import React, { Component } from 'react';
import "./owner.css"

export default class OwnersList extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="ownerButton content">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        New Owner
                    </button>
                </div>
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
        </React.Fragment>
        );
    }
}