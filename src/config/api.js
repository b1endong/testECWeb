// Base URL configuration
const getBaseURL = () => {
    // In production, use the backend domain directly
    if (import.meta.env.PROD) {
        return "https://ecweb.me/api/v1";
    }
    // In development, use proxy
    return "/api/v1";
};

export const API_BASE_URL = getBaseURL();
