import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from "./animal/AnimalList"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employee/EmployeeList"
import OwnersList from "./owners/OwnersList"


export default class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    ownersFromAPI = [
        {id:1, name: "Jonathan", phoneNumber: "615-666-8888"},
        {id:2, name: "Billy", phoneNumber: "615-222-8888"},
        {id:3, name: "Clif", phoneNumber: "615-333-8888"},
        {id:4, name: "Sam", phoneNumber: "615-444-8888"}
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }}/>
            </React.Fragment>
        )
    }
}
