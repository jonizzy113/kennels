import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from "./animal/AnimalList"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employee/EmployeeList"
import OwnersList from "./owners/OwnersList"
import AnimalDetail from "./animal/AnimalDetail"
import ApiManager from "../modules/ApiManager"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./locations/LocationDetail"
import { withRouter } from 'react-router'



class ApplicationViews extends Component {

    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: []
    }

    componentDidMount() {
        const newState = {}

        ApiManager.getAll("animals")
            .then(animals => newState.animals = animals)
            ApiManager.getAll("owners")
            .then(owners => newState.owners = owners)
            ApiManager.getAll("locations")
            .then(locations => newState.locations = locations)
            ApiManager.getAll("employees")
            .then(employees => newState.employees = employees)
            .then(() => this.setState(newState))
    }

    deleteItem = (id, resource) => {
            ApiManager.delete(id, resource)
            .then(() =>ApiManager.getAll(resource))
            .then(obj => {
                if(resource === "locations" ) {
                    this.props.history.push("/")
                }else {
                    this.props.history.push(`/${resource}`)

                }
                this.setState({[resource]: obj})
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList deleteItem={this.deleteItem}
                    locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteItem={this.deleteItem}
                    animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteItem={this.deleteItem}
                    employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList deleteItem={this.deleteItem}
                    owners={this.state.owners} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteItem={this.deleteItem} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    if(!employee) {
                        employee = {id: 404, name: "404"}
                    }

                    return <EmployeeDetail employee={employee}
                        deleteItem={this.deleteItem} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )

                    if(!location) {
                        location = {id: 404, name: "404"}
                    }

                    return <LocationDetail location={location}
                        deleteItem={this.deleteItem} />
                }} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)
