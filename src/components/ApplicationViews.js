import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from "./animal/AnimalList"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employee/EmployeeList"
import OwnersList from "./owners/OwnersList"
import AnimalDetail from "./animal/AnimalDetail"
import ApiManager from "../modules/ApiManager"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./locations/LocationDetail"
import AnimalForm from "./animal/AnimalForm"
import OwnersForm from "./owners/OwnersForm"
import EmployeeForm from "./employee/EmployeeForm"
import Login from './authentication/login'
import { withRouter } from 'react-router'



class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
            .then(()=> ApiManager.getAll("owners"))
            .then(owners => newState.owners = owners)
            .then(() =>ApiManager.getAll("locations"))
            .then(locations => newState.locations = locations)
            .then(() =>ApiManager.getAll("employees"))
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
        addAnimal = animal =>
            ApiManager.postAnimal(animal)
            .then(() => ApiManager.getAll("animals"))
            .then(animals =>
                this.setState({
                    animals: animals
                })
            )
        addEmployee = employee =>
            ApiManager.postEmployee(employee)
            .then(() => ApiManager.getAll("employees"))
            .then(employees =>
                this.setState({
                    employees: employees
                })
            )
        addOwner = owner =>
            ApiManager.postOwner(owner)
            .then(() => ApiManager.getAll("owners"))
            .then(owners =>
                this.setState({
                    owners: owners
                })
            )

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    if(this.isAuthenticated()) {
                    return <LocationList deleteItem={this.deleteItem}
                    locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if(this.isAuthenticated()) {
                    return <AnimalList deleteItem={this.deleteItem}
                    animals={this.state.animals} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees" render={(props) => {
                    if(this.isAuthenticated()) {
                    return <EmployeeList deleteItem={this.deleteItem}
                    employees={this.state.employees} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList deleteItem={this.deleteItem}
                    owners={this.state.owners} {...props}/>
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
                }}/>
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    if(!employee) {
                        employee = {id: 404, name: "404"}
                    }

                    return <EmployeeDetail employee={employee}
                        deleteItem={this.deleteItem} />
                }}/>
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )

                    if(!location) {
                        location = {id: 404, name: "404"}
                    }

                    return <LocationDetail location={location}
                        deleteItem={this.deleteItem} />
                }}/>
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }}/>
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}/>
                }}/>
                <Route path="/owners/new" render={(props) => {
                    return <OwnersForm {...props}
                        addOwner={this.addOwner} />
                }}/>
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)
