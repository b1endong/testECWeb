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

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
