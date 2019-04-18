import React, { Component } from 'react';
import {  Link } from "react-router-dom"
import "./employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="employeeButton content">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        New Employee
                    </button>
                </div>
            <article className="content employees">
                <h1>Employees</h1>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">{employee.name}</div>
                            <button
                                    onClick={() => this.props.deleteItem(employee.id, "employees")}
                                    className="card-link">Delete</button>
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        </div>
                    )
                }
            </article>
            </React.Fragment>
            );
        }
}