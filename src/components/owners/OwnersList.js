import React, { Component } from 'react';

export default class OwnersList extends Component {
    render() {
        return (
            <article className="content">
                <h1>Owners</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name} {""} {owner.phoneNumber}
                        </div>
                    )
                }
            </article>
        );
    }
}