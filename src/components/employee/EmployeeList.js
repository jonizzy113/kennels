import React, { Component } from 'react';
import "./employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <article className="content employees">
                <h1>Employees</h1>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">{employee.name}</div>
                            <button
                                    onClick={() => this.props.deleteItem(employee.id, "employees")}
                                    className="card-link">Delete</button>
                        </div>
                    )
                }
            </article>
            );
        }
}