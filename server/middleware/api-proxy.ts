import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler(async (event) => {
    const {apiBaseUrl} = useRuntimeConfig();

   // Hanya jalankan middleware jika URL diawali dengan `/api`
    if (!event.node.req.url?.startsWith('/api')) {
        return; // Abaikan middleware
    }

    // Initialize the proxy middleware
    const proxy = createProxyMiddleware({
        target: apiBaseUrl, // Use the API base URL from the environment variable
        changeOrigin: true, // Changes the origin of the host header to the target URL
        pathRewrite: {
        '^/api': '', // Remove `/api` from the proxied request path
        },
    });

    // Forward the request using the proxy middleware
    return new Promise<void>((resolve, reject) => {
        proxy(event.node.req, event.node.res, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
        });
    });
});