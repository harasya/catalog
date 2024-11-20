import * as http from 'node:http';
import { H3Event } from 'h3';
import type { Options } from 'http-proxy-middleware';
import { Request, Response } from 'http-proxy-middleware/dist/types';

interface SwaggerConfig {
    /**
     * Tranform interface model name
     * @param name
     */
    formatModel?: (name: string) => string;
    /**
     * Tranform endpoint URL
     * @param path
     */
    formatURL?: (path: string) => string;
    /**
     * Tranform function name
     * @param method
     * @param path
     */
    formatMethod?: (method: string, path: string) => string;
}
interface ApiServer extends Options {
    /**
     * Uniq name
     * @requires
     */
    name: string;
    /**
     * Base proxy path
     * @requires
     */
    baseUrl: string;
    /**
     * Target proxy
     * @requires
     */
    targetUrl?: string;
    /**
     * API schema url
     */
    schemaUrl?: string;
    /**
     * Schema output destination folder
     * @default './api'
     */
    schemaDest?: string;
    /**
     * Proxy type
     * @default 'basic'
     */
    proxyType?: 'basic' | 'dynamic';
    /**
     * White hostname for dynamic proxy
     * @default []
     */
    allowFrom?: string | string[];
    /**
     * Force add download header when query params 'download' present (dynamic proxy)
     * @default true
     */
    downloadHeader?: boolean;
    /**
     * Download extension (dynamic proxy)
     */
    downloadExt?: string;
    /**
     * Swagger transformer config
     */
    swagger?: SwaggerConfig;
}
type EventInterceptor = (proxyEvent: H3Event, event: H3Event) => unknown | Promise<unknown>;
/**
 * Transform http-proxy-middleware
 * @param handler H3-Compabilities event handler
 */
declare function defineEventInterceptor(handler: EventInterceptor): (proxy: http.ClientRequest | http.IncomingMessage, req: Request, res: Response) => void;
/**
 * Define proxy server
 */
declare function defineServer(servers: ApiServer[]): ApiServer[];

export { type ApiServer, type EventInterceptor, type SwaggerConfig, defineEventInterceptor, defineServer };
