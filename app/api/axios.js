import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export default axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-type": "application/json"
    }
});