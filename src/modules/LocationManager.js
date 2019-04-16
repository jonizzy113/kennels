const remoteURL = "http://localhost:5002"


export default {
    get(id)  {
        return fetch(`${remoteURL}/locations/${id}`).then(l => l.json())
    },
    getAll() {
        return fetch(`${remoteURL}/locations`).then(l => l.json())
    }
}