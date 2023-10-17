const config = {
    base_url:
        window.location.hostname === "localhost"
            ? "http://localhost:8000"
            // ? "https://api.freearianna.org"
            : "https://api.courtwatch.live",
    host_url:
        window.location.hostname === "localhost"
            ? "http://localhost:3000"
            : "https://courtwatch.live",
};

export default config;