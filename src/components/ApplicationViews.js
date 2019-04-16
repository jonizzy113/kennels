import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from "./animal/AnimalList"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employee/EmployeeList"
import OwnersList from "./owners/OwnersList"
import AnimalManager from "../modules/AnimalManager"
import OwnersManager from "../modules/OwnersManager"
import LocationManager from "../modules/LocationManager"
import EmployeesManager from "../modules/EmployeesManager"


export default class ApplicationViews extends Component {

    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: []
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
        OwnersManager.getAll()
            .then(owners => newState.owners = owners)
        LocationManager.getAll()
            .then(locations => newState.locations = locations)
        EmployeesManager.getAll()
            .then(employees => newState.employees = employees)
            .then(() => this.setState(newState))
    }

    deleteItem = (id, resource) => {
        return fetch(`http://localhost:5002/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/${resource}`))
            .then(e => e.json())
            .then(obj => this.setState({
                [resource]: obj
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList deleteItem={this.deleteItem}
                    locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList deleteItem={this.deleteItem}
                    animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteItem={this.deleteItem}
                    employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList deleteItem={this.deleteItem}
                    owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
