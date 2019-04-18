const remoteURL = "http://localhost:5002"


export default {
    get(id, resource) {
        return fetch(`${remoteURL}/${resource},${id}`).then(r => r.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(r => r.json())
    },
    delete(id, resource) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(r => r.json())
    },
    post(newAnimal) {
        return fetch(`${remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        }).then(data => data.json())
    },
    postEmployee(newEmployee) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    },
    post(newOwner) {
        return fetch(`${remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json())
    }
}
