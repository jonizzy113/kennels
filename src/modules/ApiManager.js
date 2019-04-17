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
    }
}