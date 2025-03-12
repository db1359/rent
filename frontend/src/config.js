const config = {
    base_url:
        window.location.hostname === "localhost"
            ? "http://localhost:8000"
            : "https://api.edn.la",
    host_url:
        window.location.hostname === "localhost"
            ? "http://localhost:3000"
            : "https://EDN",
};

export default config;