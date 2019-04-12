import React, { Component } from 'react'



export default class AnimalList extends Component {
    render() {
        return (
            <article className="content">
                <h2>Animals</h2>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            {animal.name}
                        </div>
                    )
                }
            </article>
        )
    }
}