import axios from "axios";
import {API_BASE_URL} from "./api.js";

// Create a base axios instance for non-authenticated requests
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
