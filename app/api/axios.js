import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
// TODO: Check if localstorage has token
// If it has add to headers => axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-type": "application/json"
    }
});