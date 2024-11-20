import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler(async (event) => {
    const {apiBaseUrl} = useRuntimeConfig();

    if (!event.node.req.url?.startsWith('/api')) {
        return;
    }

    const proxy = createProxyMiddleware({
        target: apiBaseUrl,
        changeOrigin: true,
        pathRewrite: {
        '^/api': '',
        },
    });

    return new Promise<void>((resolve, reject) => {
        proxy(event.node.req, event.node.res, (err) => {
            if (err) {
                console.error("Proxy error:", err);
                event.node.res.statusCode = 500;
                event.node.res.end(JSON.stringify({ error: "Proxy failed" }));
                reject(err);
            } else {
                resolve();
            }
        });
    });
});