import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import axios from "axios";
import {API_BASE_URL} from "./config/api.js";

// Set up global axios defaults
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true; // This ensures cookies are sent with all requests
axios.defaults.timeout = 30000; // 30 second timeout
axios.defaults.headers.common["Content-Type"] = "application/json";

// Add request interceptor for better error handling
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED") {
            console.warn("Network error detected, retrying...");
            // You could implement retry logic here if needed
        }
        return Promise.reject(error);
    }
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
