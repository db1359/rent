const config = {
    base_url:
        window.location.hostname === "localhost"
            // ? "http://localhost:8000"
            ? "https://api.freearianna.org"
            : "https://api.freearianna.org",
    host_url:
        window.location.hostname === "localhost"
            ? "http://localhost:3000"
            : "https://www.freearianna.org",
};

export default config;
