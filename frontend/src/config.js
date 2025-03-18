const config = {
    base_url:
        window.location.hostname === "localhost"
            ? "http://localhost:8000"
            : "https://api.dyi.com",
    host_url:
        window.location.hostname === "localhost"
            ? "http://localhost:3000"
            : "https://DYI",
};

export default config;