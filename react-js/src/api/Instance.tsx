import axios from "axios";

const instance  = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: 'http://localhost:8088/api'
})
export default instance